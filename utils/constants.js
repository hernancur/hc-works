export const aboutImgs = [
  "/img/img7.jpg",
  "/img/workshop.jpg",
  "/img/img7.jpg",
  "/img/workshop.jpg",
];

export const courseImgs = [
  "/course/pc.png",
  "/img/workshop.jpg",
  "/course/pc.png",
  "/img/workshop.jpg",
  "/course/pc.png",
  "/img/workshop.jpg",
  "/course/pc.png",
  "/img/workshop.jpg",
  "/course/pc.png",
  "/img/workshop.jpg",
];

// Projects
export const projectsFrontPage = [
  {
    status: null,
    link: "https://pov-chat.netlify.app/",
    year: 2023,
    imgLink: "/img/pov1.jpg",
    imgLink2: "/img/pov2.jpg",
    title: "POV | Project Manager & Developer",
    subT: "Chat with your favorites celebrity never was so easy. Comment, react, access content and more. The idea aims to address upcoming challenges in content creation, presenting a fresh proposal for their renewal.",
  },
  {
    status: null,
    link: "https://www.floridacowork.com.uy/",
    year: 2022,
    imgLink: "/img/workshop.jpg",
    imgLink2: "/img/workshop2.jpg",
    title: "How do apps work? | Speaker at Florida Cowork",
    subT: "The objective was to bring knowledge and opportunities in the technology market to young and interested people in the city. I was the keynote speaker. Organized together with Florida CoWork.",
  },
  {
    status: null,
    link: "https://apple-by-hernan.vercel.app/",
    year: 2023,
    imgLink: "/img/apple1.jpeg",
    imgLink2: "/img/apple2.jpeg",
    title: "Apple 3D web | iPhone 14 Pro max",
    subT: "Web with three-dimensional interactions showing the iphone 14 Max pro, containing a 3D viewer, colors selection, and Apple's brand image. ",
  },
  {
    status: null,
    link: "https://luasu.vercel.app/",
    year: 2023,
    imgLink: "/img/luasu1.jpg",
    imgLink2: "/img/luasu2.jpg",
    title: "Therapist website | Freelance",
    subT: "We attend 24/7 to potential clients giving information about massage services, opinions, schedules and contact. We'll also add a payment method in the future.",
  },
  // {
  //   status: null,
  //   link: "https://mascotopia.vercel.app/",
  //   year: 2023,
  //   imgLink: "/img/mascotopia1.jpg",
  //   imgLink2: "/img/mascotopia2.jpg",
  //   title: "Mascotopia | Project Manager & Developer",
  //   subT: "As a two team members, we made and offer a solution for lost/found pets driven by AI with Intelligent image recognition and virtual assistant on any needs/doubts you may have.",
  // },
  {
    status: null,
    link: "https://owlfurnitureandobjects.com/",
    year: 2020,
    imgLink: "/img/owl3.jpg",
    imgLink2: "/img/owl2.jpg",
    title: "OWL | Consultant",
    subT: "Collaborated with OWL, Barcelona-based design studio known for crafting one-of-a-kind furniture and objects. Helping bring their unique creations to the digital world.",
  },
  {
    status: null,
    link: "https://pf-beat-connect.vercel.app/",
    year: 2022,
    imgLink: "/img/beat2.jpg",
    imgLink2: "/img/beat1.jpg",
    title: "Beat Connect | Product Owner",
    subT: "Alongside my students we designed a solution that simplifies the process of finding and purchasing backing tracks for songs, making life easier for musicians and producers around the world.",
  },
];

// Experience

export let linkFrontPage = [
  {
    date: "Jan 2024 - Present",
    imgLink: "/icons/cencopng.png",
    title: "Ssr. Developer 1",
    sub: "Cencosud",
    href: "https://www.cencosud.com/",
    subTitle:
      "Developer focused on cloud, backend and product services. Internal project management. I am currently working with AWS (SNS, Lambdas), Typescript, Nest, Docker and Databases.",
    bttn: "View my work",
  },
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
  // {
  //   date: "Feb 2021 - May 2021",
  //   imgLink: "/img/cobra.jpg",
  //   title: "Development consultant | Freelance",
  //   sub: "Cobraticket",
  //   href: "https://cobraticket.uy/",
  //   subTitle:
  //     "With focus on database management and structure I contributed as a consultant, specializing in web solution for event-ticket sales.",
  // },
  {
    date: "Aug 2020 - Oct 2020",
    imgLink: "/img/owl.jpg",
    title: "Development consultant | Freelance",
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
    target: "blank",
  },
];

// Techstack

export const techStack = [
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
    name: "Terraform",
    icon: "/icons/terraform.png",
    href: "https://www.terraform.io/",
  },
  {
    name: "Nest",
    icon: "/icons/nest.webp",
    href: "https://nestjs.com/",
  },
  {
    name: "SQS",
    icon: "/icons/awsnaranja.png",
    href: "https://aws.amazon.com/es/sqs/",
  },
  {
    name: "SNS",
    icon: "/icons/awsnaranja.png",
    href: "https://aws.amazon.com/es/sns/",
  },
  {
    name: "LAMBDA",
    icon: "/icons/aws.png",
    href: "https://aws.amazon.com/es/pm/lambda/",
  },

  {
    name: "Docker",
    icon: "/icons/docker.png",
    href: "https://www.docker.com/",
  },
  {
    name: "Node",
    icon: "/icons/node.png",
    href: "https://nodejs.org/es/docs/",
  },

  {
    name: "Express",
    icon: "/icons/expressjs.png",
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
    name: "HTML",
    icon: "/icons/html.png",
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "React",
    icon: "/icons/react.png",
    href: "https://es.reactjs.org/",
  },
  {
    name: "Next",
    icon: "/icons/next.png",
    href: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: "/icons/redux.png",
    href: "https://es.redux.js.org/",
  },
  {
    name: "Tailwind",
    icon: "/icons/tailwind.png",
    href: "https://tailwindcss.com/",
  },
  {
    name: "CSS",
    icon: "/icons/css.png",
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
  },

  {
    name: "Figma",
    icon: "/icons/figma.png",
    href: "https://figma.com",
  },
  {
    name: "Photoshop",
    icon: "/icons/ps.png",
    href: "https://www.adobe.com/es/products/photoshop.html",
  },

  {
    name: "GoogleCloud",
    icon: "/icons/googleCloud.png",
    href: "https://cloud.google.com/",
  },
  {
    name: "GIT",
    icon: "/icons/git.png",
    href: "https://git-scm.com/",
  },
  {
    name: "NPM",
    icon: "/icons/npm.png",
    href: "https://www.npmjs.com/",
  },
  {
    name: "Yarn",
    icon: "/icons/yarn.png",
    href: "https://yarnpkg.com/",
  },
  {
    name: "Looker",
    icon: "/icons/looker.png",
    href: "https://docs.looker.com/",
  },
  {
    name: "Sheets",
    icon: "/icons/sheets.png",
    href: "https://www.google.com/intl/es/sheets/about/",
  },
  {
    name: "Jira",
    icon: "/icons/jira.png",
    href: "https://www.atlassian.com/es/software/jira",
  },
];

export const techLearning = [
  {
    name: "Commerce\nTools",
    icon: "/icons/commercetools.png",
    href: "https://commercetools.com/",
  },
];
