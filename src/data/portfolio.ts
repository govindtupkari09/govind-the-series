/**
 * Central portfolio data — generated from Govind Tupkari's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Govind Tupkari',
  displayName: 'Govind Tupkari',
  firstName: 'GOVIND',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A TUPKARI ORIGINAL',
  role: 'AWS Cloud Engineer',
  tagline: ['AWS Cloud Engineer', 'Python', 'Cloud Computing'],
  intro:
    'An entry-level AWS Cloud Engineer and 2026 graduate with a B.E. in Electronics & Telecommunication Engineering and experience in AWS cloud computing, Python, REST APIs, serverless applications, database integration, and incident management.',
  location: 'Pune, Maharashtra, India',
  email: 'govindtupkari10@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/govind-tupkari-9aa243243',
    github: 'https://github.com/govindtupkari09',
  },
  resumePdf: `${import.meta.env.BASE_URL}assets/Govind_Tupkari_AWS_Cloud_Engineer_Resume.pdf`,
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/govind-portrait.svg`,
    srcSet: '',
    alt: 'Govind Tupkari monogram artwork',
  },
  interests: ['AWS Cloud Computing', 'Python Automation', 'Serverless Applications'],
};

export const education = [
  {
    school: 'Sinhgad College of Engineering',
    place: 'Pune',
    degree: 'B.E. in Electronics & Telecommunication Engineering',
    period: '2026',
  },
  {
    school: 'Shri Nath High School',
    place: 'Paithan',
    degree: 'HSC',
    period: '2022',
  },
  {
    school: 'Z. P. High School',
    place: 'Paithan',
    degree: 'SSC',
    period: '2020',
  },
];

export const training = [
  {
    program: 'AWS & Python Learning',
    provider: 'Symbiosis Digital Academy',
    details: ['Project-based training in core AWS services, Python scripting, Boto3, and cloud fundamentals.'],
  },
];

export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'carbonwise',
    title: 'CarbonWise',
    year: '',
    genre: 'Cloud • Serverless • Sustainability',
    logline: 'A carbon footprint and electricity bill analyzer using a serverless AWS workflow.',
    stack: ['Python', 'AWS Lambda', 'Amazon S3', 'API Gateway', 'Google Gemini API', 'Amazon Aurora PostgreSQL', 'Boto3', 'Psycopg', 'JSON'],
    build: [
      'Developed a serverless application workflow using Amazon S3, API Gateway, and AWS Lambda to process electricity bill PDF files.',
      'Integrated Google Gemini API with Python to extract relevant bill details and generate AI-assisted energy insights.',
      'Implemented electricity-consumption and estimated carbon-emission calculations using a configurable emission factor.',
      'Connected AWS Lambda to Amazon Aurora PostgreSQL with Python and Psycopg to store bill and carbon-emission records.',
    ],
    features: [
      'Process electricity-bill PDF files',
      'Extract bill details and generate AI-assisted energy insights',
      'Calculate electricity consumption and estimated carbon emissions',
      'Store bill and emissions records in Amazon Aurora PostgreSQL',
    ],
    metrics: [],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'cinebook',
    title: 'CineBook',
    year: '',
    genre: 'AWS • Web Application • Booking',
    logline: 'An AWS movie ticket booking system for browsing movies, selecting seats, and managing bookings.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Amazon Cognito', 'Amazon API Gateway', 'AWS Lambda', 'Amazon DynamoDB'],
    build: [
      'Developed a web application for browsing movies, selecting showtimes and seats, and reviewing booking details.',
      'Integrated Amazon Cognito for the configured user authentication flow.',
      'Created API endpoints for booking tickets, retrieving bookings, and cancelling reservations using API Gateway and Lambda.',
      'Implemented booking logic to prevent duplicate seat reservations and store booking records in DynamoDB.',
    ],
    features: [
      'Browse movies, showtimes, and available seats',
      'Authenticate with Amazon Cognito',
      'Book, retrieve, and cancel ticket reservations',
      'Prevent duplicate seat reservations',
      'Store booking records in DynamoDB',
    ],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'cloudops-rescue-center',
    title: 'CloudOps Rescue Center',
    year: '',
    genre: 'Incident Management • Flask • DevOps',
    logline: 'An incident management platform for creating, viewing, and tracking operational incidents.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Flask', 'Flask-CORS', 'REST APIs', 'JSON', 'Docker', 'Git', 'GitHub'],
    build: [
      'Developed a web-based incident management application using HTML, CSS, and JavaScript to create, view, and track operational incidents.',
      'Developed Python Flask REST APIs for health checks and incident creation, listing, retrieval, and updates.',
      'Configured Flask-CORS for frontend-to-backend communication during local development.',
      'Built a local Docker image for the Flask Incident API as application packaging and deployment practice.',
    ],
    features: [
      'Create, view, and track operational incidents',
      'Health-check and incident-management REST APIs',
      'Cross-origin frontend/backend communication',
      'Docker-based API packaging practice',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'load-balanced-ec2-web-app',
    title: 'Load-Balanced EC2 Web Application',
    year: '',
    genre: 'AWS • EC2 • High Availability',
    logline: 'An Apache-hosted web page with deployment guidance for an EC2 fleet behind a load balancer and Auto Scaling Group.',
    stack: ['HTML5', 'CSS3', 'Apache', 'Amazon EC2', 'Application Load Balancer', 'Auto Scaling', 'Amazon CloudWatch', 'Amazon VPC', 'Security Groups'],
    build: [
      'Created a static web page with fields for hostname, instance ID, private IP address, availability zone, and application status.',
      'Documented an EC2 deployment architecture using an Application Load Balancer, target group, and Auto Scaling Group.',
      'Documented CloudWatch CPU monitoring and alarm configuration for the deployment.',
    ],
    features: [
      'Static web page with instance-detail placeholders and a running-status label',
      'Deployment guide for EC2 instances behind an Application Load Balancer',
      'Documented Auto Scaling and CloudWatch CPU alarm setup',
    ],
    metrics: [],
    palette: { from: '#071b25', via: '#145a70', to: '#060b12', accent: '#56d6e8' },
    motif: 'flow',
  },
  {
    id: 'aws-resource-automation-cli',
    title: 'AWS Resource Automation CLI',
    year: '',
    genre: 'AWS • Python • Automation',
    logline: 'A Python command-line menu for managing common Amazon S3 and EC2 resources with Boto3.',
    stack: ['Python', 'Boto3', 'Amazon S3', 'Amazon EC2', 'AWS STS', 'AWS IAM', 'AWS CLI'],
    build: [
      'Built a menu-driven command-line interface that invokes separate scripts for S3 and EC2 operations.',
      'Implemented S3 bucket creation and listing, plus local file uploads.',
      'Implemented EC2 instance launch, listing, stopping, and termination, including a confirmation prompt before termination.',
      'Added an AWS STS caller-identity check to confirm the configured AWS connection.',
    ],
    features: [
      'Create and list S3 buckets',
      'Upload a local file to an S3 bucket',
      'Launch, list, stop, and terminate EC2 instances',
      'Check the active AWS caller identity',
    ],
    metrics: [],
    palette: { from: '#17102a', via: '#514091', to: '#090812', accent: '#b69cff' },
    motif: 'flow',
  },
  {
    id: 's3-serverless-image-resizer',
    title: 'S3-Triggered Serverless Image Resizer',
    year: '',
    genre: 'AWS • Serverless • Image Processing',
    logline: 'An S3 upload event invokes a Python Lambda function that creates and stores multiple JPEG image sizes.',
    stack: ['Python', 'Boto3', 'Pillow', 'Amazon S3', 'AWS Lambda', 'Amazon CloudWatch'],
    build: [
      'Reads the input bucket and object key from an S3 ObjectCreated event and downloads the uploaded image for processing.',
      'Uses Pillow to generate thumbnail, medium, and large JPEG variants.',
      'Uploads each generated image to the output bucket under a size-specific prefix and returns the output keys.',
    ],
    features: [
      'Process images in response to S3 upload events',
      'Generate thumbnail, medium, and large JPEG variants',
      'Store resized images in a separate S3 output bucket',
    ],
    metrics: [],
    palette: { from: '#211006', via: '#8a4d14', to: '#0b0806', accent: '#ffad5b' },
    motif: 'shield',
  },
  {
    id: 'nodejs-health-check-api',
    title: 'Node.js Health Check API',
    year: '',
    genre: 'Node.js • Express • Testing',
    logline: 'A small Express application with a home route and a JSON health-check endpoint.',
    stack: ['Node.js', 'Express', 'Jest', 'Supertest'],
    build: [
      'Implemented a home route and a health route that returns a JSON status response.',
      'Added a Jest test using Supertest to check the health route response status and body.',
      'Configured package scripts to start the app and run its test suite.',
    ],
    features: [
      'Home route at /',
      'JSON health-check route at /health',
      'Automated health-route test with Jest and Supertest',
    ],
    metrics: [],
    palette: { from: '#071e16', via: '#176c4b', to: '#060b09', accent: '#5ee0a4' },
    motif: 'flow',
  },
  {
    id: 'containerized-flask-ecs',
    title: 'Containerized Flask Service on Amazon ECS',
    year: '',
    genre: 'AWS • Docker • Flask',
    logline: 'A Docker-packaged Flask service with a home page and health endpoint, described for deployment on ECS with Fargate.',
    stack: ['Python', 'Flask', 'Docker', 'Amazon ECS', 'AWS Fargate', 'Amazon ECR'],
    build: [
      'Implemented a Flask home route and a JSON health-check endpoint.',
      'Created a Dockerfile that installs the Flask dependency, copies the application, and starts the service on port 5000.',
      'Included an ECS task definition configured for Fargate and an ECR-hosted image.',
    ],
    features: [
      'Flask home route and JSON health-check endpoint',
      'Docker image build configuration',
      'ECS Fargate task definition referencing an ECR image',
    ],
    metrics: [],
    palette: { from: '#17110a', via: '#735022', to: '#0a0907', accent: '#f2c66d' },
    motif: 'tenants',
  },
];

export const featuredProjects = projects.slice(0, 3);

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'project-competition-runner-up',
    title: 'Runner-Up',
    org: 'Final-Year Project Competition',
    detail: 'Recognized for the Autonomous External Wall Painting Robot.',
    laurel: 'Competition Award',
  },
];

export type Certification = { issuer: string; name: string; link: string; date?: string };

export const certifications: Certification[] = [
  { issuer: 'Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.', name: 'Foundation Course on Green Skills and Artificial Intelligence', link: '', date: 'February 2025' },
  { issuer: 'IBM', name: 'Getting Started with Enterprise Data Science', link: '', date: 'April 2024' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'aws',
    title: 'AWS Cloud Services',
    subtitle: 'AWS services documented or configured across projects',
    skills: [
      { name: 'Amazon S3', mono: 'S3' },
      { name: 'AWS Lambda', mono: 'λ' },
      { name: 'Amazon API Gateway', mono: 'API' },
      { name: 'Amazon EC2', mono: 'EC2' },
      { name: 'AWS IAM', mono: 'IAM' },
      { name: 'Amazon Cognito', mono: 'Co' },
      { name: 'Amazon CloudWatch', mono: 'CW' },
      { name: 'Elastic Load Balancing (ALB)', mono: 'ALB' },
      { name: 'EC2 Auto Scaling', mono: 'ASG' },
      { name: 'Amazon ECR', mono: 'ECR' },
      { name: 'Amazon ECS', mono: 'ECS' },
      { name: 'AWS Fargate', mono: 'Fgt' },
      { name: 'AWS STS', mono: 'STS' },
      { name: 'AWS CodeBuild', mono: 'CB' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Languages and core web technologies used in project code',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks and Libraries',
    subtitle: 'Application frameworks, libraries, and test tools',
    skills: [
      { name: 'Flask', mono: 'Fl' },
      { name: 'Flask-CORS', mono: 'FC' },
      { name: 'Node.js', mono: 'N.js' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'Pillow', mono: 'Pil' },
      { name: 'Jest', mono: 'Jst' },
      { name: 'Supertest', mono: 'ST' },
      { name: 'Psycopg', mono: 'Pg' },
      { name: 'python-dotenv', mono: 'Env' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases and Storage',
    subtitle: 'Project data stores and object storage',
    skills: [
      { name: 'Amazon DynamoDB', mono: 'Dy' },
      { name: 'Amazon Aurora PostgreSQL', mono: 'Au' },
      { name: 'Amazon S3', mono: 'S3' },
    ],
  },
  {
    id: 'automation',
    title: 'Cloud Automation and Serverless',
    subtitle: 'AWS SDKs, command-line tooling, and event-driven workflows',
    skills: [
      { name: 'Boto3', mono: 'B3' },
      { name: 'AWS CLI', mono: 'CLI' },
      { name: 'S3 ObjectCreated Events', mono: 'S3E' },
      { name: 'Lambda Event Triggers', mono: 'LTr' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps and Containerization',
    subtitle: 'Containers, orchestration, and delivery workflows',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'DC' },
      { name: 'Amazon ECS', mono: 'ECS' },
      { name: 'AWS Fargate', mono: 'Fgt' },
      { name: 'Amazon ECR', mono: 'ECR' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'GitHub Actions', mono: 'GHA' },
      { name: 'Kubernetes', mono: 'K8s' },
      { name: 'AWS CodeBuild', mono: 'CB' },
    ],
  },
  {
    id: 'apis',
    title: 'APIs and Web Technologies',
    subtitle: 'Service interfaces, data formats, and web integrations',
    skills: [
      { name: 'REST APIs', mono: 'API' },
      { name: 'HTTP APIs', mono: 'HTTP' },
      { name: 'Amazon API Gateway', mono: 'GW' },
      { name: 'JSON', mono: 'JS' },
      { name: 'Google Gemini API', mono: 'Gem' },
      { name: 'HTTP Webhooks', mono: 'Hook' },
      { name: 'Responsive Web Design', mono: 'RWD' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Amazon S3': ['CarbonWise', 'S3-Triggered Serverless Image Resizer', 'AWS Resource Automation CLI'],
  'AWS Lambda': ['CarbonWise', 'CineBook', 'S3-Triggered Serverless Image Resizer'],
  'Amazon API Gateway': ['CarbonWise', 'CineBook'],
  'Amazon EC2': ['Load-Balanced EC2 Web Application', 'AWS Resource Automation CLI'],
  'AWS IAM': ['AWS Resource Automation CLI', 'Containerized Flask Service on Amazon ECS'],
  'Amazon Cognito': ['CineBook'],
  'Amazon CloudWatch': ['Load-Balanced EC2 Web Application', 'S3-Triggered Serverless Image Resizer'],
  'Elastic Load Balancing (ALB)': ['Load-Balanced EC2 Web Application'],
  'EC2 Auto Scaling': ['Load-Balanced EC2 Web Application'],
  'Amazon ECR': ['CloudOps Rescue Center', 'Containerized Flask Service on Amazon ECS'],
  'Amazon ECS': ['CloudOps Rescue Center', 'Containerized Flask Service on Amazon ECS'],
  'AWS Fargate': ['CloudOps Rescue Center', 'Containerized Flask Service on Amazon ECS'],
  'AWS STS': ['AWS Resource Automation CLI', 'CloudOps Rescue Center'],
  'AWS CodeBuild': ['CloudOps Rescue Center'],
  Python: ['CarbonWise', 'CloudOps Rescue Center', 'AWS Resource Automation CLI', 'S3-Triggered Serverless Image Resizer', 'Containerized Flask Service on Amazon ECS'],
  JavaScript: ['CineBook', 'CloudOps Rescue Center', 'Node.js Health Check API'],
  HTML5: ['CarbonWise', 'CineBook', 'CloudOps Rescue Center', 'Load-Balanced EC2 Web Application'],
  CSS3: ['CarbonWise', 'CineBook', 'CloudOps Rescue Center', 'Load-Balanced EC2 Web Application'],
  Flask: ['CloudOps Rescue Center', 'Containerized Flask Service on Amazon ECS'],
  'Flask-CORS': ['CloudOps Rescue Center'],
  'Node.js': ['Node.js Health Check API'],
  'Express.js': ['Node.js Health Check API'],
  Pillow: ['S3-Triggered Serverless Image Resizer'],
  Jest: ['Node.js Health Check API'],
  Supertest: ['Node.js Health Check API'],
  Psycopg: ['CarbonWise'],
  'python-dotenv': ['CloudOps Rescue Center'],
  'Amazon DynamoDB': ['CineBook'],
  'Amazon Aurora PostgreSQL': ['CarbonWise'],
  Boto3: ['CarbonWise', 'AWS Resource Automation CLI', 'S3-Triggered Serverless Image Resizer'],
  'AWS CLI': ['AWS Resource Automation CLI', 'CloudOps Rescue Center'],
  'S3 ObjectCreated Events': ['S3-Triggered Serverless Image Resizer'],
  'Lambda Event Triggers': ['S3-Triggered Serverless Image Resizer'],
  Docker: ['CloudOps Rescue Center', 'Containerized Flask Service on Amazon ECS'],
  'Docker Compose': ['CloudOps Rescue Center'],
  Git: ['CloudOps Rescue Center'],
  GitHub: ['CloudOps Rescue Center'],
  'GitHub Actions': ['CloudOps Rescue Center'],
  Kubernetes: ['CloudOps Rescue Center'],
  'REST APIs': ['CineBook', 'CloudOps Rescue Center'],
  'HTTP APIs': ['CineBook', 'CloudOps Rescue Center', 'Node.js Health Check API'],
  JSON: ['CarbonWise', 'CloudOps Rescue Center', 'Node.js Health Check API', 'Containerized Flask Service on Amazon ECS'],
  'Google Gemini API': ['CarbonWise'],
  'HTTP Webhooks': ['CloudOps Rescue Center'],
  'Responsive Web Design': ['CarbonWise', 'CineBook', 'CloudOps Rescue Center'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2020 – 2022',
    synopsis: 'School education at Z. P. High School and Shri Nath High School in Paithan.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'SSC',
        description: 'Z. P. High School, Paithan.',
        tags: ['SSC'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'HSC',
        description: 'Shri Nath High School, Paithan.',
        tags: ['HSC'],
        runtime: '2022',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2026',
    synopsis: 'B.E. in Electronics & Telecommunication Engineering at Sinhgad College of Engineering, Pune.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Electronics & Telecommunication',
        description: 'B.E. in Electronics & Telecommunication Engineering at Sinhgad College of Engineering, Pune.',
        tags: ['B.E.', 'Electronics & Telecommunication'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Cloud & Python Training',
    period: 'Project-based training',
    synopsis: 'AWS and Python learning through project-based training at Symbiosis Digital Academy.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'AWS & Python Learning',
        description: 'Project-based training in core AWS services, Python scripting, Boto3, and cloud fundamentals.',
        tags: ['AWS', 'Python', 'Boto3'],
        runtime: 'Symbiosis Digital Academy',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Cloud Applications',
    period: 'Projects',
    synopsis: 'Three resume-listed projects spanning serverless bill analysis, movie ticket booking, and incident management.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'CarbonWise',
        description: 'Carbon Footprint & Electricity Bill Analyzer — processes bill PDFs and generates AI-assisted energy insights.',
        tags: ['Python', 'AWS Lambda', 'Amazon S3', 'Google Gemini API'],
        runtime: 'Project',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'CineBook',
        description: 'AWS Movie Ticket Booking System — supports movie browsing, seat selection, and ticket reservations.',
        tags: ['Amazon Cognito', 'AWS Lambda', 'Amazon DynamoDB'],
        runtime: 'Project',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'CloudOps Rescue Center',
        description: 'Incident Management Platform — a web application with Flask REST APIs for operational incidents.',
        tags: ['Python', 'Flask', 'REST APIs', 'Docker'],
        runtime: 'Project',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Recognition & Credentials',
    period: '2024 – 2025',
    synopsis: 'The achievement and certifications listed on the resume.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Runner-Up',
        description: 'Final-Year Project Competition for the Autonomous External Wall Painting Robot.',
        tags: ['Final-Year Project Competition', 'Autonomous External Wall Painting Robot'],
        runtime: 'Competition achievement',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'Green Skills & Artificial Intelligence',
        description: 'Foundation Course on Green Skills and Artificial Intelligence — Edunet Foundation, AICTE & Shell India Markets Pvt. Ltd.',
        tags: ['Edunet Foundation', 'AICTE', 'Shell India Markets Pvt. Ltd.'],
        runtime: 'February 2025',
        palette: jade,
      },
      {
        code: 'S05 E03',
        title: 'Enterprise Data Science',
        description: 'Getting Started with Enterprise Data Science — IBM.',
        tags: ['IBM', 'Enterprise Data Science'],
        runtime: 'April 2024',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Cloud original', title: 'CarbonWise', detail: 'Carbon Footprint & Electricity Bill Analyzer', palette: amber },
  { label: 'Booking original', title: 'CineBook', detail: 'AWS Movie Ticket Booking System', palette: crimson },
  { label: 'Incident platform', title: 'CloudOps', detail: 'Rescue Center', palette: ocean },
  { label: 'Cloud service', title: 'AWS Lambda', detail: 'Used in CarbonWise and CineBook', palette: violet },
  { label: 'Cloud storage', title: 'Amazon S3', detail: 'CarbonWise project technology', palette: jade },
  { label: 'Programming', title: 'Python', detail: 'Projects, automation and training', palette: amber },
  { label: 'Training', title: 'AWS & Python', detail: 'Symbiosis Digital Academy', palette: crimson },
  { label: 'Achievement', title: 'Runner-Up', detail: 'Final-Year Project Competition', palette: ocean },
  { label: 'Certification', title: 'Green Skills', detail: 'Foundation Course · February 2025', palette: jade },
  { label: 'Education', title: 'Engineering Degree', detail: 'B.E. in Electronics & Telecommunication Engineering', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. in Electronics & Telecommunication Engineering',
    lines: ['Sinhgad College of Engineering, Pune', '2026'],
  },
  {
    kicker: 'Cloud & Python',
    title: 'AWS Cloud Engineer',
    lines: ['AWS services · Python · REST APIs', 'Serverless applications · Database integration'],
    chips: ['AWS Lambda', 'Amazon S3', 'API Gateway', 'Boto3', 'Python'],
  },
  {
    kicker: 'Training',
    title: 'AWS & Python Learning',
    lines: ['Symbiosis Digital Academy', 'Project-based training in AWS services, Python scripting, Boto3, and cloud fundamentals'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['CarbonWise — Carbon Footprint & Electricity Bill Analyzer', 'CineBook — AWS Movie Ticket Booking System', 'CloudOps Rescue Center — Incident Management Platform'],
  },
  {
    kicker: 'Achievement',
    title: 'Competition Runner-Up',
    lines: ['Final-Year Project Competition', 'Autonomous External Wall Painting Robot'],
  },
  {
    kicker: 'Certified',
    title: 'Two Certifications',
    lines: ['Foundation Course on Green Skills and Artificial Intelligence · February 2025', 'Getting Started with Enterprise Data Science · April 2024'],
  },
];

export type ProfileId = 'govind' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'all-projects' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'govind',
    name: 'Govind',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'all-projects', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'all-projects', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'all-projects', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'all-projects', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Featured Originals', meta: `${featuredProjects.length} Featured Projects`, palette: crimson },
  'all-projects': { nav: 'All Projects', card: 'All Projects', meta: `${projects.length} Verified Projects`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
