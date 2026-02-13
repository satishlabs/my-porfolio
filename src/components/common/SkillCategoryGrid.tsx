import { Box, Chip, Stack, Typography } from '@mui/material'
import AnimatedCard from './AnimatedCard'
import type { SkillCategory } from '../../data/profile'

type SkillCategoryGridProps = {
  categories: SkillCategory[]
}

const SkillCategoryGrid = ({ categories }: SkillCategoryGridProps) => (
  <Box
    sx={{
      display: 'grid',
      gap: { xs: 3, md: 4 },
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    }}
  >
    {categories.map((category, index) => (
      <AnimatedCard key={category.title} delay={index * 0.08}>
        <Stack spacing={2}>
          <Typography variant="h5" component="h3">
            {category.title}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {category.items.map((item) => (
              <Chip
                key={item}
                label={item}
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 1.5, fontWeight: 500 }}
              />
            ))}
          </Stack>
        </Stack>
      </AnimatedCard>
    ))}
  </Box>
)

export default SkillCategoryGrid
