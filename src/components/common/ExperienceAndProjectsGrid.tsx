import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import type { ExperienceItem, ProjectHighlight } from '../../data/profile'
import { fadeInUp } from './motion'

const MAX_TECH = 10

type ExperienceAndProjectsGridProps = {
  experience: ExperienceItem[]
  projects: ProjectHighlight[]
}

function getProjectsForCompany(company: string, projects: ProjectHighlight[]): ProjectHighlight[] {
  return projects.filter((p) => p.company === company)
}

function RoleWithProjectsBlock({
  role,
  projects,
}: {
  role: ExperienceItem
  projects: ProjectHighlight[]
}) {
  const theme = useTheme()
  const techList = role.techHighlights.slice(0, MAX_TECH)

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
      sx={{
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease',
        '&:hover': { boxShadow: theme.shadows[3] },
      }}
    >
      {/* Role header */}
      <Box
        sx={{
          position: 'relative',
          px: { xs: 2.5, sm: 3 },
          py: { xs: 2.5, sm: 3 },
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.9,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'primary.main',
            textTransform: 'uppercase',
            display: 'block',
            mb: 1,
          }}
        >
          {role.period}
        </Typography>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 700, lineHeight: 1.25, mb: 0.5 }}>
          {role.company}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600, mb: 1 }}>
          {role.role}
        </Typography>
        {role.location && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.8125rem' }}>
            {role.location}
          </Typography>
        )}
        <Typography variant="body1" color="text.primary" sx={{ lineHeight: 1.65, mb: 2 }}>
          {role.summary}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={0.75} useFlexGap>
          {techList.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontWeight: 500,
                fontSize: '0.75rem',
                height: 26,
                borderRadius: 1,
                borderColor: 'divider',
                color: 'text.secondary',
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Projects under this role */}
      {projects.length > 0 && (
        <>
          <Divider sx={{ mx: 2 }} />
          <Stack sx={{ px: { xs: 2.5, sm: 3 }, py: 2 }} spacing={3}>
            {projects.map((project) => (
              <Box
                key={project.name}
                sx={{
                  pl: 2,
                  borderLeft: '2px solid',
                  borderColor: theme.palette.divider,
                }}
              >
                <Typography variant="h6" component="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, lineHeight: 1.6 }}>
                  {project.problem}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                  {project.architecture}
                </Typography>
                <Stack
                  component="ul"
                  sx={{
                    pl: 2.5,
                    m: 0,
                    mb: 1.5,
                    gap: 0.5,
                    listStyleType: 'disc',
                  }}
                >
                  {project.achievements.map((achievement) => (
                    <Typography
                      component="li"
                      key={achievement}
                      variant="body2"
                      color="text.primary"
                      sx={{ pl: 0.5, lineHeight: 1.5 }}
                    >
                      {achievement}
                    </Typography>
                  ))}
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={0.75} useFlexGap>
                  {project.techStack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      variant="filled"
                      color="primary"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        height: 24,
                        borderRadius: 1,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </>
      )}
    </Box>
  )
}

const ExperienceAndProjectsGrid = ({ experience, projects }: ExperienceAndProjectsGridProps) => {
  return (
    <Stack spacing={4}>
      {experience.map((role) => (
        <RoleWithProjectsBlock
          key={`${role.company}-${role.period}`}
          role={role}
          projects={getProjectsForCompany(role.company, projects)}
        />
      ))}
    </Stack>
  )
}

export default ExperienceAndProjectsGrid
