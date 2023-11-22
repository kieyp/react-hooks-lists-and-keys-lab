import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        projects.map((project)=>{
      return(
        <div key={project.id}>
          <p>{project.name}</p>
          <p>{project.about}</p>
          <p>{project.technology}</p>

        </div>
      )

        })
      }</div>
    </div>
  );
}

export default ProjectList;
