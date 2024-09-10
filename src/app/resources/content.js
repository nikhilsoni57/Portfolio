import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nikhil',
    lastName:  'Soni',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Service Desk Technician',
    avatar:    '/images/avatar.jpg',
    location:  'Toronto',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
    description: <>I share insights on AI, leadership, and human connection focusing on how technology can empower leaders and foster meaningful change.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // {
    //     name: 'GitHub',
    //     icon: 'github',
    //     link: 'https://github.com/nikhilsoni57',
    // },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nikhilsoni57/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:nikhilsoni57@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Showcasing my journey in technology, leadership, and creative problem-solving.`,
    headline: <>Transforming Leadership & Technology</>,
    subline: <>I&apos;m Nikhil, an IT professional passionate about enhancing operations through creativity, empathy, and innovation. My mission is to integrate AI and emotional intelligence into leadership to drive meaningful change in organizations.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/nikhilsoni57/consultation-with-nikhil-soni'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Nikhil is a Toronto-based IT professional with over 5 years of experience in enhancing operations and delivering strategic solutions. His focus lies in combining creativity, leadership, and technology to empower organizations through innovative problem-solving and emotional intelligence.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'The Salvation Army',
                timeframe: 'Feb 2022 - Present',
                role: 'Service Desk Technician',
                achievements: [
                    <>Provided on-call technical support, resolving complex incidents, including network outages and server failures, reducing downtime by 20%.</>,
                    <>Collaborated with the infrastructure team to implement Single Sign-On (SSO) for over 5,000 users, reducing IT support workload by 10+ hours per week.</>,
                ],
                images: [ ]
            },
            {
                company: 'Fully Managed (TELUS)',
                timeframe: 'May 2021 - Jan 2022',
                role: 'IT Service Desk Analyst',
                achievements: [
                    <>Delivered IT support for healthcare facilities, improving user satisfaction by 20% through rapid resolution of EHR system failures and network issues.</>,
                    <>Partnered with cross-functional teams to address high-priority incidents, leading to system-wide improvements and increased operational stability.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Georgian College of Applied Arts & Technology',
                description: <>Bachelor of Computer Science</>,
            },
            {
                name: 'Co-op Experience',
                description: <>Completed two co-op work terms, gaining hands-on experience in IT support, technical troubleshooting, and project management.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'ServiceNow',
                description: <>Skilled in ServiceNow for incident, problem, and change management, as well as creating workflows and reporting.</>,
                images: [ ]
            },
            {
                title: 'ITSM & ITOM',
                description: <>Expert in IT Service Management (ITSM) and IT Operations Management (ITOM) following ITIL v4 practices to streamline operations and manage incidents.</>,
                images: []
            },
            {
                title: 'PowerShell & Active Directory',
                description: <>Proficient in PowerShell scripting and managing Active Directory for user and system administration.</>,
                images: []
            },
            {
                title: 'Azure Cloud Solutions & Office 365',
                description: <>Experienced in managing cloud infrastructure and services using Azure, and implementing Office 365 for seamless enterprise operations.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, newsletter, home, about, blog, work };