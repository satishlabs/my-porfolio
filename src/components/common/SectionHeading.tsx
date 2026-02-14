import { Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp } from './motion'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  action?: ReactNode
  align?: 'left' | 'center'
}

const SectionHeading = ({ eyebrow, title, subtitle, action, align = 'left' }: SectionHeadingProps) => {
  const theme = useTheme()
  const alignment = align === 'center' ? 'center' : 'flex-start'

  return (
    <Stack
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      direction={{ xs: 'column', md: action ? 'row' : 'column' }}
      justifyContent="space-between"
      alignItems={alignment}
      spacing={2}
      sx={{ mb: { xs: 6, md: 8 }, textAlign: align === 'center' ? 'center' : 'left' } as const}
    >
      <Stack spacing={1} alignItems={alignment}>
        {eyebrow ? (
          <Typography
            component="span"
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              letterSpacing: '0.14em',
              fontWeight: 600,
              fontSize: '0.7rem',
            }}
          >
            {eyebrow}
          </Typography>
        ) : null}
        <Typography variant="h2" component="h2" sx={{ maxWidth: 640, letterSpacing: '-0.02em', fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' } }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.75 }}>
            {subtitle}
          </Typography>
        ) : null}
      </Stack>
      {action ? <BoxWrapper>{action}</BoxWrapper> : null}
    </Stack>
  )
}

const BoxWrapper = ({ children }: { children: ReactNode }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    {children}
  </Stack>
)

export default SectionHeading
