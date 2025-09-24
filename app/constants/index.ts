export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: "/backend.webp",
  },
  {
    title: "Full Stack Web Developer",
    icon: "/web.webp",
  },
  {
    title: "App Developer",
    icon: "/mobile.webp",
  },
  {
    title: "Software Engineer",
    icon: "/creator.webp",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.webp",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.webp",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.webp",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.webp",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.webp",
  },
  {
    name: "Next.JS",
    icon: "/tech/nextjs.svg",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.webp",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.webp",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.webp",
  },
  {
    name: "git",
    icon: "/tech/git.webp",
  },
  {
    name: "figma",
    icon: "/tech/figma.webp",
  },
  {
    name: "wordpress",
    icon: "/tech/wordpress.webp",
  },
  {
    name: "bootstrap",
    icon: "/tech/bootstrap.webp",
  },
];

const experiences = [
  {
    title: "IT Assistant",
    company_name: "— Internship to Full-Time —",
    icon: "/company/avm.webp", // replace with your actual logo/icon if available
    iconBg: "#4B5563",
    date: "2023 - 2024",
    points: [
      "Supported day-to-day IT operations including system maintenance, troubleshooting, and hardware/software setup.",
      "Provided first-line technical support to staff, ensuring minimal downtime and smooth business operations.",
      "Maintained network connectivity, monitored systems, and assisted with security and access management.",
      "Transitioned from internship to full-time IT Assistant, gaining hands-on experience in IT infrastructure.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "A.V.M Auto",
    icon: "/company/avm.webp",
    iconBg: "#383E56",
    date: "2024 -  2025",
    points: [
      "Built and maintained responsive, accessible UIs using React.js and Next.js with a focus on performance and SEO.",
      "Translated UI/UX wireframes into reusable components, implementing state management and routing in modern front-end stacks.",
      "Designed and developed portfolio/marketing sites (WordPress and Next.js), improving brand visibility and customer engagement.",
      "Partnered with stakeholders to gather requirements, prototype quickly, and iterate based on feedback to enhance interactivity.",
      "Optimization work (Lighthouse, Core Web Vitals, image optimization, caching) contributed to a +54.25% sales increase.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Way to Web Pvt. Ltd.",
    icon: "/company/wtw.jpg",
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Maintaining and enhancing the WordPress site for A.V.M Auto (The Car Body Shop, Ahmedabad), including theme and plugin updates.",
      "Analyzing user feedback and triaging/fixing bugs to improve stability and UX.",
      "Executing on-page SEO (metadata, sitemaps, schema) and monitoring performance metrics.",
      "Handling design updates and coordinating hosting, backups, and routine maintenance tasks.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
    name: "Om Patel",
    image: "/socialmedia/behance.svg",
    link: "https://www.youtube.com",
  },
  {
    id: 2,
    testimonial:
      "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
    name: "Om Patel",
    image: "/socialmedia/Facebook_icon.svg",
    link: "https://www.facebook.com/share/19VSBE8rGQ/?mibextid=wwXIfr",
  },
  {
    id: 3,
    testimonial:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
    name: "Om Patel",
    image: "/socialmedia/dribble.svg",
    link: "https://www.facebook.com/share/19VSBE8rGQ/?mibextid=wwXIfr",
  },
  {
    id: 4,
    testimonial:
      "Also do check out my UI/UX Portfolio where I have shared by design studies.",
    name: "Om Patel",
    image: "/socialmedia/portfolio.svg",
    link: "https://www.facebook.com/share/19VSBE8rGQ/?mibextid=wwXIfr",
  },
  {
    id: 5,
    testimonial:
      "Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
    name: "Om Patel",
    image: "/tech/github.webp",
    link: "https://github.com/ThornieDev",
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link?: string;
  deploy_link: string;
  platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
}[] = [
  {
    name: "A.V.M Auto Portfolio",
    description:
      "A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "google-translate",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/avm.webp",
    platform: "Wordpress",
    deploy_link: "https://avmauto.in/",
  },
  {
    name: "Sparkbright Engineering Portfolio",
    description:
      " Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
    tags: [
      {
        name: "next",
        color: "red-text-gradient",
      },
      {
        name: "Next UI",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/sparkbright.png",
    source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
    platform: "Web",
    deploy_link: "https://sparkbright.in/",
  },
  {
    name: "HooBank",
    description:
      "A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
    tags: [
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: "/projectimg/hoobank.webp",
    source_code_link: "https://github.com/omunite215/hoobank",
    platform: "Vercel",
    deploy_link: "https://hoobankbyom.netlify.app/",
  },
  {
    name: "MERN Dashboard",
    description:
      " Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectimg/mern.png",
    source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
    platform: "Web",
    deploy_link: "https://admin-frontend-r705.onrender.com/",
  },
  {
    name: "Metaverse Web 3.0",
    description:
      "A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/projectimg/metaverse.png",
    source_code_link: "https://github.com/omunite215/Project_Metaverse",
    platform: "Vercel",
    deploy_link: "https://project-metaverse-beta.vercel.app/",
  },
  {
    name: "Issue Tracker",
    description:
      "A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "shadCN",
        color: "orange-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
    ],
    image: "/projectimg/issuetracker.png",
    source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
    platform: "Vercel",
    deploy_link: "https://project-issue-tracker.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
