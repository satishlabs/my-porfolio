const VIEWS_KEY = 'portfolio_views'
const LIKES_KEY = 'portfolio_likes'
const DISLIKES_KEY = 'portfolio_dislikes'
const VOTE_KEY = 'portfolio_vote'
const VOTER_ID_KEY = 'portfolio_voter_id'
const COMMENTS_KEY = 'portfolio_comments'

const ENGAGEMENT_API = '/api/engagement'

export type Vote = 'like' | 'dislike' | null

export type EngagementCounts = { views: number; likes: number; dislikes: number }

/** Stable ID for this device (so one vote per device when using API). */
export function getOrCreateVoterId(): string {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem(VOTER_ID_KEY)
  if (!id) {
    id = `v_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`
    localStorage.setItem(VOTER_ID_KEY, id)
  }
  return id
}

/** Fetch counts from API. Returns null if API unavailable or fails. */
export async function fetchCountsFromApi(): Promise<EngagementCounts | null> {
  if (typeof window === 'undefined') return null
  try {
    const res = await fetch(ENGAGEMENT_API, { method: 'GET' })
    if (!res.ok) return null
    const data = (await res.json()) as EngagementCounts
    if (typeof data.views !== 'number' || typeof data.likes !== 'number' || typeof data.dislikes !== 'number')
      return null
    return { views: data.views, likes: data.likes, dislikes: data.dislikes }
  } catch {
    return null
  }
}

/** Report a view to API and return updated counts, or null. */
export async function reportViewToApi(): Promise<EngagementCounts | null> {
  if (typeof window === 'undefined') return null
  try {
    const res = await fetch(ENGAGEMENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'view' }),
    })
    if (!res.ok) return null
    const data = (await res.json()) as EngagementCounts
    if (typeof data.views !== 'number' || typeof data.likes !== 'number' || typeof data.dislikes !== 'number')
      return null
    return data
  } catch {
    return null
  }
}

/** Submit vote to API and return updated counts, or null. */
export async function submitVoteToApi(voterId: string, vote: Vote): Promise<EngagementCounts | null> {
  if (typeof window === 'undefined') return null
  try {
    const res = await fetch(ENGAGEMENT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'vote', voterId, vote }),
    })
    if (!res.ok) return null
    const data = (await res.json()) as EngagementCounts
    if (typeof data.views !== 'number' || typeof data.likes !== 'number' || typeof data.dislikes !== 'number')
      return null
    return data
  } catch {
    return null
  }
}

export type Comment = {
  id: string
  author: string
  text: string
  date: string
  parentId: string | null
}

function getViews(): number {
  if (typeof window === 'undefined') return 0
  const v = localStorage.getItem(VIEWS_KEY)
  return v ? parseInt(v, 10) : 0
}

export function incrementViews(): number {
  if (typeof window === 'undefined') return 0
  const n = getViews() + 1
  localStorage.setItem(VIEWS_KEY, String(n))
  return n
}

export function getViewsCount(): number {
  return getViews()
}

export function getLikes(): number {
  if (typeof window === 'undefined') return 0
  const v = localStorage.getItem(LIKES_KEY)
  return v ? parseInt(v, 10) : 0
}

export function getDislikes(): number {
  if (typeof window === 'undefined') return 0
  const v = localStorage.getItem(DISLIKES_KEY)
  return v ? parseInt(v, 10) : 0
}

export function getStoredVote(): Vote {
  if (typeof window === 'undefined') return null
  const v = localStorage.getItem(VOTE_KEY)
  if (v === 'like' || v === 'dislike') return v
  return null
}

export function setVote(vote: Vote): { likes: number; dislikes: number } {
  if (typeof window === 'undefined') return { likes: getLikes(), dislikes: getDislikes() }
  const prev = getStoredVote()
  let likes = getLikes()
  let dislikes = getDislikes()
  if (prev === 'like') likes = Math.max(0, likes - 1)
  if (prev === 'dislike') dislikes = Math.max(0, dislikes - 1)
  if (vote === 'like') likes += 1
  if (vote === 'dislike') dislikes += 1
  localStorage.setItem(LIKES_KEY, String(likes))
  localStorage.setItem(DISLIKES_KEY, String(dislikes))
  localStorage.setItem(VOTE_KEY, vote ?? '')
  return { likes, dislikes }
}

/** Only persist current user's vote (for UI state when using API). */
export function setStoredVoteOnly(vote: Vote): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(VOTE_KEY, vote ?? '')
}

export function getComments(): Comment[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(COMMENTS_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw) as Comment[]
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export function addComment(comment: Omit<Comment, 'id' | 'date'>): Comment[] {
  if (typeof window === 'undefined') return []
  const list = getComments()
  const newComment: Comment = {
    ...comment,
    id: `c-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    date: new Date().toISOString(),
  }
  const next = [...list, newComment]
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(next))
  return next
}

export function addReply(parentId: string, author: string, text: string): Comment[] {
  return addComment({ author, text, parentId })
}
