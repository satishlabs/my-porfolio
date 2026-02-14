import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import type { ThemeOptions, PaletteMode } from '@mui/material'

type ColorModeContextValue = {
  mode: PaletteMode
  toggleColorMode: () => void
  setMode: (mode: PaletteMode) => void
}

const STORAGE_KEY = 'satish-portfolio-color-mode'

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined)

const primary = {
  light: '#6366F1',
  main: '#4F46E5',
  dark: '#4338CA',
}

const secondary = {
  light: '#2DD4BF',
  main: '#14B8A6',
  dark: '#0D9488',
}

const neutral = {
  50: '#F8FAFC',
  100: '#F1F5F9',
  200: '#E2E8F0',
  300: '#CBD5E1',
  400: '#94A3B8',
  500: '#64748B',
  600: '#475569',
  700: '#334155',
  800: '#1E293B',
  900: '#0F172A',
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary,
    secondary,
    ...(mode === 'light'
      ? {
          background: {
            default: neutral[50],
            paper: '#FFFFFF',
          },
          text: {
            primary: neutral[900],
            secondary: neutral[600],
          },
        }
      : {
          background: {
            default: neutral[900],
            paper: neutral[800],
          },
          text: {
            primary: '#F9FAFB',
            secondary: neutral[300],
          },
        }),
  },
  typography: {
    fontFamily: `'Plus Jakarta Sans', 'Inter', system-ui, sans-serif`,
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
      fontSize: 'clamp(2rem, 5vw, 3.75rem)',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.25,
      fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
    body2: {
      lineHeight: 1.65,
      letterSpacing: '0.01em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          paddingInline: 28,
          paddingBlock: 14,
          fontWeight: 600,
          letterSpacing: '0.03em',
          transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineOffset: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: mode === 'light' ? `1px solid ${neutral[200]}` : `1px solid ${neutral[700]}`,
          boxShadow:
            mode === 'light'
              ? '0 1px 3px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)'
              : '0 1px 3px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(18px)',
          backgroundColor:
            mode === 'light'
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(15, 23, 42, 0.85)',
          border: mode === 'light' ? `1px solid ${neutral[200]}` : `1px solid ${neutral[700]}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 500,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
})

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as PaletteMode | null
    if (stored === 'light' || stored === 'dark') {
      return stored
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, mode)
    }
  }, [mode])

  const toggleColorMode = useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo<ColorModeContextValue>(
    () => ({
      mode,
      toggleColorMode,
      setMode,
    }),
    [mode, toggleColorMode],
  )

  const theme = useMemo(() => {
    const baseTheme = createTheme(getDesignTokens(mode))
    return responsiveFontSizes(baseTheme)
  }, [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}

const useColorMode = (): ColorModeContextValue => {
  const context = useContext(ColorModeContext)

  if (!context) {
    throw new Error('useColorMode must be used within ThemeProvider')
  }

  return context
}

export { ThemeProvider, useColorMode }
