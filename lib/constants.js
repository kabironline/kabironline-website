import { BsClipboard2DataFill } from "react-icons/bs";
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
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGo,
  SiGooglegemini,
  SiVuedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
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

export const socials = [
  { icon: <FaGithub />, link: "https://github.com/kabironline" },
  // { icon: <FaTwitter />, link: "" },
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/kabironline/" },
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
    "I am a software developer with a passion for building scalable and reliable enterprise applications. I have experience in various technologies and fields of work. I am always open to learning new technologies and working on new projects.",
  info: [
    {
      fieldName: "Name",
      value: "Kabir Maniar",
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
    "Worked at building scalable and reliable enterprise applications. Worked on various technologies and gained experience in various fields.",
  items: [
    {
      company: "ManiarTech",
      position: "Software Developer / ML Reasearcher",
      duration: "Mar 2024 - Present",
    },
    {
      company: "ManiarTech",
      position: "Software Developer",
      duration: "Aug 2021 - Mar 2024",
    },
  ],
};

export const education = {
  icon: "/assets/resume/graduation.svg",
  title: "Education",
  description:
    "Gained knowledge in Computer Science and Engineering. Currently pursuing a degree in Data Science and Application. ",
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
    "Gained experience in various technologies and programming languages, Frameworks and Field of work. Here are some of the technologies I have worked with, and some I am currently learning. Also, I am always open to learning new technologies and working on new projects.",
  skillsList: [
    {
      icon: <SiGo />,
      title: "Golang",
    },
    {
      icon: <SiGooglegemini />,
      title: "Machine Learning (learning in progress)",
    },
    {
      icon: <BsClipboard2DataFill />,
      title: "Data Science (learning in progress)",
    },
    {
      icon: <FaPython />,
      title: "Python",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML & CSS",
    },
    {
      icon: <SiTypescript />,
      title: "TypeScript",
    },
    {
      icon: <FaReact />,
      title: "React",
    },
    {
      icon: <SiVuedotjs />,
      title: "Vue",
    },
  ],
};

export const projects = [
  {
    category: "Backend Development",
    title: "X",
    description:
      "X, an expression evaluator in Go-lang, similar to Excel. This open source project is part of Processious, a modern and radical no-code, low-code process automation platform.",
    stack: ["Golang"],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    category: "Enterprise Application",
    title: "Processious",
    description:
      "Processious is a modern and radical no-code, low-code process automation platform. It is built with Go-lang and React. It is a SaaS platform that helps businesses automate their processes.",
    stack: ["Golang", "React", "Docker"],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    category: "AI/ML Development",
    title: "TajMahal",
    description:
      "TajMahal is an AI Powered Static Site Generator. Built to generate performant and beautiful static sites using AI/ML models.",
    stack: ["Python", "LLMs", "ML", "Docker"],
    image: "/project-image-temp.png",
  },
  {
    category: "AI/ML Development",
    title: "Documentor",
    description:
      "Documentor.ai is an AI Powered Document Generator and Managment System. It is built to help businesses and individuals generate and manage documents using AI/ML models.",
    stack: ["Python", "LLMs", "ML", "Docker", "Typescript", "React"],
    image: "/project-image-temp.png",
  },
  {
    category: "Web Development",
    title: "Audify",
    description:
      "A music streaming application built with Vue.js. The backend, developed with Flask, is located in a separate repository and handles API requests, database interactions, caching, and email services.",
    stack: [
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
      "Vue",
      "SQLite",
      "Cron Jobs",
      "Redis",
      "Docker",
    ],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    category: "TomoChat",
    title: "TomoChat",
    description:
      "Welcome to TomoChat! This project is a real-time chat application developed using Flutter for the frontend and Firebase for the backend. It was my first full end-to-end project and served as my final year college project.",
    stack: ["Flutter", "Dart", "Firebase"],
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
