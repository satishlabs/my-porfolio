import { Box, Chip, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import type { ExperienceItem } from '../../data/profile'
import { fadeInUp } from './motion'

type ExperienceHorizontalScrollProps = {
  items: ExperienceItem[]
}

const MAX_TECH_CHIPS = 8

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  const theme = useTheme()
  const techList = item.techHighlights.slice(0, MAX_TECH_CHIPS)
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
      sx={{
        height: '100%',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 2.5, sm: 3 },
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.9,
          },
          '&:hover': {
            boxShadow: theme.shadows[4],
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'primary.main',
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          {item.period}
        </Typography>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 700, lineHeight: 1.3, mb: 0.5 }}>
          {item.company}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500, mb: 1.5 }}>
          {item.role}
        </Typography>
        {item.location ? (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.8125rem' }}>
            {item.location}
          </Typography>
        ) : null}
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            flex: 1,
            lineHeight: 1.6,
            fontSize: '0.875rem',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.summary}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.75} useFlexGap sx={{ mt: 2 }}>
          {techList.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontWeight: 500,
                fontSize: '0.75rem',
                height: 24,
                borderRadius: 1,
                borderColor: 'divider',
                color: 'text.secondary',
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

const ExperienceHorizontalScroll = ({ items }: ExperienceHorizontalScrollProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: { xs: 3, md: 4 },
      }}
    >
      {items.map((item) => (
        <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
      ))}
    </Box>
  )
}

export default ExperienceHorizontalScroll
