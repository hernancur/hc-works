export const aboutImgs = [
  "/img/img7.jpg",
  "/img/img6.jpg",
  "/img/img7.jpg",
  "/img/img6.jpg",
];

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
    link: "https://owlfurnitureandobjects.com/",
    year: 2020,
    imgLink: "/img/owl1.jpg",
    imgLink2: "/img/owl2.jpg",
    title: "Freelance | OWL",
    subT: "Collaborated with OWL, Barcelona-based design studio known for crafting one-of-a-kind furniture and objects. Helping bring their unique creations to the digital world.",
  },
  {
    status: null,
    link: "https://pf-beat-connect.vercel.app/",
    year: 2022,
    imgLink: "/img/beat1.jpg",
    imgLink2: "/img/beat2.jpg",
    title: "Product Owner | Beat Connect",
    subT: "Alongside my students we designed a solution that simplifies the process of finding and purchasing backing tracks for songs, making life easier for musicians and producers around the world.",
  },
];

export let linkFrontPage = [
  {
    date: "Dec 2022 - Apr 2023",
    imgLink: "/img/img6.jpg",
    title: "Product Design Intern",
    sub: "Avalon Scenes",
    subTitle:
      "At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better.",
    bttn: "View my work",
  },
  {
    date: "Jul 2022 - Sep 2022",
    imgLink: "/img/img3.jpg",
    title: "Designer in Residence",
    sub: "10kdesigners",
    subTitle:
      "Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects.",
  },

  {
    date: "Jan 2022 - Mar 2022",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Dive",
    subTitle:
      "I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch.",
  },
  {
    date: "Sep 2021 - Dec 2021 ",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Winuall",
    subTitle:
      "I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website.",
  },
];

import {
  PiHouseThin,
  PiCodeThin,
  PiAddressBookThin,
  // PiGithubLogoThin,
  // PiTwitterLogoThin,
} from "react-icons/pi";
import { GoPaperclip } from "react-icons/go";

export const HeaderLinks = [
  {
    href: "/",
    label: "Inicio",
    Icon: <PiHouseThin />,
  },
  {
    href: "/about",
    label: "About",
    Icon: <PiAddressBookThin />,
  },

  {
    href: "/projects",
    label: "projects",
    Icon: <PiCodeThin />,
  },
  // {
  //   href: "https://github.com/hernancur",
  //   label: "GitHub",
  //   target: "_blank",
  //   Icon: <PiGithubLogoThin />,
  //   rel: "noopener noreferrer",
  // },
  // {
  //   href: "https://twitter.com/hernancur",
  //   label: "GitHub",
  //   target: "_blank",
  //   Icon: <PiTwitterLogoThin />,
  //   rel: "noopener noreferrer",
  // },
  {
    href: "/experience",
    label: "experience",
    Icon: <GoPaperclip />,
  },
];
