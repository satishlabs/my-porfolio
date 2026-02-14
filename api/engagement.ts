import type { VercelRequest, VercelResponse } from '@vercel/node'

const VIEWS_KEY = 'portfolio:views'
const LIKES_KEY = 'portfolio:likes'
const DISLIKES_KEY = 'portfolio:dislikes'
const VOTERS_KEY = 'portfolio:voters'

function cors(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  cors(res)
  if (req.method === 'OPTIONS') return res.status(204).end()

  let kv: typeof import('@vercel/kv').kv
  try {
    const mod = await import('@vercel/kv')
    kv = mod.kv
  } catch {
    return res.status(503).json({ error: 'KV not configured', fallback: true })
  }

  if (req.method === 'GET') {
    try {
      const [views, likes, dislikes] = await Promise.all([
        kv.get<number>(VIEWS_KEY).then((v) => (typeof v === 'number' ? v : 0)),
        kv.get<number>(LIKES_KEY).then((v) => (typeof v === 'number' ? v : 0)),
        kv.get<number>(DISLIKES_KEY).then((v) => (typeof v === 'number' ? v : 0)),
      ])
      return res.status(200).json({ views, likes, dislikes })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: 'Failed to get counts' })
    }
  }

  if (req.method === 'POST') {
    const body = typeof req.body === 'object' && req.body ? req.body : {}
    const action = body.action as string | undefined

    if (action === 'view') {
      try {
        const views = (await kv.incr(VIEWS_KEY)) as number
        const [likes, dislikes] = await Promise.all([
          kv.get<number>(LIKES_KEY).then((v) => (typeof v === 'number' ? v : 0)),
          kv.get<number>(DISLIKES_KEY).then((v) => (typeof v === 'number' ? v : 0)),
        ])
        return res.status(200).json({ views, likes, dislikes })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: 'Failed to increment view' })
      }
    }

    if (action === 'vote') {
      const voterId = body.voterId as string | undefined
      const vote = body.vote as 'like' | 'dislike' | null | undefined
      if (!voterId || (vote !== 'like' && vote !== 'dislike' && vote !== null)) {
        return res.status(400).json({ error: 'Missing voterId or invalid vote' })
      }
      try {
        const prev = (await kv.hget<string>(VOTERS_KEY, voterId)) as 'like' | 'dislike' | null | undefined
        let likes = (await kv.get<number>(LIKES_KEY)) as number
        let dislikes = (await kv.get<number>(DISLIKES_KEY)) as number
        if (typeof likes !== 'number') likes = 0
        if (typeof dislikes !== 'number') dislikes = 0
        if (prev === 'like') likes = Math.max(0, likes - 1)
        if (prev === 'dislike') dislikes = Math.max(0, dislikes - 1)
        if (vote === 'like') likes += 1
        if (vote === 'dislike') dislikes += 1
        await Promise.all([
          kv.set(LIKES_KEY, likes),
          kv.set(DISLIKES_KEY, dislikes),
          vote ? kv.hset(VOTERS_KEY, { [voterId]: vote }) : kv.hdel(VOTERS_KEY, voterId),
        ])
        const views = (await kv.get<number>(VIEWS_KEY)) as number
        return res.status(200).json({
          views: typeof views === 'number' ? views : 0,
          likes,
          dislikes,
        })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: 'Failed to submit vote' })
      }
    }

    return res.status(400).json({ error: 'Invalid action' })
  }

  res.setHeader('Allow', 'GET, POST, OPTIONS')
  return res.status(405).json({ error: 'Method not allowed' })
}
