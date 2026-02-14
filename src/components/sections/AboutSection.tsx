import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import SkillCategoryGrid from '../common/SkillCategoryGrid'
import LaptopCodeVisual from '../common/LaptopCodeVisual'
import { about, skills, techLearnUrls } from '../../data/profile'

const CONTENT_MAX_WIDTH = 720

const AboutSection = () => {
  const theme = useTheme()
  return (
    <SectionContainer id="about" background="muted">
      {/* Background: laptop with code */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 200, md: 380 },
          maxWidth: '45%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <LaptopCodeVisual opacity={0.12} />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeading
          eyebrow="About"
          title="Trusted engineering partner for secure, cloud-native platforms."
          subtitle="I partner with product, security, and operations teams to transform resilient architectures into measurable business outcomes."
        />
        <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Stack spacing={2.5}>
              {about.map((paragraph) => (
                <Typography
                  key={paragraph}
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: '1rem', lineHeight: 1.8 }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </Paper>
        </Box>

      {/* Technical Leadership: one line + single tech source (grid only) */}
      <SectionHeading
        eyebrow="Technical Leadership"
        title="End-to-end ownership across backend, cloud, and platform engineering."
        subtitle="I build production-grade systems that prioritize reliability, observability, and security from architecture through delivery."
      />
      <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: 'auto', mb: 6 }}>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          From designing APIs and data models to deploying on AWS and Kubernetes, I own the full lifecycle of backend and platform services. I work with Java and the Spring ecosystem daily, integrate event-driven and streaming systems (Kafka, RabbitMQ), and ensure compliance and observability are built in from the start.
        </Typography>
      </Box>

      {/* Single place for tech stack: category grid with learn links */}
      <SkillCategoryGrid categories={skills} learnUrlMap={techLearnUrls} />
      </Box>
    </SectionContainer>
  )
}

export default AboutSection
