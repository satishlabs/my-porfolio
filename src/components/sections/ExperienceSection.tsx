import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import ExperienceAndProjectsGrid from '../common/ExperienceAndProjectsGrid'
import { experience, projectHighlights } from '../../data/profile'

const ExperienceSection = () => (
  <SectionContainer id="experience">
    <SectionHeading
      eyebrow="Experience & Projects"
      title="Proven delivery across fintech, retail, and enterprise SaaS ecosystems."
      subtitle="Leading distributed teams to ship secure services, modernize platforms, and harden mission-critical workloads."
    />
    <ExperienceAndProjectsGrid experience={experience} projects={projectHighlights} />
  </SectionContainer>
)

export default ExperienceSection
