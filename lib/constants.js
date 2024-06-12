import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDiscord,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiGo } from "react-icons/si";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact ",
  },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I can help you build a website that will help you grow your business.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I can help you design a user interface that will help you grow your business.",
    href: "",
  },
  {
    num: "03",
    title: "AI/ML Development",
    description: "Build AI/ML models that will help you grow your business.",
    href: "",
  },
  {
    num: "04",
    title: "Data Science",
    description:
      "Uderstand your data and make better decisions for your business.",
    href: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "I am a software developer with a passion for building digital experiences. I am proficient in various programming languages and technologies.",
  info: [
    {
      fieldName: "Name",
      value: "Kabir Maniar",
    },
    {
      fieldName: "Phone",
      value: "(123) 456-7890",
    },
    {
      fieldName: "Experience",
      value: "~3 Years",
    },
    {
      fieldName: "Discord",
      value: "@kabironline",
    },
    {
      fieldName: "Instagram",
      value: "@kabir__online",
    },
    {
      fieldName: "Email",
      value: "kabironline64@gmail.com",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "I have worked with various companies and have gained experience in building digital experiences.",
  items: [
    {
      company: "Company 1",
      position: "Software Developer",
      duration: "2022 - Present",
    },
    {
      company: "Company 2",
      position: "Software Developer",
      duration: "2020 - 2022",
    },
    {
      company: "Company 3",
      position: "Developer Intern",
      duration: "Summer 2019",
    },
  ],
};

export const education = {
  icon: "/assets/resume/graduation.svg",
  title: "Education",
  description:
    "I have completed my education from various universities and have gained knowledge in various fields.",
  items: [
    {
      institution: "Indian Institute of Technology Madras",
      degree: "BS in  Data Science and Application",
      duration: "2022 - 2026*",
    },
    {
      institution: "Thakur Polytechnic",
      degree: "Diploma in Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "N.L. Dalmia High School",
      degree: "Metriculation",
      duration: "2007 - 2019",
    },
  ],
};

export const skills = {
  title: "Skills",
  description:
    "I have gained various skills over the years and have mastered various technologies.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      title: "HTML",
    },
    {
      icon: <FaCss3 />,
      title: "CSS",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
    },
    {
      icon: <FaPython />,
      title: "Python",
    },
    {
      icon: <SiGo />,
      title: "Golang",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "Project 1",
    description: "This is a project description",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "Tailwind CSS" },
      { name: "React" },
    ],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "02",
    category: "AI/ML Development",
    title: "Project 2",
    description: "This is a project description",
    stack: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Jupyter Notebook" },
    ],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "03",
    category: "Mobile Development",
    title: "Project 3",
    description: "This is a project description",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Firebase" }],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "04",
    category: "Web Development",
    title: "Project 4",
    description: "This is a project description",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "Tailwind CSS" },
      { name: "Vue" },
      { name: "SQLite" },
      { name: "Cron Jobs" },
      { name: "Redis" },
      { name: "Docker" },
    ],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
];

export const info = [
  {
    icon: <FaDiscord />,
    title: "Discord",
    description: "kabironline",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    description: "kabir__online",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kabironline64@gmail.com",
  },
];
