import { Box, Chip, Stack, Typography } from '@mui/material'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import AnimatedCard from '../common/AnimatedCard'
import { projectHighlights } from '../../data/profile'

const ProjectsSection = () => (
  <SectionContainer id="projects" background="muted">
    <SectionHeading
      eyebrow="Project Highlights"
      title="Delivering resilient architectures that stand up to enterprise scale."
      subtitle="A selection of engagements where architecture rigor, automation, and security-forward design created measurable impact."
    />
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 3, md: 4 },
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      }}
    >
      {projectHighlights.map((project, index) => (
        <AnimatedCard key={project.name} delay={index * 0.1}>
          <Stack spacing={2.5}>
            <Stack spacing={1}>
              <Typography variant="h5" component="h3">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.problem}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {project.architecture}
            </Typography>
            <Stack
              component="ul"
              sx={{
                pl: 2.5,
                m: 0,
                display: 'grid',
                gap: 1,
                listStyleType: 'disc',
              }}
            >
              {project.achievements.map((achievement) => (
                <Typography component="li" key={achievement} variant="body2" color="text.primary" sx={{ pl: 0.5 }}>
                  {achievement}
                </Typography>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {project.techStack.map((tech) => (
                <Chip key={tech} label={tech} size="small" variant="outlined" />
              ))}
            </Stack>
          </Stack>
        </AnimatedCard>
      ))}
    </Box>
  </SectionContainer>
)

export default ProjectsSection
