import { Box } from '@mui/material'

type LaptopCodeVisualProps = {
  opacity?: number
}

export default function LaptopCodeVisual({ opacity = 0.2 }: LaptopCodeVisualProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 320,
      }}
    >
      {/* Laptop frame */}
      <Box
        sx={(theme) => ({
          position: 'relative',
          borderRadius: 2,
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          opacity,
          overflow: 'hidden',
          boxShadow: theme.shadows[2],
        })}
      >
        <Box sx={{ pt: '58%', position: 'relative' }}>
          {/* Screen / code area */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 0.9,
            }}
          >
            {[
              { w: 88, o: 1 },
              { w: 72, o: 0.85 },
              { w: 94, o: 0.95 },
              { w: 62, o: 0.75 },
              { w: 80, o: 0.9 },
              { w: 58, o: 0.7 },
              { w: 84, o: 0.88 },
            ].map(({ w, o }, i) => (
              <Box
                key={i}
                sx={(theme) => ({
                  height: 3,
                  borderRadius: 0.5,
                  width: `${w}%`,
                  backgroundColor: theme.palette.primary.main,
                  opacity: o,
                })}
              />
            ))}
          </Box>
          {/* Syntax arrows */}
          <Box
            sx={(theme) => ({
              position: 'absolute',
              right: 10,
              top: '28%',
              width: 0,
              height: 0,
              borderLeft: `10px solid ${theme.palette.primary.main}`,
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              opacity: 0.9,
            })}
          />
          <Box
            sx={(theme) => ({
              position: 'absolute',
              right: 10,
              top: '52%',
              width: 0,
              height: 0,
              borderLeft: `10px solid ${theme.palette.primary.main}`,
              borderTop: '7px solid transparent',
              borderBottom: '7px solid transparent',
              opacity: 0.6,
            })}
          />
          <Box
            sx={(theme) => ({
              position: 'absolute',
              right: 10,
              top: '76%',
              width: 0,
              height: 0,
              borderLeft: `8px solid ${theme.palette.primary.main}`,
              borderTop: '5px solid transparent',
              borderBottom: '5px solid transparent',
              opacity: 0.5,
            })}
          />
        </Box>
        {/* Base */}
        <Box
          sx={(theme) => ({
            height: 10,
            mx: 1.5,
            mb: 0.5,
            borderRadius: '0 0 6px 6px',
            backgroundColor: theme.palette.primary.main,
            opacity: 0.7,
          })}
        />
      </Box>
    </Box>
  )
}
