export type SkillCategory = {
  title: string
  items: string[]
}

export type ExperienceProject = {
  name: string
  summary: string
  achievements: string[]
  techStack: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  techHighlights: string[]
  projects?: ExperienceProject[]
}

export type ProjectHighlight = {
  name: string
  company: string
  problem: string
  architecture: string
  achievements: string[]
  techStack: string[]
}

export type Certification = {
  name: string
  provider: string
  credentialId?: string
  /** Coursera (or other) verify URL for the certificate. */
  verifyUrl?: string
}

export type EducationItem = {
  program: string
  institution: string
  focus?: string
}

export type EducationTimelineItem = {
  image: string
  title: string
  institution: string
}

export type ExternalProfile = {
  label: string
  url: string
  type: 'github' | 'linkedin' | 'docker' | 'leetcode' | 'email' | 'phone'
}

/** Base URL for the portfolio (used for share links and canonical URL). */
export const portfolioUrl = 'https://www.hastech.it.com/'

/** Contact details for display and tel/mailto links. */
export const contact = {
  email: 'prasadsatish.rnc@gmail.com',
  phone: '+91 9050618092',
  phoneTel: 'tel:+919050618092',
} as const

/** WhatsApp share link: opens WhatsApp with pre-filled "Share my portfolio" message. */
export const shareViaWhatsAppUrl = (): string => {
  const text = `Check out Satish Prasad's portfolio – Senior Java Backend Engineer & Cloud Architect: ${portfolioUrl}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}

/** Learn URLs for tech stack (Technical Leadership): official docs or high-quality learning. */
export const techLearnUrls: Record<string, string> = {
  Java: 'https://dev.java/learn/',
  'Spring Boot': 'https://spring.io/guides/gs/spring-boot/',
  'Spring Cloud': 'https://spring.io/projects/spring-cloud',
  AWS: 'https://aws.amazon.com/getting-started/',
  Kubernetes: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
  Docker: 'https://docs.docker.com/get-started/',
  Kafka: 'https://kafka.apache.org/documentation/',
  Redis: 'https://redis.io/docs/getting-started/',
  PostgreSQL: 'https://www.postgresql.org/docs/',
  DynamoDB: 'https://docs.aws.amazon.com/dynamodb/latest/developerguide/',
  GraphQL: 'https://graphql.org/learn/',
  Microservices: 'https://microservices.io/',
  RabbitMQ: 'https://www.rabbitmq.com/getstarted.html',
  'Spring Security': 'https://spring.io/projects/spring-security',
  MongoDB: 'https://www.mongodb.com/docs/manual/',
  MySQL: 'https://dev.mysql.com/doc/',
  Maven: 'https://maven.apache.org/guides/',
  Gradle: 'https://docs.gradle.org/current/userguide/userguide.html',
  Jenkins: 'https://www.jenkins.io/doc/',
  'GitHub Actions': 'https://docs.github.com/en/actions',
  Git: 'https://git-scm.com/doc',
  JUnit: 'https://junit.org/junit5/docs/current/user-guide/',
  React: 'https://react.dev/learn',
  'React.js': 'https://react.dev/learn',
  TypeScript: 'https://www.typescriptlang.org/docs/',
}

export const hero = {
  name: 'Satish Prasad',
  title: 'Senior Java Backend Engineer · Cloud & Microservices Architect',
  tagline:
    'I design and deliver secure, cloud-native platforms and PCI-compliant tokenization services for regulated enterprises—with measurable impact on latency, compliance, and scale.',
  primaryCtas: [
    { label: 'View Experience', href: '#experience' },
    { label: 'Download Resume', href: '/Satish_Prasad_Resume.pdf', download: true },
  ],
}

export const about = [
  'I am a Senior Java Backend Engineer with 10+ years of experience designing and delivering secure, cloud-native services for regulated industries. My work spans payment tokenization, conversational platforms, enterprise integrations, and high-availability systems—from architecture through deployment and operations.',
  'I build microservices ecosystems with Spring Boot and Spring Cloud, applying domain-driven design, event-driven integration, and zero-downtime deployment strategies. I partner with product and security teams to embed encryption, observability, and compliance (PCI DSS, GDPR) into distributed systems at scale. Core strengths include API design, cloud architecture (AWS), and bringing clarity to complex technical and product requirements.',
  'I focus on problems where security, latency, and reliability are non-negotiable: tokenization and payment data, multi-tenant conversation services, and integrations with SAP and external HR systems. I am based in Bangalore, India, and work with global teams across time zones.',
]

export const skills: SkillCategory[] = [
  {
    title: 'Programming Languages & Platforms',
    items: ['Java (8/11/17)', 'J2EE', 'SQL', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate / JPA', 'GraphQL', 'React.js'],
  },
  {
    title: 'Databases & Caching',
    items: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, Lambda, RDS, DynamoDB, API Gateway, KMS, IAM, CloudWatch)',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    title: 'Messaging & Streaming',
    items: ['Kafka', 'RabbitMQ'],
  },
  {
    title: 'CI/CD & Build Tools',
    items: ['Maven', 'Gradle', 'Git', 'Jenkins', 'GitHub Actions', 'Nexus'],
  },
  {
    title: 'Testing & Quality',
    items: ['JUnit', 'Mockito', 'TestNG', 'Cucumber (BDD)', 'Integration Testing', 'Jacoco', 'Postman'],
  },
  {
    title: 'API Gateway & Security',
    items: ['APISIX', 'NGINX', 'Custom Lua Plugins', 'Data Encryption', 'Tokenization'],
  },
  {
    title: 'Tools & Methodologies',
    items: [
      'IntelliJ IDEA',
      'Eclipse',
      'VS Code',
      'JIRA',
      'Confluence',
      'Agile / Scrum',
      'Microservices Architecture',
      'Continuous Delivery',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    company: 'Altimetrik India Pvt. Ltd.',
    role: 'Senior Engineer – Product & Platform Engineering',
    period: 'Jan 2022 – Jan 2026',
    location: 'Bangalore, India',
    summary:
      'Led architecture and delivery of PCI-compliant tokenization and conversational intelligence platforms with stringent latency and security SLAs.',
    techHighlights: [
      'Spring Boot',
      'AWS KMS',
      'DynamoDB',
      'Redis',
      'Docker',
      'Kubernetes',
      'Kafka',
      'APISIX',
      'Lua',
      'GraphQL',
      'ReactJS',
    ],
    projects: [
      {
        name: 'PCI Tokenization Service',
        summary:
          'Built a PCI DSS–compliant service encrypting sensitive card data with deterministic routing and wallet-based token grouping.',
        achievements: [
          'Engineered deterministic tokenization backed by AWS KMS and DynamoDB with near-real-time retrievals.',
          'Established secure ingress via APISIX with custom Lua plugins for request validation, throttling, and observability.',
          'Reduced payment processing latency with Redis caching and asynchronous Kafka workflows.',
        ],
        techStack: ['Spring Boot', 'AWS KMS', 'DynamoDB', 'Redis', 'Kafka', 'APISIX', 'Docker', 'Kubernetes'],
      },
      {
        name: 'VEP Conversation Services',
        summary:
          'Delivered multi-channel conversation and participation services through a federated GraphQL gateway and microservices mesh.',
        achievements: [
          'Modeled conversational contexts and participant lifecycles with event-driven microservices.',
          'Hit 90%+ automated test coverage using JUnit, Mockito, Cucumber, and Jacoco reporting.',
          'Automated Kubernetes deployments with progressive delivery pipelines and runtime observability.',
        ],
        techStack: ['Spring Boot', 'GraphQL', 'AWS', 'Kafka', 'DynamoDB', 'Redis', 'ReactJS', 'Docker', 'Kubernetes'],
      },
    ],
  },
  {
    company: 'Estuate Software Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: 'Aug 2020 – Feb 2022',
    location: 'Bangalore, India',
    summary:
      'Strengthened enterprise integrations and cloud-readiness for global retail and SaaS customers through resilient API design.',
    techHighlights: ['Spring Boot', 'React.js', 'AWS', 'MySQL', 'Microservices', 'REST APIs'],
  },
  {
    company: 'SAP Labs (RLabs Enterprise Services Ltd.)',
    role: 'Software Consultant',
    period: 'Mar 2018 – Feb 2020',
    location: 'Bangalore, India',
    summary:
      'Delivered recruitment platform capabilities on SAP HANA with OData-compliant services and high-availability integrations.',
    techHighlights: ['SAP HANA', 'OData', 'Java', 'Spring'],
  },
  {
    company: 'Wissen Technologies',
    role: 'Software Analyst',
    period: 'Apr 2016 – Mar 2018',
    summary:
      'Built event-driven microservices and integration pipelines for banking and retail clients with a focus on resilience.',
    techHighlights: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
  },
  {
    company: 'JK Technosoft Ltd.',
    role: 'Software Engineer',
    period: 'Feb 2015 – Apr 2016',
    summary:
      'Delivered large-scale enterprise integrations and retail point-of-sale capabilities spanning recruiting, POS, and health domains.',
    techHighlights: ['Spring', 'Hibernate', 'JSP', 'PostgreSQL', 'REST APIs'],
  },
]

export const projectHighlights: ProjectHighlight[] = [
  {
    name: 'PCI Tokenization Service',
    company: 'Altimetrik India Pvt. Ltd.',
    problem:
      'Card networks required a PCI DSS–compliant vault to tokenize sensitive payment data without impacting transaction latency.',
    architecture:
      'Event-driven Spring Boot microservices secured with AWS KMS, fronted by APISIX API Gateway, and orchestrated on Kubernetes with Redis-backed low-latency caches.',
    achievements: [
      'Achieved sub-50ms token retrieval by combining Redis caching with deterministic key design in DynamoDB.',
      'Implemented custom Lua plugins to enforce request signatures, rate limits, and audit logging across ingress traffic.',
      'Automated blue/green deployments and observability dashboards for compliance and operations teams.',
    ],
    techStack: ['Spring Boot', 'AWS KMS', 'DynamoDB', 'Redis', 'Kafka', 'APISIX', 'Docker', 'Kubernetes'],
  },
  {
    name: 'VEP Conversation Services',
    company: 'Altimetrik India Pvt. Ltd.',
    problem:
      'Needed a scalable backbone for conversational commerce and participation analytics across messaging channels.',
    architecture:
      'GraphQL gateway federating microservices with Kafka-backed event sourcing, deployed on AWS-managed Kubernetes.',
    achievements: [
      'Designed multi-tenant conversation models with fine-grained access controls and audit trails.',
      'Integrated automated contract testing and Jacoco coverage gates to maintain 90%+ service coverage.',
      'Operationalized auto-scaling policies for fluctuating conversation volumes across geographies.',
    ],
    techStack: ['Spring Boot', 'GraphQL', 'Kafka', 'AWS', 'DynamoDB', 'Redis', 'ReactJS', 'Docker', 'Kubernetes'],
  },
  {
    name: 'POS System (Callaway Golf)',
    company: 'Estuate Software Pvt. Ltd.',
    problem:
      'Retail franchises needed unified point-of-sale services with real-time inventory and payment integrations.',
    architecture:
      'Microservices-based POS with RESTful APIs, orchestrated CI/CD pipelines, and React-driven retail dashboards.',
    achievements: [
      'Delivered resilient order, inventory, and payment APIs with idempotent transaction handling.',
      'Automated Jenkins pipelines enabling continuous delivery with integrated quality gates.',
      'Collaborated on React front-ends to streamline associate workflows and reduce checkout times.',
    ],
    techStack: ['Spring Boot', 'React.js', 'Jenkins', 'AWS', 'MySQL', 'REST APIs'],
  },
  {
    name: 'Recruiting Management (RCM)',
    company: 'SAP Labs (RLabs Enterprise Services Ltd.)',
    problem:
      'Enterprises required extensible recruitment workflows integrated with SAP HANA and external HR systems.',
    architecture:
      'OData-compliant REST services exposing recruitment modules with SAP HANA persistence and Java-based business logic.',
    achievements: [
      'Produced extensible OData APIs enabling third-party integration partners and analytics tools.',
      'Stabilized production environments through targeted hotfixes and rapid rollback procedures.',
      'Optimized SAP HANA data models for high-volume talent acquisition pipelines.',
    ],
    techStack: ['SAP HANA', 'OData', 'Java', 'Spring'],
  },
  {
    name: 'E-commerce Platform',
    company: 'Wissen Technologies',
    problem:
      'Global ecommerce operator needed modular APIs to accelerate feature delivery across catalog, cart, and checkout domains.',
    architecture:
      'Domain-aligned Spring Boot microservices with RESTful APIs, centralized observability, and agile delivery practices.',
    achievements: [
      'Developed core commerce services covering catalog, pricing, and fulfillment workflows.',
      'Enabled iterative releases by embedding feature toggles and contract tests in delivery pipelines.',
      'Mentored cross-functional teams on microservice patterns and operational readiness.',
    ],
    techStack: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    name: 'eHealth Kerala',
    company: 'JK Technosoft Ltd.',
    problem:
      'State healthcare platform needed robust billing and patient management modules integrated with existing government systems.',
    architecture:
      'Spring MVC and Hibernate stack with PostgreSQL persistence, exposing secure modules to hospital networks.',
    achievements: [
      'Implemented billing modules with rigorous validation and audit-ready reporting.',
      'Streamlined database operations and migration scripts to support phased rollouts across districts.',
      'Collaborated with government stakeholders to align delivery milestones and compliance requirements.',
    ],
    techStack: ['Spring', 'Hibernate', 'JSP', 'PostgreSQL'],
  },
]

export const certifications: Certification[] = [
  {
    name: 'AWS Developer Essentials: Identity, Compute and Storage',
    provider: 'Coursera',
    credentialId: 'OALW0WRT43HJ',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/OALW0WRT43HJ',
  },
  {
    name: 'AWS S3 Basics',
    provider: 'Coursera',
    credentialId: 'U0OJ7AXEAZGJ',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/U0OJ7AXEAZGJ',
  },
  {
    name: 'Containerize Spring Boot CRUD with Docker and Docker Compose',
    provider: 'Coursera',
    credentialId: 'MO9218R53E5X',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/MO9218R53E5X',
  },
  {
    name: 'Programming with Generative AI',
    provider: 'Coursera',
    credentialId: 'E4FC4DF66KNF',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/E4FC4DF66KNF',
  },
  {
    name: 'Generative AI for Everyone',
    provider: 'Coursera',
    credentialId: 'YKH4FS5VZLFL',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/YKH4FS5VZLFL',
  },
  {
    name: 'Microservice Architectures',
    provider: 'Coursera',
    credentialId: 'EOD6MUC0P8E7',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/EOD6MUC0P8E7',
  },
  {
    name: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
    provider: 'Coursera',
    credentialId: '0JM9G2V6S6SN',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/0JM9G2V6S6SN',
  },
  {
    name: 'Spring - Cloud Overview',
    provider: 'Coursera',
    credentialId: 'GXEHLSFMUCZM',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/GXEHLSFMUCZM',
  },
  {
    name: 'Data Structures & Backend with Java',
    provider: 'Coursera',
    credentialId: 'Y2XCM54MV6RW',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Y2XCM54MV6RW',
  },
]

export const education: EducationItem[] = [
  {
    program: 'Post Graduate Program in Cloud Computing',
    institution: 'Great Lakes Institute',
  },
  {
    program: 'Master of Computer Applications (MCA)',
    institution: 'RNSIT College, Bangalore',
  },
  {
    program: 'Bachelor of Science in Information Technology',
    institution: 'Ranchi College, Ranchi',
  },
]

export const educationTimeline: EducationTimelineItem[] = [
  { image: '/education/1.png', title: 'Schooling', institution: 'First grade – 7th · Government Middle School Tatisilwai Chatra, Ranchi' },
  { image: '/education/2.png', title: 'Secondary', institution: '8th – 10th · Government High School, Tatisilwai, Ranchi' },
  { image: '/education/3.png', title: 'Inter College (PCM)', institution: "St. Paul's College, Church Road Ranchi" },
  { image: '/education/4.png', title: 'Graduation', institution: 'B.Sc. Information Technology · Ranchi College, Ranchi' },
  { image: '/education/5.png', title: 'Post Graduation', institution: 'MCA · RNS Institute of Technology, Bangalore' },
]

export const externalProfiles: ExternalProfile[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/satishlabs',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/devsatish/',
    type: 'linkedin',
  },
  {
    label: 'Docker Hub',
    url: 'https://hub.docker.com/u/prasadsatish06',
    type: 'docker',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/prasadsatish06',
    type: 'leetcode',
  },
  {
    label: 'Email',
    url: 'mailto:prasadsatish.rnc@gmail.com',
    type: 'email',
  },
  {
    label: 'Phone',
    url: 'tel:+919050618092',
    type: 'phone',
  },
]
