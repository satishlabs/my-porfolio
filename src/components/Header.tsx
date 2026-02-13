import { useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { Link as ScrollLink } from 'react-scroll'
import { useColorMode } from '../theme'

const navItems = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Credentials', to: 'credentials' },
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

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { mode, toggleColorMode } = useColorMode()

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        mt: { xs: 2, md: 3 },
        backgroundImage: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <Toolbar
        sx={(theme) => ({
          borderRadius: 12,
          px: { xs: 2, md: 3 },
          py: { xs: 1.25, md: 1.5 },
          mx: { xs: 2, md: 'auto' },
          width: { xs: 'calc(100% - 32px)', md: 'auto' },
          backdropFilter: 'blur(16px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? 'rgba(255,255,255,0.9)'
              : 'rgba(15,23,42,0.9)',
          border: theme.palette.mode === 'light'
            ? '1px solid rgba(226, 232, 240, 0.8)'
            : '1px solid rgba(51, 65, 85, 0.5)',
          boxShadow:
            theme.palette.mode === 'light'
              ? '0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)'
              : '0 1px 3px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
        })}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" component="span" fontWeight={700} letterSpacing="-0.02em">
            Satish Prasad
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={ScrollLink}
              to={item.to}
              {...scrollProps}
              sx={{
                fontWeight: 500,
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
                '&.active': {
                  color: 'primary.main',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          <IconButton
            onClick={toggleColorMode}
            color="primary"
            aria-label="Toggle color mode"
            sx={{ border: '1px solid', borderColor: 'divider' }}
          >
            {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton onClick={toggleColorMode} aria-label="Toggle color mode" color="primary">
            {mode === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <IconButton onClick={handleDrawerToggle} aria-label="Open navigation menu">
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 280, p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h6">Navigate</Typography>
            <IconButton onClick={handleDrawerToggle} aria-label="Close navigation menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={ScrollLink}
                  to={item.to}
                  {...scrollProps}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
