import { useState } from 'react'
import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { motion } from 'framer-motion'
import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import { fadeInUp } from '../common/motion'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const schema = yup.object({
  name: yup.string().required('Please share your name.'),
  email: yup.string().email('Enter a valid email address.').required('Email is required.'),
  message: yup
    .string()
    .min(10, 'Provide a bit more context (10 characters minimum).')
    .required('Message is required.'),
})

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Simulate API integration; replace with production-ready endpoint.
      await new Promise((resolve) => setTimeout(resolve, 900))
      console.info('Contact submission received', values)
      setStatus('success')
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Ready to discuss backend modernization or cloud architecture?"
        subtitle="Share a note about your engineering challenge or upcoming initiative. I’ll get back within one business day."
        align="center"
      />
      <Stack
        component={motion.form}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}
        sx={{
          mx: 'auto',
          maxWidth: 720,
          p: { xs: 3, md: 5 },
          borderRadius: 6,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#FFFFFF' : `rgba(15, 23, 42, 0.6)`,
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 24px 60px rgba(15, 23, 42, 0.08)'
              : '0 24px 60px rgba(0, 0, 0, 0.45)',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 2.5, md: 3 },
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            {...register('name')}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            variant="outlined"
            {...register('email')}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            multiline
            minRows={5}
            variant="outlined"
            {...register('message')}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
            sx={{ gridColumn: { xs: '1 / -1', sm: '1 / span 2' } }}
          />
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'stretch', sm: 'center' }}>
          <Button type="submit" variant="contained" color="primary" size="large" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
          <Typography variant="body2" color="text.secondary">
            Your information is kept confidential—no marketing lists or third-party sharing.
          </Typography>
        </Stack>
        {status === 'success' ? (
          <Alert severity="success" onClose={() => setStatus('idle')}>
            Message received. Expect a response within one working day.
          </Alert>
        ) : null}
        {status === 'error' ? (
          <Alert severity="error" onClose={() => setStatus('idle')}>
            Something went wrong. Please retry or reach out at prasadsatish.rnc@gmail.com.
          </Alert>
        ) : null}
      </Stack>
    </SectionContainer>
  )
}

export default ContactSection
