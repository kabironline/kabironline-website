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
    num: "01",
    category: "Backend Development",
    title: "X",
    description:
      "X, an expression evaluator in Go-lang, similar to Excel. This open source project is part of Processious, a modern and radical no-code, low-code process automation platform.",
    stack: ["Golang"],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "02",
    category: "AI/ML Development",
    title: "Project 2",
    description: "This is a project description",
    stack: ["Python", "PyTorch", "Jupyter Notebook"],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "03",
    category: "TomoChat",
    title: "TomoChat",
    description:
      "Welcome to TomoChat! This project is a real-time chat application developed using Flutter for the frontend and Firebase for the backend. It was my first full end-to-end project and served as my final year college project.",
    stack: ["Flutter", "Dart", "Firebase"],
    image: "/project-image-temp.png",
    github: "https://github.com/kabironline",
  },
  {
    num: "04",
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
