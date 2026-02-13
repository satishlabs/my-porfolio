import { Card, CardContent, useTheme, type SxProps, type Theme } from '@mui/material'
import { motion } from 'framer-motion'
import type { TargetAndTransition, Variants } from 'framer-motion'
import { useMemo, type ReactNode } from 'react'
import { fadeInUp } from './motion'

type AnimatedCardProps = {
  children: ReactNode
  elevation?: number
  delay?: number
  disablePadding?: boolean
}

const MotionCard = motion(Card)

const AnimatedCard = ({
  children,
  elevation = 0,
  delay = 0,
  disablePadding = false,
}: AnimatedCardProps) => {
  const theme = useTheme()
  const cardVariants = useMemo<Variants>(() => {
    const visible = fadeInUp.visible as TargetAndTransition
    return {
      hidden: fadeInUp.hidden,
      visible: {
        ...visible,
        transition: {
          ...(visible.transition ?? {}),
          delay,
        },
      },
    }
  }, [delay])
  const baseStyles: SxProps<Theme> = {
    height: '100%',
    borderColor:
      theme.palette.mode === 'light'
        ? 'rgba(226, 232, 240, 0.9)'
        : 'rgba(51, 65, 85, 0.5)',
    background:
      theme.palette.mode === 'light'
        ? 'rgba(255, 255, 255, 0.8)'
        : 'rgba(30, 41, 59, 0.5)',
    backdropFilter: 'blur(8px)',
  } as const

  return (
    <MotionCard
      elevation={elevation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      sx={baseStyles}
    >
      {disablePadding ? children : <CardContent sx={{ p: { xs: 3, md: 4 } }}>{children}</CardContent>}
    </MotionCard>
  )
}

export default AnimatedCard
