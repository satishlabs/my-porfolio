import { Box, Stack } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  CertificationsSection,
  ProfilesSection,
  ContactSection,
} from './components/sections'

const App = () => (
  <Box
    sx={{
      minHeight: '100vh',
      backgroundImage: (theme) =>
        theme.palette.mode === 'light'
          ? 'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(79, 70, 229, 0.05), transparent 50%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(20, 184, 166, 0.04), transparent 40%)'
          : 'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(99, 102, 241, 0.06), transparent 50%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(20, 184, 166, 0.04), transparent 40%)',
    }}
  >
    <Header />
    <Stack component="main" spacing={0}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ProfilesSection />
      <ContactSection />
    </Stack>
    <Footer />
  </Box>
)

export default App
