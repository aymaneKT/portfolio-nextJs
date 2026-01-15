export type AnchorLinks = {
  section: string;
  links: LinksType[];
};

export type LinksType = {
  name: string;
  url: string;
  color?: string;
};

export type HeroInfoType = {
  numberInfo: string;
  description: string;
};
export const consonantLinks: AnchorLinks[] = [
  {
    section: "Menu",
    links: [
      { name: "Home", url: "#home", color: "#14B8A6" },
      { name: "About Me", url: "#about", color: "#EAB308" },
      { name: "Projects", url: "#projects", color: "#3B82F6" },
      { name: "Experience", url: "#experience", color: "#5051AF" },
    ],
  },
  {
    section: "Social",
    links: [
      { name: "GitHub", url: "https://github.com/aymaneKT" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/aymane-kabti" },
      { name: "Twitter", url: "https://twitter.com/AymaneKT" },
      { name: "Instagram", url: "https://www.instagram.com/aymane_qabti/" },
    ],
  },
];

export const heroinfo: HeroInfoType[] = [
  {
    numberInfo: `2+`,
    description: "Years of Experience",
  },
  {
    numberInfo: `4+`,
    description: "Completed Projects",
  },
  {
    numberInfo: `2K+`,
    description: "Hours Worked",
  },
];
