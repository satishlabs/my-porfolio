import { Box, Chip, Link, Paper, Stack, Typography } from '@mui/material'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import SkillCategoryGrid from '../common/SkillCategoryGrid'
import { skills, techLearnUrls } from '../../data/profile'

const keyTechStack = [
  'Java', 'Spring Boot', 'Spring Cloud', 'AWS', 'Kubernetes', 'Docker',
  'Kafka', 'Redis', 'PostgreSQL', 'DynamoDB', 'GraphQL', 'Microservices',
]

const CONTENT_MAX_WIDTH = 680

const SkillsSection = () => (
  <SectionContainer id="skills" background="muted">
    <SectionHeading
      eyebrow="Technical Leadership"
      title="End-to-end ownership across backend, cloud, and platform engineering."
      subtitle="I build production-grade systems that prioritize reliability, observability, and security from architecture through delivery."
    />
    <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: 'auto', mb: 8 }}>
      <Paper
        elevation={0}
        sx={(theme) => ({
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Stack spacing={3}>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            From designing APIs and data models to deploying on AWS and Kubernetes, I own the full lifecycle of backend and platform services. I work with Java and the Spring ecosystem daily, integrate event-driven and streaming systems (Kafka, RabbitMQ), and ensure compliance and observability are built in from the start.
          </Typography>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600, mb: 1.5 }}>
              Key technologies — click to learn
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
              {keyTechStack.map((tech) => {
                const url = techLearnUrls[tech]
                const chip = (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="filled"
                    color="primary"
                    size="small"
                    sx={{
                      fontWeight: 500,
                      borderRadius: 1.5,
                      ...(url && { '&:hover': { opacity: 0.9 } }),
                    }}
                  />
                )
                return url ? (
                  <Link
                    key={tech}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                    color="inherit"
                    sx={{ display: 'inline-flex' }}
                    aria-label={`Learn ${tech}`}
                  >
                    {chip}
                  </Link>
                ) : (
                  chip
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
    <SkillCategoryGrid categories={skills} learnUrlMap={techLearnUrls} />
  </SectionContainer>
)

export default SkillsSection
