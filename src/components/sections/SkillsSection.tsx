import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import SkillCategoryGrid from '../common/SkillCategoryGrid'
import { skills } from '../../data/profile'

const SkillsSection = () => (
  <SectionContainer id="skills" background="muted">
    <SectionHeading
      eyebrow="Technical Leadership"
      title="End-to-end ownership across backend, cloud, and platform engineering."
      subtitle="I build production-grade systems that prioritize reliability, observability, and security from architecture through delivery."
    />
    <SkillCategoryGrid categories={skills} />
  </SectionContainer>
)

export default SkillsSection
