import { Box, Container, alpha } from '@mui/material'
import type { ReactNode } from 'react'
import { Element } from 'react-scroll'

type SectionContainerProps = {
  id?: string
  background?: 'default' | 'muted'
  children: ReactNode
  disablePaddingTop?: boolean
}

const SectionContainer = ({
  id,
  background = 'default',
  children,
  disablePaddingTop = false,
}: SectionContainerProps) => {
  const content = (
    <Box
      component="section"
      id={id}
      sx={(theme) => ({
        position: 'relative',
        py: { xs: disablePaddingTop ? 6 : 10, md: disablePaddingTop ? 8 : 14 },
        scrollMarginTop: { xs: 88, md: 120 },
        backgroundColor:
          background === 'muted'
            ? theme.palette.mode === 'light'
              ? alpha(theme.palette.primary.main, 0.015)
              : alpha(theme.palette.primary.main, 0.04)
            : 'transparent',
      })}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )

  if (!id) {
    return content
  }

  return (
    <Element name={id} style={{ scrollMarginTop: 96 }}>
      {content}
    </Element>
  )
}

export default SectionContainer
