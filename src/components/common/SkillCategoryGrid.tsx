import { Box, Chip, Link, Stack, Typography } from '@mui/material'
import AnimatedCard from './AnimatedCard'
import type { SkillCategory } from '../../data/profile'

type SkillCategoryGridProps = {
  categories: SkillCategory[]
  /** Optional map of tech name -> learn URL; chips with a match become links. */
  learnUrlMap?: Record<string, string>
}

function getLearnUrl(item: string, learnUrlMap: Record<string, string>): string | undefined {
  if (learnUrlMap[item]) return learnUrlMap[item]
  for (const [key, url] of Object.entries(learnUrlMap)) {
    if (item.startsWith(key) || item.includes(key)) return url
  }
  return undefined
}

const SkillCategoryGrid = ({ categories, learnUrlMap = {} }: SkillCategoryGridProps) => (
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
            {category.items.map((item) => {
              const url = getLearnUrl(item, learnUrlMap)
              const chip = (
                <Chip
                  key={item}
                  label={item}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 1.5,
                    fontWeight: 500,
                    ...(url && {
                      '&:hover': { backgroundColor: 'action.hover' },
                    }),
                  }}
                />
              )
              if (url) {
                return (
                  <Link
                    key={item}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                    color="inherit"
                    sx={{ display: 'inline-flex' }}
                    aria-label={`Learn ${item}`}
                  >
                    {chip}
                  </Link>
                )
              }
              return chip
            })}
          </Stack>
        </Stack>
      </AnimatedCard>
    ))}
  </Box>
)

export default SkillCategoryGrid
