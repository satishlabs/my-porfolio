import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { hero } from '../../data/profile'
import SectionContainer from '../common/SectionContainer'
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
        spacing={{ xs: 4, md: 6 }}
        sx={{ position: 'relative' }}
      >
        <Stack component={motion.div} variants={fadeInUp} spacing={2.5}>
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
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
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
              maxWidth: 560,
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
            }}
          >
            {hero.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 560, fontSize: { xs: '1rem', md: '1.075rem' }, lineHeight: 1.7 }}
          >
            {hero.tagline}
          </Typography>
        </Stack>

        <Stack
          component={motion.div}
          variants={fadeInUp}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', sm: 'center' }}
        >
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

        <Stack
          component={motion.div}
          variants={fadeInUp}
          direction="row"
          spacing={1.5}
          flexWrap="wrap"
          useFlexGap
        >
          {highlights.map((item) => (
            <Chip key={item} label={item} variant="outlined" color="secondary" />
          ))}
        </Stack>
        <Stack
          component={motion.div}
          variants={fadeInUp}
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          color="text.secondary"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnOutlinedIcon fontSize="small" />
            <Typography variant="body2">Bangalore, India</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailOutlinedIcon fontSize="small" />
            <Typography variant="body2">prasadsatish.rnc@gmail.com</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  </SectionContainer>
)

export default HeroSection
