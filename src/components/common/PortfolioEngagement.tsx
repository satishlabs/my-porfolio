import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useCallback, useEffect, useState } from 'react'
import {
  fetchCountsFromApi,
  getLikes,
  getDislikes,
  getOrCreateVoterId,
  getStoredVote,
  incrementViews,
  reportViewToApi,
  setStoredVoteOnly,
  setVote as setVoteLocal,
  submitVoteToApi,
  type Vote,
} from '../../lib/engagementStorage'

export default function PortfolioEngagement() {
  const [views, setViews] = useState(0)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [vote, setVoteState] = useState<Vote>(null)
  const [synced, setSynced] = useState(false)

  useEffect(() => {
    let cancelled = false
    const voterId = getOrCreateVoterId()

    async function init() {
      const counts = await fetchCountsFromApi()
      if (cancelled) return
      if (counts) {
        setViews(counts.views)
        setLikes(counts.likes)
        setDislikes(counts.dislikes)
        setSynced(true)
        const afterView = await reportViewToApi()
        if (!cancelled && afterView) {
          setViews(afterView.views)
          setLikes(afterView.likes)
          setDislikes(afterView.dislikes)
        }
        setVoteState(getStoredVote())
        return
      }
      setSynced(false)
      setViews(incrementViews())
      setLikes(getLikes())
      setDislikes(getDislikes())
      setVoteState(getStoredVote())
    }
    init()
    return () => {
      cancelled = true
    }
  }, [])

  const handleVote = useCallback(
    async (newVote: Vote) => {
      const next = vote === newVote ? null : newVote
      if (synced) {
        const voterId = getOrCreateVoterId()
        const counts = await submitVoteToApi(voterId, next)
        if (counts) {
          setLikes(counts.likes)
          setDislikes(counts.dislikes)
          setVoteState(next)
          setStoredVoteOnly(next)
        }
        return
      }
      const { likes: L, dislikes: D } = setVoteLocal(next)
      setLikes(L)
      setDislikes(D)
      setVoteState(next)
    },
    [synced, vote]
  )

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 2,
        py: 1.5,
        px: 2,
        borderRadius: 2,
        border: (t) => `1px solid ${t.palette.divider}`,
        backgroundColor: (t) => t.palette.background.paper,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <VisibilityOutlinedIcon fontSize="small" color="action" />
        <Typography variant="body2" color="text.secondary">
          {views} views
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <IconButton
          size="small"
          color={vote === 'like' ? 'primary' : 'default'}
          onClick={() => handleVote('like')}
          aria-label="Like"
        >
          {vote === 'like' ? <ThumbUpIcon fontSize="small" /> : <ThumbUpOutlinedIcon fontSize="small" />}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <IconButton
          size="small"
          color={vote === 'dislike' ? 'error' : 'default'}
          onClick={() => handleVote('dislike')}
          aria-label="Dislike"
        >
          {vote === 'dislike' ? <ThumbDownIcon fontSize="small" /> : <ThumbDownOutlinedIcon fontSize="small" />}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {dislikes}
        </Typography>
      </Stack>
      {!synced && (
        <Tooltip title="Counts are stored on this device only. Deploy with the engagement API to sync across devices.">
          <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.8 }}>
            (this device)
          </Typography>
        </Tooltip>
      )}
    </Box>
  )
}
