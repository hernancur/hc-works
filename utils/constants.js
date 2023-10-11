export const aboutImgs = [
  "/img/img7.jpg",
  "/img/img6.jpg",
  "/img/img7.jpg",
  "/img/img6.jpg",
];

// Projects
export const projectsFrontPage = [
  {
    status: "Progress",
    link: "https://muestra-landing.vercel.app/",
    year: 2023,
    imgLink: "/img/landing2.jpg",
    imgLink2: "/img/landing1.jpg",
    title: "Freelance | Web Solutions",
    subT: "This is a demonstration of what you could achieve with your own custom-developed website. This sample page exemplifies the potential to reach new customers, boost your sales and stand out.",
  },
  {
    status: null,
    link: "https://pf-beat-connect.vercel.app/",
    year: 2022,
    imgLink: "/img/beat2.jpg",
    imgLink2: "/img/beat1.jpg",
    title: "Product Owner | Beat Connect",
    subT: "Alongside my students we designed a solution that simplifies the process of finding and purchasing backing tracks for songs, making life easier for musicians and producers around the world.",
  },
  {
    status: null,
    link: "https://owlfurnitureandobjects.com/",
    year: 2020,
    imgLink: "/img/owl3.jpg",
    imgLink2: "/img/owl2.jpg",
    title: "Fullstack | OWL",
    subT: "Collaborated with OWL, Barcelona-based design studio known for crafting one-of-a-kind furniture and objects. Helping bring their unique creations to the digital world.",
  },
];

// Experience

export let linkFrontPage = [
  {
    date: "Apr 2022 - Aug 2023",
    imgLink: "/img/henry.jpg",
    title: "Web development Instructor",
    sub: "Henry",
    href: "https://www.soyhenry.com/",
    subTitle:
      "Guided, mentored and empowered over 1000 students in fullstack, with the majority working remotely at the moment, unlocking their potencials. Also, I improved the data visualization we had in the company for more precise decisions.",
    bttn: "View my work",
  },
  {
    date: "Nov 2021 - May 2022",
    imgLink: "/img/henry.jpg",
    title: "Scrum Master",
    sub: "Henry",
    href: "https://www.soyhenry.com/",
    subTitle:
      "Facilitating collaboration, and ensuring on-time, high-quality product delivery. Removed obstacles and promoted agile principles for processes and successful outcomes.",
  },

  {
    date: "Oct 2021 - Dec 2021",
    imgLink: "/img/coder.jpg",
    title: "Backend development Instructor",
    sub: "CoderHouse",
    href: "https://www.coderhouse.com/",
    subTitle:
      "Provided comprehensive guidance in backend technologies: NodeJS, Express, SQL, ORM's, and Jest (testing). Dedicated to fostering a deep understanding and ensuring my students were well-prepared for their careers.",
  },
  {
    date: "Feb 2021 - May 2021",
    imgLink: "/img/cobra.jpg",
    title: "Freelance | Development consultant",
    sub: "Cobraticket",
    href: "https://cobraticket.uy/",
    subTitle:
      "With focus on database management and structure I contributed as a consultant, specializing in web solution for event-ticket sales.",
  },
  {
    date: "Aug 2020 - Oct 2020",
    imgLink: "/img/owl.jpg",
    title: "Freelance | Fullstack developer",
    sub: "OWL",
    href: "https://owlfurnitureandobjects.com/",
    subTitle:
      "Collaborated with 'OWL' building robust and efficient components to power web application. My responsibilities included creating interactive features that enriched user experiences.",
  },

  {
    date: "Oct 2019 - Aug 2020",
    imgLink: "/img/influx.jpg",
    title: "Developer & Designer",
    sub: "Influx Mkt & Consulting",
    href: "https://www.linkedin.com/company/influx-marketing-consulting/",
    subTitle:
      "Backend Developer, overseeing user-centric projects and ensuring seamless functioning of servers to drive initiatives.",
  },
];

// Header
import {
  PiHouseThin,
  PiWhatsappLogoThin,
  PiSuitcaseSimpleThin,
  PiUserThin,
} from "react-icons/pi";

export const HeaderLinks = [
  {
    href: "/",
    label: "Inicio",
    Icon: <PiHouseThin />,
  },
  {
    href: "https://www.linkedin.com/in/hernan-garcia-fullstack/",
    label: "About",
    target: "_blank",
    Icon: <PiUserThin />,
  },
  {
    href: "/experience",
    label: "experience",
    Icon: <PiSuitcaseSimpleThin />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=59892956528&text=Hello%20I%20want%20more%20information%20about%20...",
    label: "contact",
    Icon: <PiWhatsappLogoThin />,
  },
];

// Techstack

export const techStack = [
  {
    name: "GIT",
    icon: "/icons/git.png",
    href: "https://git-scm.com/",
  },
  {
    name: "NPM",
    icon: "/icons/npm.png",
    href: "/",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.jpg",
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "/icons/TS.png",
    href: "https://www.typescriptlang.org/",
  },

  {
    name: "HTML",
    icon: "/icons/html.png",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "/icons/css.png",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
  },

  {
    name: "React",
    icon: "/icons/react.png",
    href: "https://es.reactjs.org/",
  },
  {
    name: "Redux",
    icon: "/icons/redux.png",
    href: "https://es.redux.js.org/",
  },
  {
    name: "Node",
    icon: "/icons/node.jpg",
    href: "https://nodejs.org/es/docs/",
  },

  {
    name: "Express",
    icon: "/icons/express.png",
    href: "https://expressjs.com/es/",
  },

  {
    name: "SQL",
    icon: "/icons/sql.png",
    href: "https://www.w3schools.com/sql/",
  },
  {
    name: "Sequelize",
    icon: "/icons/seq.png",
    href: "https://sequelize.org/",
  },
  {
    name: "Prisma",
    icon: "/icons/prisma.png",
    href: "https://www.prisma.io/docs",
  },
  {
    name: "Sheets",
    icon: "/icons/sheets.png",
    href: "/",
  },
  // {
  //   name: "Scrum",
  //   icon: "/icons/scrum.jpg",
  //   href: "https://www.scrumguides.org/scrum-guide.html",
  // },
  {
    name: "Looker",
    icon: "/icons/looker.png",
    href: "https://docs.looker.com/",
  },
];
