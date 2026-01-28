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
      { name: "Contact", url: "#contact", color: "#5051AF" },
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
    numberInfo: `2k+`,
    description: "Hours Worked",
  },
];

export type moduleType = {
  name: string;
  image: string;
};
export type stackType = {
  categorie: string;
  module: moduleType[];
};

export const stacks: stackType[] = [
  {
    categorie: "Frontend",
    module: [
      {
        name: "JavaScript",
        image: "/images/tech/js.png",
      },
      {
        name: "TypeScript",
        image: "/images/tech/ts.png",
      },
      {
        name: "React",
        image: "/images/tech/react.png",
      },
      {
        name: "Next.Js",
        image: "/images/tech/next.png",
      },
      {
        name: "Tailwind CSS",
        image: "/images/tech/tailwind.png",
      },
      {
        name: "HTML",
        image: "/images/tech/html.png",
      },
      {
        name: "CSS",
        image: "/images/tech/css.svg",
      },
      {
        name: "GSAP",
        image: "/images/tech/gsap.png",
      },
      {
        name: "bootstrap",
        image: "/images/tech/bootstrap.svg",
      },
      {
        name: "Material UI",
        image: "/images/tech/materialui.png",
      },
    ],
  },
  {
    categorie: "Backend",
    module: [
      {
        name: "Node.Js",
        image: "/images/tech/node.png",
      },
      {
        name: "Expess.Js",
        image: "/images/tech/express.png",
      },
      {
        name: "MySQL",
        image: "/images/tech/mysql.svg",
      },
      {
        name: "PostgreSQL",
        image: "/images/tech/postgreSQL.png",
      },
      {
        name: "mongoDb",
        image: "/images/tech/mongodb.png",
      },
    ],
  },

  {
    categorie: "Tools",
    module: [
      {
        name: "Git",
        image: "/images/tech/git.png",
      },
      {
        name: "Github",
        image: "/images/tech/github.png",
      },
      {
        name: "Postman",
        image: "/images/tech/postman.png",
      },
      {
        name: "Npm",
        image: "/images/tech/npm.png",
      },
    ],
  },
];

export type projectType = {
  projectName: string;
  image: string;
  usedTech: string[];
};

export const projects: projectType[] = [
  {
    projectName: "Uber Web App",
    // projectName: "Uber Web App for the Bologna Fair (Italy) – Totem Version",
    image: "/images/projects/uberTotem.jpg",
    usedTech: ["React", "Tailwind CSS", "React Dom Router", "Framer Motion"],
  },
  {
    projectName: "Dev Events",
    image: "/images/projects/DevEvents.png",
    usedTech: ["Next.Js", "Tailwind CSS", "TypeScript", "POSTHOG", "MongoDB"],
  },
  {
    projectName: "Car Rental",
    image: "/images/projects/CarRental.png",
    usedTech: ["React", "Tailwind CSS", "Mongo Db", "Express.Js", "Node.Js"],
  },
  {
    projectName: "Volution Wear",
    image: "/images/projects/VolutionWear.jpg",
    usedTech: ["React", "Tailwind CSS", "MySQL", "Express.Js", "Node.Js"],
  },
  {
    projectName: "Velvet Pour",
    image: "/images/projects/VelvetPour.png",
    usedTech: ["React", "Tailwind CSS", "GSAP"],
  },
];

export const email: string = "aymanekabtitech@gmail.com";
export const linkedin: string = "https://www.linkedin.com/in/aymane-kabti/";
