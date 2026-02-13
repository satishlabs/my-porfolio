import { Divider, Link, Stack, Typography } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'
import SectionContainer from './common/SectionContainer'
import { externalProfiles } from '../data/profile'

const footerNav = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const scrollProps = { spy: true, smooth: true, duration: 500, offset: -96 }

const Footer = () => (
  <SectionContainer disablePaddingTop background="muted">
    <Stack spacing={5} sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
      <Typography variant="h6" fontWeight={700} letterSpacing="-0.02em">
        Satish Prasad
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center" flexWrap="wrap" useFlexGap>
        {footerNav.map((item) => (
          <Link
            key={item.label}
            component={ScrollLink}
            to={item.to}
            {...scrollProps}
            color="text.secondary"
            underline="hover"
            sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>
      <Divider sx={{ opacity: 0.6 }} />
      <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap" useFlexGap>
        {externalProfiles.map((profile) => (
          <Link
            key={profile.label}
            href={profile.url}
            color="text.secondary"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ fontSize: '0.9rem', '&:hover': { color: 'primary.main' } }}
          >
            {profile.label}
          </Link>
        ))}
      </Stack>
      <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.9 }}>
        © {new Date().getFullYear()} Satish Prasad. Senior Java Backend Engineer & Cloud Architect.
      </Typography>
    </Stack>
  </SectionContainer>
)

export default Footer
