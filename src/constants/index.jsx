import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';


import { SiTypescript } from 'react-icons/si';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiGit } from 'react-icons/di';
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';



import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  //{ label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Mohd Uzair",
  info: "Full-stack developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Uzair, a full-stack developer. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "AuthPro",
    subtitle:
      "A Full-stack Authentication Service",
    image: image1,
    link:"https://github.com/Uzair06/AuthPro"
  },
  {
    title: "Video Streaming App",
    subtitle:
      "A Proof of work Video Streaming application",
    image: image2,
    link:"https://github.com/Uzair06/video-streaming-application"
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website developed using React and it's framer motion library and designed with Tailwind",
    image: image4,
    link:"#"
  },
  
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    
  },
  {
    icon: <SiTypescript className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Typescript",
    
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-blue-500" />,
    name: "Tailwind",
    
  },
  {
    icon: <DiGit className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
    
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Monis Azeem",
    title: "SDE, Trianz",
    quote:
      "Uzair was of great help. He made sure my project not only met but exceeded expectations. Highly recommend!",
    image: user3,
  },
  {
    name: "Rabi Anando",
    title: "Web Development Intern at Coral",
    quote:
      "Working with Uzair was a breeze! His expertise in the MERN stack turned my project from a headache to a success story. Thanks to him, I now have a website I'm proud to show off.",
    image: user1,
  },
  {
    name: "Devansh Verma",
    title: "Student at Galgotia College of Engineering and Technology",
    quote:
      "Uzair helped me navigate through the complexities of MERN stack development with ease. Super grateful for their patience and support",
    image: user2,
  },
  
];

export const SOCIAL_MEDIA_LINKS = [
  
  {
    href: "https://x.com/MohdUza39073159",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Uzair06",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mohd-uzairxx/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
