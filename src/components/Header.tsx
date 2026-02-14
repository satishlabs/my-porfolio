import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import type { Theme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { Link as ScrollLink } from 'react-scroll'
import { useColorMode } from '../theme'
import {
  AboutSection,
  ExperienceSection,
  CertificationsSection,
  EducationSection,
  ProfilesSection,
  ContactSection,
} from './sections'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Credentials', to: 'credentials' },
  { label: 'Education', to: 'education' },
  { label: 'Profiles', to: 'profiles' },
  { label: 'Contact', to: 'contact' },
]

const scrollProps = {
  spy: true,
  smooth: true,
  duration: 600,
  offset: -96,
  activeClass: 'active',
}

const navLinkSx = (_theme: Theme) => ({
  color: 'text.secondary',
  fontSize: '0.9375rem',
  fontWeight: 500,
  letterSpacing: '0.01em',
  py: 1.25,
  px: 1.5,
  minHeight: 44,
  borderRadius: 1,
  transition: 'color 0.2s ease',
  '&:hover': {
    color: 'text.primary',
  },
  '&.active': {
    color: 'primary.main',
    fontWeight: 600,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 10,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
    },
  },
  '&:focus-visible': {
    outline: '2px solid',
    outlineOffset: 2,
  },
})

function SectionPopupContent({ sectionId }: { sectionId: string }) {
  switch (sectionId) {
    case 'about':
      return <AboutSection />
    case 'experience':
      return <ExperienceSection />
    case 'credentials':
      return <CertificationsSection />
    case 'education':
      return <EducationSection />
    case 'profiles':
      return <ProfilesSection />
    case 'contact':
      return <ContactSection />
    default:
      return null
  }
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [popupSection, setPopupSection] = useState<string | null>(null)
  const { mode, toggleColorMode } = useColorMode()

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev)
  const handleOpenPopup = (to: string) => {
    setDrawerOpen(false)
    setPopupSection(to)
  }
  const handleClosePopup = () => setPopupSection(null)

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={(theme) => ({
        top: 0,
        backgroundImage: 'none',
        zIndex: theme.zIndex.drawer + 2,
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, sm: 3 },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ScrollLink to="home" {...scrollProps} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontSize: '1.125rem',
                color: 'text.primary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Satish Prasad
            </Typography>
          </ScrollLink>

          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                component="button"
                type="button"
                underline="none"
                sx={(theme) => ({
                  ...navLinkSx(theme),
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  font: 'inherit',
                })}
                onClick={() => handleOpenPopup(item.to)}
              >
                {item.label}
              </Link>
            ))}
            <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 1 }} />
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle light/dark mode"
              color="inherit"
              sx={{
                color: 'text.secondary',
                minWidth: 40,
                minHeight: 40,
                '&:hover': { color: 'primary.main', backgroundColor: 'action.hover' },
                '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
              }}
            >
              {mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
            </IconButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Toggle light/dark mode"
              color="inherit"
              sx={{
                color: 'text.secondary',
                minWidth: 44,
                minHeight: 44,
                '&:hover': { color: 'primary.main' },
                '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
              }}
            >
              {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Open menu"
              sx={{
                color: 'text.primary',
                minWidth: 44,
                minHeight: 44,
                '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: (theme) => ({
            width: 300,
            maxWidth: '90vw',
            borderLeft: `1px solid ${theme.palette.divider}`,
          }),
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', py: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
            <IconButton onClick={handleDrawerToggle} aria-label="Close menu" size="small" sx={{ minWidth: 40, minHeight: 40 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
          <Divider sx={{ my: 1 }} />
          <List sx={{ px: 1.5, py: 0 }}>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  onClick={() => handleOpenPopup(item.to)}
                  sx={(theme) => ({
                    borderRadius: 1.5,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'light' ? 'rgba(79, 70, 229, 0.08)' : 'rgba(99, 102, 241, 0.12)',
                      color: 'primary.main',
                    },
                    '&:focus-visible': { outline: '2px solid', outlineOffset: 2 },
                  })}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.9375rem' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Dialog
        open={Boolean(popupSection)}
        onClose={handleClosePopup}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: (theme) => ({
            borderRadius: 3,
            maxHeight: '90vh',
            border: `1px solid ${theme.palette.divider}`,
          }),
        }}
      >
        <Stack direction="row" justifyContent="flex-end" alignItems="center" sx={{ pr: 1, pt: 1 }}>
          <IconButton onClick={handleClosePopup} aria-label="Close" size="small" sx={{ minWidth: 40, minHeight: 40 }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent sx={{ pt: 0, overflow: 'auto' }}>
          {popupSection && <SectionPopupContent sectionId={popupSection} />}
        </DialogContent>
      </Dialog>
    </AppBar>
  )
}

export default Header
