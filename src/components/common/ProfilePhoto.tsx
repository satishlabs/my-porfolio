import { Box, useTheme } from '@mui/material'
import { useState } from 'react'

const PROFILE_PHOTO_SRC = '/profile-photo.png'

type ProfilePhotoProps = {
  size?: number | { xs?: number; sm?: number; md?: number }
  alt?: string
  showFallback?: boolean
}

const ProfilePhoto = ({
  size = { xs: 160, sm: 200, md: 240 },
  alt = 'Profile photo',
  showFallback = true,
}: ProfilePhotoProps) => {
  const theme = useTheme()
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const sizeSx =
    typeof size === 'number'
      ? { width: size, height: size, minWidth: size, minHeight: size }
      : {
          width: { xs: size.xs ?? 160, sm: size.sm ?? 200, md: size.md ?? 240 },
          height: { xs: size.xs ?? 160, sm: size.sm ?? 200, md: size.md ?? 240 },
          minWidth: { xs: size.xs ?? 160, sm: size.sm ?? 200, md: size.md ?? 240 },
          minHeight: { xs: size.xs ?? 160, sm: size.sm ?? 200, md: size.md ?? 240 },
        }

  if (error && showFallback) {
    return (
      <Box
        aria-hidden
        sx={{
          ...sizeSx,
          borderRadius: '50%',
          border: `3px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
          color: theme.palette.text.secondary,
          fontSize: '3rem',
          fontWeight: 700,
          boxShadow: theme.shadows[4],
        }}
      >
        SP
      </Box>
    )
  }

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        ...sizeSx,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `3px solid ${theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]}`,
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        component="img"
        src={PROFILE_PHOTO_SRC}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </Box>
  )
}

export default ProfilePhoto
