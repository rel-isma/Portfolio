export interface Project {
    id: number
    title: string
    slug: string
    description: string
    image: string
    category: string
    technologies: string[]
    duration: string
    client?: string
    role: string
    created_at: string
    pushed_at: string
    sourceCode?: string
    liveDemo?: string
    demo?: boolean
    sCode?: boolean
    features: string[]
    timeline: {
      date: string
      title: string
      description: string
    }[]
    languages: {
      [key: string]: number
    }
  }
  
  export const projects: Project[] = [
  {
  id: 8,
  title: "Personal Portfolio - Rachid.tech",
  slug: "rachid-tech",
  description:
    "An interactive 3D personal portfolio website built with Next.js, featuring a custom 3D avatar and an integrated AI assistant powered by OpenAI. The portfolio showcases my projects, skills, and experience with a modern, responsive design and smooth animations. It combines creativity with cutting-edge technology to provide an engaging and personalized experience for visitors.",
  image: "/porfolio.png",
  category: "Full Stack",
  technologies: ["Next.js", "React", "TypeScript", "Three.js", "Tailwind CSS", "OpenAI API"],
  duration: "1.5 months",
  client: "Personal Project",
  role: "Full Stack Developer",
  created_at: "2025-07-01",
  pushed_at: "2025-08-20",
  sourceCode: "https://github.com/rel-isma/portfolio",
  liveDemo: "https://rachid.tech/",
  demo: true,
  sCode: true,
  features: [
    "3D avatar built with Three.js",
    "Integrated AI assistant powered by OpenAI",
    "Responsive and modern UI/UX design",
    "Projects and skills showcase with detailed pages",
    "Smooth animations and interactive elements",
    "Optimized performance and SEO-friendly",
    "Dark/Light mode support"
  ],
  timeline: [
    {
      date: "July 2025",
      title: "Design & Setup",
      description: "Planned layout, integrated 3D model with Three.js, and set up Next.js architecture."
    },
    {
      date: "August 2025",
      title: "Development & Deployment",
      description: "Added AI assistant, optimized 3D avatar performance, and deployed live website."
    }
  ],
  languages: {
    TypeScript: 15000,
    tailwinds: 3000,
    nextjs: 3000
  }
},
{
  id: 7,
  title: "VibeFinder",
  slug: "vibefinder",
  description:
    "A modern event discovery platform designed to help users find parties, concerts, and cultural experiences based on location and vibe preferences. The application provides a seamless and responsive UI/UX with advanced filtering, search functionality, and event details, aiming to connect people with unique experiences effortlessly.",
  image: "/vibefinder.png",
  category: "Full Stack",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Maps API"],
  duration: "1 month",
  client: "Personal Project",
  role: "Full Stack Developer",
  created_at: "2025-02-01",
  pushed_at: "2025-04-30",
  sourceCode: "https://github.com/rel-isma/VibeFinder", 
  liveDemo: "https://www.vibefinder.life/",
  demo: true,
  sCode: true,
  features: [
    "Event discovery by location and vibe preferences",
    "Responsive and user-friendly interface",
    "Advanced filtering and search system",
    "Event details with images, descriptions, and dates",
    "Seamless navigation and fast loading performance",
    "Mobile-first design for easy on-the-go access"
  ],
  timeline: [
    {
      date: "February 2025",
      title: "Planning & Design",
      description: "Defined project scope, created wireframes, and set up the architecture."
    },
    {
      date: "March 2025",
      title: "Core Development",
      description: "Implemented frontend components, backend API, and database integration."
    },
    {
      date: "April 2025",
      title: "Testing & Deployment",
      description: "Optimized performance, tested core features, and deployed to production."
    }
  ],
  languages: {
    TypeScript: 25000,
    JavaScript: 15000,
    tailwinds: 3333,
    nextjs: 20000,
  }
},
{
  id: 1,
  title: "FT Transcendence",
  slug: "ft-transcendence",
  description:
        "A full-stack web application featuring a real-time multiplayer ping pong game with a responsive and intuitive UI/UX design. The project includes a real-time chat system with private messaging, notifications, and friend management features using WebSocket. It also features an interactive dashboard displaying user statistics, match history, and a leaderboard for competitive tracking.",
      image: "/ft-pong.jpeg",
      category: "Full Stack",
      technologies: ["React", "TypeScript", "Django", "WebSocket"],
      duration: "4 months",
      client: "1337 coding school",
      role: "Full Stack Developer",
      created_at: "2024-10-01",
      pushed_at: "2025-01-15",
      sourceCode: "https://github.com/0x00-A/ft_transcendence_42",
      liveDemo: "https://ft-pong.me",
      demo: true,
      sCode: true,
      features: [
        "Real-time multiplayer ping pong game",
        "Responsive and intuitive UI/UX design",
        "Real-time chat system with private messaging",
        "Notifications and friend management",
        "Interactive dashboard with user statistics",
        "Match history and leaderboard",
        "Multi-language support",
      ],
      timeline: [
        {
          date: "October 2024",
          title: "Project Kickoff",
          description: "Initial planning and requirements gathering",
        },
        {
          date: "November 2024",
          title: "Core Development",
          description: "Implementation of main features and game logic",
        },
        {
          date: "December 2024",
          title: "UI/UX and Real-time Features",
          description: "Focus on user interface and WebSocket integration",
        },
        {
          date: "January 2025",
          title: "Testing and Launch",
          description: "Final testing, bug fixes, and project deployment",
        },
      ],
      languages: {
        TypeScript: 50000,
        Python: 30000,
        REACT: 20000,
        HTML: 10000,
        CSS: 10000,
      },
    },
    {
      id: 3,
      title: "Inception",
      slug: "inception",
      description:
        "A scalable web infrastructure using Docker containers, including NGINX, WordPress, and MariaDB. The project implements secure web server configuration with TLSv1.2/TLSv1.3 encryption.",
      image: "/inception.jpeg",
      category: "DevOps",
      technologies: ["Docker", "Docker Compose", "NGINX", "WordPress", "MariaDB"],
      duration: "2 months",
      client: "1337 coding school",
      role: "DevOps Engineer",
      created_at: "2024-05-01",
      pushed_at: "2024-06-30",
      sourceCode: "https://github.com/rel-isma/INCEPTION",
      demo: false,
      sCode: true,
      features: [
        "Scalable web infrastructure",
        "Docker containerization",
        "Secure web server configuration",
        "TLSv1.2/TLSv1.3 encryption",
      ],
      timeline: [
        {
          date: "May 2024",
          title: "Infrastructure Design",
          description: "Planning and designing the Docker-based infrastructure",
        },
        {
          date: "June 2024",
          title: "Implementation and Security",
          description: "Setting up containers and implementing security measures",
        },
      ],
      languages: {
        Docker: 5000,
        YAML: 3000,
        bash: 2000,
      },
    },
    {
      id: 4,
      title: "IRC Server Implementation",
      slug: "irc-server",
      description:
        "A fully functional IRC server handling multiple client connections with non-blocking I/O. The project implements robust error handling and connection management systems.",
      image: "/irc-server.jpeg",
      category: "Network Programming",
      technologies: ["C++98", "Network Programming"],
      duration: "2 months",
      client: "1337 coding school",
      role: "Backend Developer",
      created_at: "2024-03-01",
      pushed_at: "2024-04-30",
      sourceCode: "https://github.com/0x00-A/ircserv_42",
      demo: false,
      sCode: true,
      features: [
        "Multiple client connections",
        "Non-blocking I/O",
        "Robust error handling",
        "Efficient connection management",
      ],
      timeline: [
        {
          date: "March 2024",
          title: "Server Architecture",
          description: "Designing and implementing the core server architecture",
        },
        {
          date: "April 2024",
          title: "Protocol Implementation and Testing",
          description: "Implementing the IRC protocol and conducting extensive testing",
        },
      ],
      languages: {
        Cpp: 10000,
      },
    },
    {
      id: 5,
      title: "NetPractice",
      slug: "net-practice",
      description:
        "A project focused on configuring and troubleshooting complex network topologies using TCP/IP protocols. It involves implementing efficient subnetting solutions for optimized network performance.",
      image: "/net-practice.jpeg",
      category: "Networking",
      technologies: ["TCP/IP", "Network Configuration"],
      duration: "1 month",
      client: "1337 coding school",
      role: "Network Engineer",
      created_at: "2023-09-01",
      pushed_at: "2023-09-30",
      sourceCode: "https://github.com/yourusername/net-practice",
      demo: false,
      sCode: false,
      features: [
        "Complex network topology configuration",
        "TCP/IP protocol implementation",
        "Efficient subnetting solutions",
        "Network performance optimization",
      ],
      timeline: [
        {
          date: "September 2023",
          title: "Network Design and Implementation",
          description: "Designing, configuring, and optimizing network topologies",
        },
      ],
      languages: {
        Cpp: 5000,
      },
    },
    {
      id: 6,
      title: "Minishell",
      slug: "minishell",
      description:
        "A mini shell built using C, capable of handling user commands, signals, and processes. The project overcame challenges related to memory management and process synchronization.",
      image: "/minishell.jpeg",
      category: "System Programming",
      technologies: ["C", "Shell Scripting"],
      duration: "2 months",
      client: "1337 coding school",
      role: "System Programmer",
      created_at: "2023-07-01",
      pushed_at: "2023-08-31",
      sourceCode: "https://github.com/rel-isma/minishell",
      demo: false,
      sCode: true,
      features: [
        "User command handling",
        "Signal management",
        "Process handling",
        "Memory management",
        "Process synchronization",
      ],
      timeline: [
        {
          date: "July 2023",
          title: "Core Shell Functionality",
          description: "Implementing basic shell features and command handling",
        },
        {
          date: "August 2023",
          title: "Advanced Features and Optimization",
          description: "Adding advanced features and optimizing performance",
        },
      ],
      languages: {
        C: 8000,
        bash: 50,
      },
    },
  ]
  
  