import { useState, useCallback } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import { getComments, addComment, addReply, type Comment } from '../../lib/engagementStorage'

const CONTENT_MAX_WIDTH = 640

function formatDate(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString(undefined, { dateStyle: 'medium' })
  } catch {
    return iso
  }
}

function CommentItem({
  comment,
  replies,
  onReply,
}: {
  comment: Comment
  replies: Comment[]
  onReply: () => void
}) {
  const [showReply, setShowReply] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [replyAuthor, setReplyAuthor] = useState('')

  const handleSubmitReply = () => {
    if (!replyText.trim() || !replyAuthor.trim()) return
    addReply(comment.id, replyAuthor.trim(), replyText.trim())
    setReplyText('')
    setReplyAuthor('')
    setShowReply(false)
    onReply()
  }

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        p: 2.5,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Stack spacing={1.5}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Typography variant="subtitle2" fontWeight={600} color="text.primary">
            {comment.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDate(comment.date)}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
          {comment.text}
        </Typography>
        <Button
          size="small"
          startIcon={<ReplyOutlinedIcon />}
          onClick={() => setShowReply(true)}
          sx={{ alignSelf: 'flex-start', textTransform: 'none', fontWeight: 600 }}
        >
          Reply
        </Button>
        {showReply && (
          <Paper
            elevation={0}
            sx={(theme) => ({
              p: 2,
              mt: 0.5,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            })}
          >
            <Stack spacing={2}>
              <TextField size="small" label="Your name" value={replyAuthor} onChange={(e) => setReplyAuthor(e.target.value)} fullWidth />
              <TextField size="small" label="Reply" value={replyText} onChange={(e) => setReplyText(e.target.value)} multiline rows={2} fullWidth />
              <Stack direction="row" spacing={1}>
                <Button size="small" variant="contained" onClick={handleSubmitReply} disabled={!replyText.trim() || !replyAuthor.trim()}>
                  Post reply
                </Button>
                <Button size="small" onClick={() => { setShowReply(false); setReplyText(''); setReplyAuthor('') }}>
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Paper>
        )}
        {replies.length > 0 && (
          <Stack spacing={1.5} sx={{ mt: 1, pl: { xs: 0, sm: 2 } }}>
            {replies.map((r) => (
              <Paper
                key={r.id}
                elevation={0}
                sx={(theme) => ({
                  p: 2,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
                })}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" gap={0.5} sx={{ mb: 0.5 }}>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ fontSize: '0.8125rem' }}>
                    {r.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatDate(r.date)}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.875rem', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                  {r.text}
                </Typography>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  )
}

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(() => getComments())
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const refresh = useCallback(() => {
    setComments(getComments())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim() || !author.trim()) return
    addComment({ author: author.trim(), text: text.trim(), parentId: null })
    setComments(getComments())
    setText('')
    setAuthor('')
  }

  const topLevel = comments.filter((c) => !c.parentId)
  const getReplies = (parentId: string) => comments.filter((c) => c.parentId === parentId)

  return (
    <SectionContainer id="comments" background="muted">
      <SectionHeading
        eyebrow="Comments"
        title="Leave a comment or reply."
        subtitle="Comments are stored locally in your browser."
        align="center"
      />
      <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: 'auto' }}>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={0}
          sx={(theme) => ({
            p: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <Stack spacing={2.5}>
            <TextField
              size="medium"
              label="Your name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              fullWidth
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              multiline
              rows={4}
              required
              fullWidth
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendOutlinedIcon />}
              disabled={!text.trim() || !author.trim()}
              sx={{ alignSelf: 'flex-start', px: 3, py: 1.25, borderRadius: 2 }}
            >
              Post comment
            </Button>
          </Stack>
        </Paper>

        {topLevel.length === 0 ? (
          <Paper
            elevation={0}
            sx={(theme) => ({
              p: 4,
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
              textAlign: 'center',
            })}
          >
            <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 48, color: 'text.disabled', mb: 1 }} />
            <Typography variant="body1" color="text.secondary">
              No comments yet. Be the first to comment.
            </Typography>
          </Paper>
        ) : (
          <Stack spacing={2}>
            {topLevel.map((c) => (
              <CommentItem key={c.id} comment={c} replies={getReplies(c.id)} onReply={refresh} />
            ))}
          </Stack>
        )}
      </Box>
    </SectionContainer>
  )
}
