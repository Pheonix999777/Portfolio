import React from "react";
import ProjectBox from "./ProjectBox";
import NewsletterImage from "../images/2024-06-19_20-25-27.png";
import RogfreeImage from "../images/2024-06-19_20-21-15.png";
import TindogImage from "../images/2024-06-19_20-24-15.png";
import WigglesImage from "../images/2024-06-19_20-22-40.png";
import bnpfabricImage from "../images/2024-06-19_20-26-40.png";
import Sfood from "../images/2024-06-19_20-26-04.png";
import HomeKit from "../images/2024-06-19_20-27-14.png";
import beeto from "../images/2024-06-19_21-06-03.png";
import Honor from "../images/2024-06-19_21-05-19.png";
import propartnyor from "../images/2024-06-19_21-05-01.png";

const projectData = [
  {
    projectPhoto: WigglesImage,
    projectName: "Auto zoom",
    projectDesc:
      "Advanced Filtering: Thanks to the robust state management provided by Redux, users can dynamically filter data on the site. Filters are intuitive and allow for real-time updates without reloading the page.",
    projectGithub: "https://github.com/Pheonix999777/AutoZoom.git",
    projectWebsite: "https://autozoomrental.com/",
  },
  {
    projectPhoto: TindogImage,
    projectName: "Uzloyal",
    projectDesc:
      "The app's styling is managed using Sass, which allows for modular, maintainable, and extensible CSS. It provides a consistent and attractive user interface. The project integrates with various APIs for data retrieval and manipulation, providing a seamless and dynamic user experience.",

    projectGithub: "https://github.com/NozimjonShukrullayev/uzloyal.git",
    projectWebsite: "https://www.uzloyal.uz/",
  },
  {
    projectPhoto: RogfreeImage,
    projectName: "Dezinfeksiyatashkent",
    projectDesc:
      "The app's styling is managed using Sass, which allows for modular, maintainable, and extensible CSS. It provides a consistent and attractive user interface. The site is integrated with the Telegram bot, which sends notifications directly to service providers. This ensures real-time communication and prompt service.",
    projectGithub: "https://github.com/Pheonix999777/Dizenfeksiya.git",
    projectWebsite: "https://www.dezinfeksiyatashkent.uz/",
  },
  {
    projectPhoto: NewsletterImage,
    projectName: "Ataev Bahodir Build",
    projectDesc:
      "The app's styling is managed using Sass, which allows for modular, maintainable, and extensible CSS. It provides a consistent and attractive user interface. The site is integrated with the Telegram bot, which sends notifications directly to service providers. This ensures real-time communication and prompt service.",
    projectGithub: "https://github.com/Pheonix999777/Building.git",
    projectWebsite: "https://www.ataevbahodirbuild.uz",
  },
  {
    projectPhoto: bnpfabricImage,
    projectName: "bnpfabric",
    projectDesc:
      "Using Next.js, the site benefits from server-side rendering, improved performance, and search engine optimization (SEO). React Query is used to retrieve, cache and sync data with the server. This ensures that the application is responsive and works with data efficiently.",

    projectGithub: "",
    projectWebsite: "https://www.bnpfabric.uz/",
  },
  {
    projectPhoto: Sfood,
    projectName: "sfood",
    projectDesc:
      "Using Redux with React provides a scalable solution for state management, especially useful for large applications or applications with complex state interactions. This promotes a single source of truth for the state of your application and enables better maintenance and testing.",
    projectGithub: "",
    projectWebsite: "https://sfood-2022.netlify.app/",
  },
  {
    projectPhoto: HomeKit,
    projectName: "HomeKit",
    projectDesc:
      "Improved ability to create responsive and intuitive user interfaces that provide real-time feedback and improve user experience.  Proficient in integrating APIs into Next.js applications to efficiently handle asynchronous operations.",

    projectGithub: "",
    projectWebsite: "https://www.homekit.uz/",
  },
  {
    projectPhoto: beeto,
    projectName: "beeto",
    projectDesc:
      "Using Redux with React provides a scalable solution for state management, especially useful for large applications or applications with complex state interactions. This promotes a single source of truth for the state of your application and enables better maintenance and testing.",
    projectGithub: "",
    projectWebsite: "https://beeto.in1.uz/",
  },
  {
    projectPhoto: propartnyor,
    projectName: "propartnyor",
    projectDesc:
      " Using Redux with React provides a scalable solution for state management, especially useful for large applications or applications with complex state interactions. This promotes a single source of truth for the state of your application and enables better maintenance and testing.",
    projectGithub: "",
    projectWebsite: "https://propartnyor.uz/",
  },
  {
    projectPhoto: Honor,
    projectName: "Honor",
    projectDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, fugiat iste.",
    projectGithub: "",
    projectWebsite: "https://honor-furniture.uz/",
  },
];

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        {projectData.map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.projectPhoto}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            projectGithub={project.projectGithub}
            projectWebsite={project.projectWebsite}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
