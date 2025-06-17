import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import "../i18n"; // Ensure i18n is initialized

/**
 * Represents a list of project cards.
 *
 * This component maps over the projects data and generates
 * a ProjectCard component for each project.
 *
 * @component
 */

const ProjectList = () => {
  const { t } = useTranslation();
  const projectDetails = t("projects.project-details", { returnObjects: true });
  console.log("Number of projects loaded:", projectDetails.length);
  console.log("Project details:", projectDetails);

  return projectDetails.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      image={project.image}
      color={project.bgcolor}
    />
  ));
};

export default ProjectList;
