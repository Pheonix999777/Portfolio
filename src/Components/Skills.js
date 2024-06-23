import React from "react";
import { FaReact, FaGithub, FaSass, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiVercel,
  SiMobx,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <SiMobx />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <SiNextdotjs />,
    Github: <FaGithub />,
    Figma: <SiRedux />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Sass: <FaSass />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
