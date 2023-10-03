export const aboutImgs = [
  "https://i.ibb.co/R6DPtss/M395193-top.jpg",
  "https://i.ibb.co/J7YPxbG/img6.jpg",
  "https://i.ibb.co/R6DPtss/M395193-top.jpg",
  "https://i.ibb.co/J7YPxbG/img6.jpg",
];

export const projectsFrontPage = [
  {
    imgLink: "https://i.ibb.co/J7YPxbG/img6.jpg",
    title: "UI/ UX Case Study: Group Food Ordering",
    subT: "Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
  },
  {
    imgLink: "https://i.ibb.co/J7YPxbG/img6.jpg",
    title:
      "UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses",
    subT: "Designed a feature that simplifies local store sales on WhatsApp for businesses..",
  },
  {
    imgLink: "https://i.ibb.co/J7YPxbG/img6.jpg",
    title: "Creating Dive platform's Trivia Game",
    subT: "Designed a trivia game to enhance user engagement during sessions on Dive platform.",
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
  PiGithubLogoThin,
  PiTwitterLogoThin,
  PiCodeThin,
  PiAddressBookThin,
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
    href: "/project",
    label: "project",
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
