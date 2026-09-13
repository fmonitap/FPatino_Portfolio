export interface CaseStudy {
  title: string;
  category: string;
  status: 'Placeholder' | 'In progress' | 'Completed';
  summary: string;
  businessProblem: string;
  dataApproach: string;
  tools: string[];
  keyInsight: string;
  outcome: string;
  href?: string;
}

// Confirmed personal content is sourced from Resume_FPatino_updated (1).pdf, pages 1–2.
// Forecast horizon 2021–2023 is retained under the resume's Mar–Nov 2020 role dates.
// No claim of exam accreditation or credential URLs beyond the resume is implied.
// Add real case studies to the array; an empty array displays the honest empty state.
export const portfolio = {
  name: 'Francis Mondelle Patino',
  initials: 'FP',
  role: 'Business Development & Commercial Professional | Business Analytics',
  location: 'Port Pirie, South Australia',
  portrait: '', // Add a real portrait URL or public asset path.
  resume: '/resume-francis-patino.pdf',
  availability: 'Open to new opportunities',
  sidebarNote: 'Commercial | Analytics | Data',
  personalMotto: 'Better questions. Brighter decisions.',
  metrics: [
    { value: '7+', label: 'Years across commercial', detail: 'roles & operations', confirmed: true },
    { value: '5.2M+', label: 'Electrified households', detail: 'analysed for rollout planning', confirmed: true },
    { value: '1.2M', label: 'Ports forecast monthly', detail: '2021–2023 planning horizon', confirmed: true },
    { value: '20%', label: 'Improvement in', detail: 'allocation efficiency', confirmed: true },
  ],
  projectPlaceholders: [
    { category: 'Forecasting', title: '[Forecasting case study]', description: 'Real forecasting work and its business context will be added here.', tools: 'Tools to be confirmed' },
    { category: 'Dashboard', title: '[Dashboard case study]', description: 'A real dashboard, its audience, and the decisions it supports will be added here.', tools: 'Tools to be confirmed' },
    { category: 'Business analysis', title: '[Analytics case study]', description: 'Real analytical work, findings, and recommendations will be added here.', tools: 'Tools to be confirmed' },
  ],
  tagline: 'Commercial perspective. Analytical thinking.',
  hero: {
    eyebrow: 'Commercial experience. A data-driven perspective.',
    heading: 'Turning business opportunities into',
    emphasis: 'meaningful outcomes.',
    description: 'More than seven years in business development, account management and operations—bringing commercial experience and practical analytical work to better business decisions.',
    imageAlt: 'Rough limestone on an architectural plinth, with a small steel mallet partly hidden behind its right side and a chisel resting beside it.',
    principles: ['Commercial understanding', 'Analytical curiosity', 'Practical decision support'],
  },
  introduction: 'Connecting commercial experience with data-driven decisions across account management, network planning and operations.',
  description: 'Francis Mondelle Patino — Business Development & Commercial Professional | Business Analytics. More than seven years across business development, account management and operations.',
  summary: [
    'I bring more than seven years of experience across business development, account management and operations, with work spanning telecommunications, utilities, retail and regional advertising. I now manage regional advertising accounts at Seven Network, connecting client objectives with television and digital campaign delivery.',
    'Analytics has been part of that commercial work throughout my career: analysing more than 5.2 million electrified households for network rollout planning, forecasting monthly port demand, evaluating asset performance and using fault-ticket data to guide field operations. My move toward data-focused roles builds on that practical foundation, supported by a Master of Business Analytics.',
    'I combine customer and stakeholder understanding with demand planning, reporting and commercial execution—turning evidence into decisions about market coverage, service delivery and account growth.',
  ],
  currentFocus: 'Building a data-focused career on practical commercial and operational analysis, supported by business analytics education and skills in SQL, Power BI, Tableau and advanced spreadsheets.',
  capabilities: [
    { title: 'Business development', description: 'Enterprise prospecting, solution presentations and contract negotiation; acquired 70+ new logos at Converge.' },
    { title: 'Account management', description: 'Regional advertising and enterprise ICT accounts, client consultation, retention and upselling.' },
    { title: 'Commercial performance', description: 'Built a ₱300M pipeline and contributed ₱50M in revenue as a Key Account Manager.' },
    { title: 'Territory & partner management', description: 'Sales-agency performance reviews, targeted market activity and coordination across sales and delivery teams.' },
    { title: 'Planning & stakeholder coordination', description: 'Network rollout priorities, campaign execution, project milestones and cross-functional operational delivery.' },
  ],
  experienceNote: 'Commercial and analytical work across advertising, telecommunications, utilities and retail. Dates and outcomes are reported as stated in my resume.',
  experience: [
    {
      role: 'Account Manager', company: 'Seven Network', period: 'Nov 2025 – Present', location: 'Port Pirie, SA',
      description: 'Manage regional advertising clients across the Spencer Gulf, aligning television and digital campaigns with business objectives, audience reach and seasonal opportunities.',
      highlights: ['Coordinate campaigns across CRM, booking, scheduling and traffic systems with Revenue Management, Production and Sales Support.', 'Develop local business relationships through consultation, campaign strategy and ongoing account management.'],
    },
    {
      role: 'Key Account Manager', company: 'Converge ICT Solutions Inc.', period: 'Jul 2022 – Mar 2023', location: 'Davao City, Philippines',
      description: 'Developed enterprise and government accounts across connectivity, data centre, cloud, network security and SaaS solutions.',
      highlights: ['Acquired 70+ new logos, built a ₱300M sales pipeline and contributed ₱50M in revenue through fibre-service contracts.', 'Used Salesforce to track leads, applications and contract expirations, supporting upselling and the resolution of client concerns.'],
    },
    {
      role: 'Territory Manager', company: 'Converge ICT Solutions Inc.', period: 'Dec 2020 – Jun 2022', location: 'Cebu City, Philippines',
      description: 'Combined territory sales, partner performance reviews and deployment coordination across consumer and SME segments.',
      highlights: ['Delivered 13,000+ line activations and ₱500M+ in revenue, with churn below 2% and ARPU 30% above the company benchmark.', 'Targeted deployment and sales activity supported an average 50% penetration rate at newly activated sites and 65% overall port utilisation.', 'Reviewed performance and profitability weekly with 8+ sales-agency partners, each with 20+ field agents.'],
    },
    {
      role: 'Business Development Officer', company: 'Converge ICT Solutions Inc.', period: 'Mar 2020 – Nov 2020', location: 'Cebu City, Philippines',
      description: 'Used regional, geospatial and economic data to guide fibre-network expansion and align deployment capacity with market demand.',
      highlights: ['Analysed 5.2M+ electrified households by area to refine rollout penetration targets, improving allocation efficiency by 20%.', 'Contributed to demand planning and month-on-month forecasts of 1.2M ports for the 2021–2023 planning horizon.', 'Identified priority deployment areas and worked with design teams to translate plans into street-level layouts, validated on site.'],
    },
    {
      role: 'Project Coordinator', company: 'Visayan Electric Company', period: 'Jul 2019 – Dec 2019', location: 'Cebu City, Philippines',
      description: 'Connected maintenance analysis and project monitoring with operational reliability and stakeholder reporting.',
      highlights: ['Analysed historical maintenance and asset-performance data to identify reliability trends, anticipate failures and recommend preventive measures.', 'Tracked construction milestones, escalated deviations and reviewed cost documentation and project addenda.', 'Maintained visual management boards covering compliance, audit results and key performance indicators.'],
    },
    {
      role: 'Operations Analyst', company: 'Fiberhome International Technologies Phils. Inc.', period: 'Jul 2018 – Jun 2019', location: 'Cebu City, Philippines',
      description: 'Used service and field-performance data to coordinate telecommunications operations across Metro Cebu.',
      highlights: ['Extracted and segmented fault tickets by complaint type, age and geographic cluster to prioritise older issues and guide technician dispatch.', 'Supported migration of 80K+ copper lines to fibre by coordinating field teams and consolidating accomplishment reports for management.', 'Coordinated 10 technician teams, ticket assignments, materials and route deployment.'],
    },
    {
      role: 'Sales and Service Associate', company: 'Philippine Long Distance Telephone Company, Inc.', period: 'Jun 2016 – Mar 2018', location: 'Cebu City, Philippines',
      description: 'Combined customer service, value-added sales and accurate account and inventory records.',
      highlights: ['Consistently exceeded value-added service sales targets through subscription upgrades, device add-ons and complementary accessories.', 'Coordinated with Dispatch and Finance on technical issues, billing disputes and reconciliation.', 'Tracked returns, replacements and warranty claims, maintaining CRM and inventory documentation.'],
    },
    {
      role: 'Retail Sales and Service Assistant', company: 'On The Run', period: 'Apr 2023 – Present', location: 'Adelaide, SA',
      description: 'Additional retail experience supporting customer service, sales monitoring and daily financial accuracy.',
      highlights: ['Served an average of 300+ walk-in customers daily across enquiries, orders and payments.', 'Monitored category sales, gap counts and fast-moving products to inform restocking decisions.', 'Reconciled POS transactions, reviewed daily cash flow and generated sales reports.'],
    },
  ],
  analytics: {
    introduction: 'Practical analysis developed through network planning, maintenance reporting, service operations and sales monitoring, supported by formal business analytics study.',
    groups: [
      { category: 'Analysis & reporting', items: ['SQL', 'Power BI', 'Tableau', 'Advanced Excel', 'Google Sheets'] },
      { category: 'Planning & decision support', items: ['Demand planning & forecasting', 'Geospatial & economic analysis', 'Sales-performance monitoring', 'Asset-performance analysis'] },
      { category: 'Operational analysis', items: ['Fault-ticket extraction & segmentation', 'Ticket-ageing analysis', 'Geographic clustering', 'KPI reporting'] },
      { category: 'Business systems & delivery', items: ['Salesforce', 'Kenan', 'SSP', 'Microsoft 365', 'Google Workspace', 'Agile / Scrum'] },
    ],
  },
  caseStudySection: {
    introduction: 'A space for analytical work that connects a clear question with evidence, insight, and a practical recommendation.',
    emptyTitle: 'Real work, documented thoughtfully.',
    emptyDescription: 'Case studies will be added as work is ready to share. Each will explain the business problem, data and approach, tools, key insight, and outcome or recommendation.',
    areas: ['Forecasting', 'Machine learning', 'Dashboards', 'Business analysis', 'Decision support'],
  },
  caseStudies: [] as CaseStudy[],
  education: [
    { qualification: 'Master of Business Analytics', institution: 'Kaplan Business School', period: 'Mar 2023 – Feb 2025', status: 'Adelaide, South Australia', detail: 'Postgraduate business analytics education supporting a data-focused career.' },
    { qualification: 'Bachelor of Business Administration', institution: 'Cebu Institute of Technology University', period: 'Nov 2011 – Mar 2016', status: 'Cebu, Philippines', detail: 'Major in Banking and Financial Management.' },
  ],
  certifications: [
    { name: 'Microsoft Power BI Data Analyst Professional', issuer: 'Microsoft', year: 'February 2025', href: '' },
    { name: 'Google Project Management Professional', issuer: 'Google', year: 'February 2025', href: '' },
    { name: 'Azure Fundamentals', issuer: 'Microsoft', year: 'February 2025', href: '' },
    { name: 'Excel Skills for Business Specialization', issuer: 'Macquarie University', year: 'September 2024', href: '' },
    { name: 'Google Data Analytics Professional', issuer: 'Google', year: 'November 2023', href: '' },
    { name: 'Data Analytics Essentials', issuer: 'Cisco', year: 'September 2023', href: '' },
  ],
  contact: {
    heading: 'Let’s start a conversation.',
    description: 'For conversations about business development, commercial opportunities, business analytics, or data-informed decision-making, please get in touch.',
    email: 'fmonitap@gmail.com',
    phone: '+61 4 8198 2126',
    phoneHref: 'tel:+61481982126',
    emailPlaceholder: '[Email address to be added]',
    socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/fmpati%C3%B1o' }, { label: 'GitHub', href: '' }],
  },
  footer: 'Commercial perspective. Continuous learning.',
};
