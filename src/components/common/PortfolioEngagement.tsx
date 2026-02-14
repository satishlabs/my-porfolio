import { Box, IconButton, Stack, Typography } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useEffect, useState } from 'react'
import {
  incrementViews,
  getLikes,
  getDislikes,
  getStoredVote,
  setVote,
  type Vote,
} from '../../lib/engagementStorage'

export default function PortfolioEngagement() {
  const [views, setViews] = useState(0)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [vote, setVoteState] = useState<Vote>(null)

  useEffect(() => {
    setViews(incrementViews())
    setLikes(getLikes())
    setDislikes(getDislikes())
    setVoteState(getStoredVote())
  }, [])

  const handleVote = (newVote: Vote) => {
    const next = vote === newVote ? null : newVote
    const { likes: L, dislikes: D } = setVote(next)
    setLikes(L)
    setDislikes(D)
    setVoteState(next)
  }

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
    </Box>
  )
}
