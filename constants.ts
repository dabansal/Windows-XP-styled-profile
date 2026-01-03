import { Experience, Skill } from './types';

export const PROFILE = {
  name: "Dheeraj Bansal",
  // Points to local file. Ensure 'profile.png' is in the public directory.
  image: "/profile.png", 
  headline: "Director of Engineering at athenahealth | Technology Leader",
  location: "Bengaluru, Karnataka, India",
  phone: "9916280651",
  email: "bansalcooldheeraj@gmail.com",
  linkedin: "www.linkedin.com/in/dabansal",
  blog: "www.beingdheeraj.blogspot.com",
  summary: [
    "18+ years of experience in software product development",
    "Competency in AWS public cloud infrastructure, microservices architecture, Agile Project Management methodology",
    "Thorough knowledge of the Software Development Life Cycle process (SDLC)",
    "Demonstrated ability to work with cross functional teams in developing software design solutions",
    "Skilled in Java, J2EE, Web Services, Spring, Maven and Hibernate"
  ]
};

export const EXPERIENCE: Experience[] = [
  {
    company: "athenahealth",
    duration: "6 years 6 months",
    location: "Bengaluru, Karnataka, India",
    roles: [
      {
        title: "Director Of Engineering",
        period: "August 2020 - Present",
        details: ["Leading engineering strategy and execution."]
      },
      {
        title: "Senior Manager - Engineering",
        period: "December 2020 - April 2022",
        details: [
          "Built multiple teams from scratch in Bangalore post transition from USA.",
          "Designed and built high availability distributed system following secure SDLC practices.",
          "Led teams for re-platforming monolith to cloud.",
          "Implemented 1st, 2nd, and 3rd level processes and training.",
          "Worked with architects & product management to deliver high value projects."
        ]
      },
      {
        title: "Engineering Manager",
        period: "August 2019 - November 2020",
        details: ["Managed engineering delivery and team growth."]
      }
    ]
  },
  {
    company: "GE",
    duration: "2 years 4 months",
    location: "Bengaluru Area, India",
    roles: [
      {
        title: "Senior Manager - Engineering",
        period: "July 2018 - August 2019",
        details: [
          "Responsible for E2E delivery of Federated Query Engine (Presto).",
          "Worked with AWS (EC2, RDS, EFS, EMR, EKS, ELB), Elastic Search, Spring Boot, Kubernetes.",
          "Built scalable platform supporting millions of ANSI SQL queries per day.",
          "Managed CI/CD using Docker in K8S environment."
        ]
      },
      {
        title: "Staff Software Engineer",
        period: "May 2017 - July 2018",
        details: ["Contributed to core platform architecture and development."]
      }
    ]
  },
  {
    company: "Cisco Systems",
    duration: "5 years 1 month",
    location: "Bangalore",
    roles: [
      {
        title: "Software Engineer III",
        period: "May 2014 - May 2017",
        details: [
          "Responsible for design & development of Cisco Service Fulfillment Portal (CSFP).",
          "Implemented business catalog as a shopping cart experience for network services."
        ]
      },
      {
        title: "Software Engineer II",
        period: "May 2012 - May 2014",
        details: ["Developed modules for service orchestration."]
      }
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Rajiv Gandhi Prodyogiki Vishwavidyalaya",
    degree: "Bachelor of Engineering (B.E.), Computer Science",
    period: "2003 - 2007"
  },
  {
    institution: "Carmel Convent Senior Secondary School",
    degree: "Schooling, Maths, Science",
    period: "1996 - 2003"
  }
];

export const CERTIFICATIONS = [
  "CloudskillsBoost",
  "Brilliant.org",
  "Best of Next '22",
  "Kubernetes in Google Cloud",
  "Unconscious Bias"
];

export const HONORS = [
  "You Inspire 3 - Successful delivery of SFP 1.0",
  "Fantastic execution on SFP go-live for CBTS",
  "Outstanding job on PSC integration on SRM",
  "Quality focus",
  "Make Innovation Happen"
];

export const SKILLS: Skill[] = [
  { category: "Leadership", items: ["Project Management", "Strategic Thinking", "Agile Methodology", "Cross-functional Team Leadership"] },
  { category: "Cloud & DevOps", items: ["AWS", "Terraform", "Kubernetes", "Docker", "Microservices", "CI/CD"] },
  { category: "Backend", items: ["Java", "J2EE", "Spring Boot", "Hibernate", "Maven", "Web Services", "REST"] },
  { category: "Data", items: ["Presto", "Elastic Search", "SQL", "NoSQL", "Distributed Systems"] }
];