import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
import { Divider, Stack, Typography, Chip, Box } from '@mui/material'
import { motion } from 'framer-motion'
import type { ExperienceItem } from '../../data/profile'
import AnimatedCard from './AnimatedCard'
import { staggerContainer, fadeInUp } from './motion'

type ExperienceTimelineProps = {
  items: ExperienceItem[]
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => (
  <Timeline
    position="right"
    sx={{
      p: 0,
      '& .MuiTimelineItem-root:before': {
        flex: 0,
        padding: 0,
      },
    }}
  >
    {items.map((item, index) => (
      <TimelineItem key={`${item.company}-${item.period}`}>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            color="primary"
            sx={{ borderWidth: 2, width: 14, height: 14, mt: 0.5 }}
          />
          {index < items.length - 1 ? <TimelineConnector sx={{ bgcolor: 'primary.main' }} /> : null}
        </TimelineSeparator>
        <TimelineContent sx={{ py: 2, px: 0 }}>
          <AnimatedCard delay={index * 0.12}>
            <Stack spacing={2}>
              <Stack spacing={0.5}>
                <Typography variant="h5" component="h3">
                  {item.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.role}
                </Typography>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.08 }}>
                  {item.period}
                </Typography>
                {item.location ? (
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                ) : null}
              </Stack>
              <Typography variant="body1" color="text.primary">
                {item.summary}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {item.techHighlights.map((tech) => (
                  <Chip key={tech} label={tech} size="small" variant="outlined" />
                ))}
              </Stack>
              {item.projects ? (
                <Stack spacing={3}>
                  <Divider />
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    {item.projects.map((project) => (
                      <motion.div key={project.name} variants={fadeInUp}>
                        <Stack spacing={1.5}>
                          <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {project.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {project.summary}
                            </Typography>
                          </Box>
                          <Box
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
                              <Typography
                                component="li"
                                key={achievement}
                                variant="body2"
                                color="text.primary"
                                sx={{ pl: 0.5 }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {project.techStack.map((tech) => (
                              <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                            ))}
                          </Stack>
                        </Stack>
                      </motion.div>
                    ))}
                  </motion.div>
                </Stack>
              ) : null}
            </Stack>
          </AnimatedCard>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
)

export default ExperienceTimeline
