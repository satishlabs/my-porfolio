import { useState } from 'react'
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import { motion } from 'framer-motion'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import { educationTimeline } from '../../data/profile'
import { fadeInUp } from '../common/motion'

function EducationCard({ item }: { item: (typeof educationTimeline)[number] }) {
  const theme = useTheme()
  const [imgError, setImgError] = useState(false)

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <Card
        elevation={0}
        sx={{
          height: '100%',
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'hidden',
          transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
          '&:hover': {
            boxShadow: theme.shadows[4],
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            pt: '56.25%',
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            overflow: 'hidden',
          }}
        >
          {imgError ? (
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.text.secondary,
              }}
            >
              <SchoolOutlinedIcon sx={{ fontSize: 48 }} />
            </Box>
          ) : (
            <Box
              component="img"
              src={item.image}
              alt={item.institution}
              loading="lazy"
              onError={() => setImgError(true)}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </Box>
        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 0.1 }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 0.5, lineHeight: 1.5 }}>
            {item.institution}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default function EducationSection() {
  return (
    <SectionContainer id="education" background="muted">
      <SectionHeading
        eyebrow="Education"
        title="From school to post graduation."
        subtitle="Foundational schooling through to MCA in Computer Applications."
      />
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, sm: 3, md: 4 },
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        }}
      >
        {educationTimeline.map((item) => (
          <EducationCard key={item.title} item={item} />
        ))}
      </Box>
    </SectionContainer>
  )
}
