import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { hero, contact } from '../../data/profile'
import SectionContainer from '../common/SectionContainer'
import ProfilePhoto from '../common/ProfilePhoto'
import PortfolioEngagement from '../common/PortfolioEngagement'
import { fadeInUp, staggerContainer } from '../common/motion'

const highlights = ['Cloud-Native Systems', 'Microservices Architecture', 'Security & Compliance']
const scrollProps = {
  spy: true,
  smooth: true,
  duration: 600,
  offset: -96,
  activeClass: 'active',
}

const HeroSection = () => (
  <SectionContainer id="home" disablePaddingTop>
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { xs: 3, md: 5 },
        px: { xs: 3, md: 10 },
        py: { xs: 10, md: 16 },
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.04) 0%, rgba(20, 184, 166, 0.06) 50%, rgba(79, 70, 229, 0.03) 100%)'
            : 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(20, 184, 166, 0.06) 50%, rgba(99, 102, 241, 0.04) 100%)',
        border: (theme) =>
          theme.palette.mode === 'light'
            ? '1px solid rgba(79, 70, 229, 0.08)'
            : '1px solid rgba(99, 102, 241, 0.12)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: (theme) =>
            theme.palette.mode === 'light'
              ? 'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(79, 70, 229, 0.08), transparent 50%), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(20, 184, 166, 0.06), transparent 45%)'
              : 'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(99, 102, 241, 0.1), transparent 50%), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(20, 184, 166, 0.08), transparent 45%)',
        }}
      />
      <Stack
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 5, md: 8 }}
        alignItems={{ xs: 'stretch', md: 'center' }}
        justifyContent="space-between"
        sx={{ position: 'relative' }}
      >
        <Stack
          component={motion.div}
          variants={fadeInUp}
          spacing={3}
          sx={{
            flex: { md: '1 1 0%' },
            minWidth: 0,
            maxWidth: { md: 560 },
          }}
        >
          <Chip
            label="Senior Java Backend Engineer"
            color="primary"
            variant="filled"
            sx={{
              alignSelf: 'flex-start',
              fontWeight: 600,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              px: 1.5,
              py: 0.5,
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            {hero.name}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color="primary.main"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.2rem' },
              lineHeight: 1.4,
            }}
          >
            {hero.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9375rem', md: '1rem' }, lineHeight: 1.7 }}>
            {hero.tagline}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 0.5 }}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              component={ScrollLink}
              to={hero.primaryCtas[0].href.replace('#', '')}
              {...scrollProps}
            >
              {hero.primaryCtas[0].label}
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              component="a"
              href={hero.primaryCtas[1].href}
              download={Boolean(hero.primaryCtas[1].download)}
            >
              {hero.primaryCtas[1].label}
            </Button>
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ pt: 0.5 }}>
            {highlights.map((item) => (
              <Chip key={item} label={item} variant="outlined" color="secondary" size="small" sx={{ fontWeight: 500 }} />
            ))}
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2.5 }} color="text.secondary" sx={{ pt: 0.5 }}>
            <Stack direction="row" spacing={0.75} alignItems="center">
              <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Bangalore, India</Typography>
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center" component="a" href={`mailto:${contact.email}`} sx={{ color: 'inherit', textDecoration: 'none' }}>
              <EmailOutlinedIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{contact.email}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.75} alignItems="center" component="a" href={contact.phoneTel} sx={{ color: 'inherit', textDecoration: 'none' }}>
              <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{contact.phone}</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Box
          component={motion.div}
          variants={fadeInUp}
          sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            order: { xs: -1, md: 0 },
          }}
        >
          <Box
            sx={(theme) => ({
              p: 1.5,
              borderRadius: 4,
              boxShadow: theme.shadows[8],
              border: `2px solid ${theme.palette.divider}`,
              background: theme.palette.mode === 'light' ? 'linear-gradient(145deg, #e2e8f0 0%, #f1f5f9 100%)' : 'linear-gradient(145deg, #334155 0%, #1e293b 100%)',
            })}
          >
            <Box sx={{ borderRadius: 3, overflow: 'hidden' }}>
              <ProfilePhoto alt={hero.name} size={{ xs: 160, sm: 200, md: 240 }} />
            </Box>
          </Box>
        </Box>
      </Stack>
      <Box sx={{ position: 'relative', mt: 4 }}>
        <PortfolioEngagement />
      </Box>
    </Box>
  </SectionContainer>
)

export default HeroSection
