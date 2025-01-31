import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({
  projectPhoto,
  projectName,
  projectDesc,
  projectGithub,
  projectWebsite,
}) => {
  return (
    <div className="projectBox">
      <img
        className="projectPhoto"
        src={projectPhoto}
        alt={`${projectName} display`}
      />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{projectDesc}</p>
        <br />
        {projectGithub && (
          <a href={projectGithub} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}
        {projectWebsite && (
          <a href={projectWebsite} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
