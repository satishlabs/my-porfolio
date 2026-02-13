import { Stack, Typography } from '@mui/material'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import { about } from '../../data/profile'

const AboutSection = () => (
  <SectionContainer id="about">
    <SectionHeading
      eyebrow="About"
      title="Trusted engineering partner for secure, cloud-native platforms."
      subtitle="I partner with product, security, and operations teams to transform resilient architectures into measurable business outcomes."
    />
    <Stack spacing={3} sx={{ maxWidth: 860 }}>
      {about.map((paragraph) => (
        <Typography key={paragraph} variant="body1" color="text.secondary" sx={{ fontSize: { md: '1.05rem' } }}>
          {paragraph}
        </Typography>
      ))}
    </Stack>
  </SectionContainer>
)

export default AboutSection
