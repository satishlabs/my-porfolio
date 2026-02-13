import { Box, CardActionArea, Stack, SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import CodeRoundedIcon from '@mui/icons-material/CodeRounded'
import type { ComponentProps } from 'react'
import { externalProfiles } from '../../data/profile'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import AnimatedCard from '../common/AnimatedCard'

const DockerIcon = (props: ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 64 64">
    <path
      d="M20 28h8v8h-8zM30 28h8v8h-8zM40 28h8v8h-8zM20 18h8v8h-8zM30 18h8v8h-8z"
      fill="currentColor"
    />
    <path
      d="M10 32h6v12h30c9.941 0 18-8.059 18-18v-2h-8v2c0 5.523-4.477 10-10 10H10z"
      fill="currentColor"
    />
  </SvgIcon>
)

const getIcon = (type: (typeof externalProfiles)[number]['type']) => {
  switch (type) {
    case 'github':
      return <GitHubIcon fontSize="large" />
    case 'linkedin':
      return <LinkedInIcon fontSize="large" />
    case 'docker':
      return <DockerIcon fontSize="large" />
    case 'leetcode':
      return <CodeRoundedIcon fontSize="large" />
    case 'email':
      return <EmailOutlinedIcon fontSize="large" />
    default:
      return <CodeRoundedIcon fontSize="large" />
  }
}

const formatUrl = (url: string) =>
  url.replace(/^https?:\/\//, '').replace('mailto:', '').replace(/\/$/, '')

const ProfilesSection = () => (
  <SectionContainer id="profiles">
    <SectionHeading
      eyebrow="Profiles"
      title="Connect across engineering, code, and delivery communities."
      subtitle="Explore the platforms where I share architecture insight, source code, and DevSecOps practices."
      align="center"
    />
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 3, md: 4 }}
      justifyContent="center"
      flexWrap="wrap"
      useFlexGap
    >
      {externalProfiles.map((profile, index) => (
        <Box key={profile.label} sx={{ width: { xs: '100%', md: 260 } }}>
          <AnimatedCard delay={index * 0.08} disablePadding>
            <CardActionArea
              component="a"
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'block',
                p: { xs: 3, md: 4 },
              }}
            >
              <Stack spacing={2} alignItems="flex-start">
                <Stack
                  sx={(theme) => ({
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background:
                      theme.palette.mode === 'light'
                        ? 'rgba(79,70,229,0.12)'
                        : 'rgba(129,140,248,0.16)',
                    display: 'grid',
                    placeItems: 'center',
                    color: theme.palette.primary.main,
                  })}
                >
                  {getIcon(profile.type)}
                </Stack>
                <Typography variant="h6">{profile.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {formatUrl(profile.url)}
                </Typography>
              </Stack>
            </CardActionArea>
          </AnimatedCard>
        </Box>
      ))}
    </Stack>
  </SectionContainer>
)

export default ProfilesSection
