import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import {SiJavascript, SiRedux, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb} from "react-icons/si";
import {FaReact, FaNode} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Web app",
    projects: 9,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Full-stack app",
    projects: 4,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Side projects",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I help in finding solutions and solve problems with my technical skills, making the unreachable services available at the click of a button.",
  
  "I also provide technical services for brands and work for companies to fix world problems with the use of my technical experience. ",
];

export const workExp = [
  {
    place: "Global Axis",
    tenure: "April 2022 - Sep 2022",
    role: "Front-End Developer",
    detail:
      "I worked with various types of technologies and well experieced developers. Collaborated with Senior Developers to develop initiatives to build confidence.",
  },
  {
    place: "Ajian Labs",
    tenure: "Jan 2022 - Till date.",
    role: "Front-End Developer",
    detail:
      "Analyzed problems and worked with a team to develop solutions." 
  },
];

export const comments = [
  {
    name: "JavaScript",
    post: "Front-End and Back-End",
    comment:
      "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
    icon: SiJavascript
  },
  {
    name: "React.Js",
    post: "Framework",
    comment:
      "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of developers use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance.",
    icon: FaReact,
  },
  {
    name: "Node.Js",
    post: "Back-End",
    comment:
      "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
    icon: FaNode,
  },
  {
    name: "Redux",
    post: "State Management",
    comment:
      "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test. While it's mostly used as a state management tool with React.",
    icon: SiRedux,
  },
  {
    name: "Next.Js",
    post: "Server Rendering",
    comment:
      "Next.js is a React framework that gives building blocks to create web applications.Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    post: "Framework",
    comment:
      "Tailwind is a CSS framework that provides single-purpose utility classes which are opinionated for the most part, and which help us design our web pages from right inside our markup or js/. jsx/.",
    icon: SiTailwindcss,
  },
  {
    name: "Express",
    post: "Framework",
    comment:
      "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    icon: SiExpress,
  },
  {
    name: "Git and Github",
    post: "Repo hosting Services",
    comment:
      "Git is an open-source, version control tool created in 2005 by developers working on the Linux operating system; GitHub is a company founded in 2008 that makes tools which integrate with git.",
    icon: BsGithub,
  },
  {
    name: "Mongo DB",
    post: "Database",
    comment:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. ",
    icon: SiMongodb
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
