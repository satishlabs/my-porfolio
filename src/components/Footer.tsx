import { Divider, Link, Stack, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import type { ComponentProps } from 'react'
import { SvgIcon } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import SectionContainer from './common/SectionContainer'
import { externalProfiles } from '../data/profile'

const DockerIcon = (props: ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path d="M20 28h8v8h-8zM30 28h8v8h-8zM40 28h8v8h-8zM20 18h8v8h-8zM30 18h8v8h-8z" fill="currentColor" />
    <path d="M10 32h6v12h30c9.941 0 18-8.059 18-18v-2h-8v2c0 5.523-4.477 10-10 10H10z" fill="currentColor" />
  </SvgIcon>
)

const getIcon = (type: (typeof externalProfiles)[number]['type']) => {
  switch (type) {
    case 'github':
      return <GitHubIcon fontSize="small" />
    case 'linkedin':
      return <LinkedInIcon fontSize="small" />
    case 'docker':
      return <DockerIcon fontSize="small" />
    case 'leetcode':
      return <CodeRoundedIcon fontSize="small" />
    case 'email':
      return <EmailOutlinedIcon fontSize="small" />
    case 'phone':
      return <PhoneOutlinedIcon fontSize="small" />
    default:
      return <CodeRoundedIcon fontSize="small" />
  }
}

const footerNav = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
]

const scrollProps = { spy: true, smooth: true, duration: 500, offset: -96 }

const Footer = () => (
  <SectionContainer disablePaddingTop background="muted">
    <Stack spacing={4} sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto' }}>
      <Typography variant="h6" fontWeight={700} letterSpacing="-0.02em" color="text.primary">
        Satish Prasad
      </Typography>
      <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
        {footerNav.map((item) => (
          <Link
            key={item.label}
            component={ScrollLink}
            to={item.to}
            {...scrollProps}
            color="text.secondary"
            underline="hover"
            sx={{
              cursor: 'pointer',
              fontSize: { xs: '0.95rem', md: '1rem' },
              '&:hover': { color: 'primary.main' },
              '&:focus-visible': { outline: '2px solid', outlineOffset: 4 },
            }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>
      <Divider sx={{ opacity: 0.5 }} />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        sx={{ gap: 2 }}
      >
        {externalProfiles.map((profile) => (
          <Link
            key={profile.label}
            href={profile.url}
            color="text.secondary"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            aria-label={profile.label}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.95rem',
              py: 0.5,
              px: 1,
              borderRadius: 1,
              '&:hover': { color: 'primary.main' },
              '&:focus-visible': { outline: '2px solid', outlineOffset: 4 },
            }}
          >
            {getIcon(profile.type)}
            <span>{profile.label}</span>
          </Link>
        ))}
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.95 }}>
        © {new Date().getFullYear()} Satish Prasad. Senior Java Backend Engineer & Cloud Architect.
      </Typography>
    </Stack>
  </SectionContainer>
)

export default Footer
