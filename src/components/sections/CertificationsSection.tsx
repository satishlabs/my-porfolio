import { Box, Chip, Link, Stack, Typography } from '@mui/material'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import AnimatedCard from '../common/AnimatedCard'
import { certifications, education } from '../../data/profile'

const CertificationsSection = () => (
  <SectionContainer id="certifications">
    <SectionHeading
      eyebrow="Certifications"
      title="Continuous learning across cloud, containers, and applied engineering."
      subtitle="Formal education and certifications that reinforce practitioner-level expertise across modern platforms."
    />
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 3, md: 4 },
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      }}
    >
      <AnimatedCard>
        <Stack spacing={3}>
          <Typography variant="h5" component="h3">
            Certifications & Specialized Training
          </Typography>
          <Stack spacing={2}>
            {certifications.map((cert) => (
              <Stack key={cert.name} spacing={0.5}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {cert.name}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                  <Typography variant="body2" color="text.secondary">
                    {cert.provider}
                  </Typography>
                  {cert.verifyUrl ? (
                    <Link
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="body2"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                    >
                      Verify certificate
                      <OpenInNewRoundedIcon sx={{ fontSize: 14 }} />
                    </Link>
                  ) : cert.credentialId ? (
                    <Chip size="small" label={`Verify: ${cert.credentialId}`} />
                  ) : null}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </AnimatedCard>
      <AnimatedCard>
        <Stack spacing={3}>
          <Typography variant="h5" component="h3">
            Education
          </Typography>
          <Stack spacing={2}>
            {education.map((item) => (
              <Stack key={item.program} spacing={0.5}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.program}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.institution}
                </Typography>
                {item.focus ? (
                  <Typography variant="body2" color="text.secondary">
                    {item.focus}
                  </Typography>
                ) : null}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </AnimatedCard>
    </Box>
  </SectionContainer>
)

export default CertificationsSection
