import SectionContainer from '../common/SectionContainer'
import SectionHeading from '../common/SectionHeading'
import ExperienceTimeline from '../common/ExperienceTimeline'
import { experience } from '../../data/profile'

const ExperienceSection = () => (
  <SectionContainer id="experience">
    <SectionHeading
      eyebrow="Experience"
      title="Proven delivery across fintech, retail, and enterprise SaaS ecosystems."
      subtitle="Leading distributed teams to ship secure services, modernize platforms, and harden mission-critical workloads."
    />
    <ExperienceTimeline items={experience} />
  </SectionContainer>
)

export default ExperienceSection
