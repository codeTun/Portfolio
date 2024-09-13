import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Footer from "../../../components/Footer";
import { useTranslation } from "react-i18next";

/**
 * Represents the ProjectDetails page component.
 * Displays details of a specific project.
 *
 * @component
 */

const ProjectDetails = () => {
  // Get the current location using React Router's useLocation hook
  const [deployed, setDeployed] = useState(false);
  const [project, setProject] = useState(null);
  const location = useLocation();
  const { t } = useTranslation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Get the project title from the route parameters
  const { projectTitle } = useParams();

  // Find the project in the translations using the title
  useEffect(() => {
    const projects = t("projects.project-details", { returnObjects: true });
    const foundProject = projects.find(
      (project) => project.title.toLowerCase() === projectTitle.toLowerCase()
    );
    setProject(foundProject);
  }, [projectTitle, t]);

  // Check if the project is deployed
  useEffect(() => {
    if (project) {
      console.log("Project object:", project);
      if (project.deployed && project.deployed.trim() !== "") {
        setDeployed(true);
      } else {
        setDeployed(false);
      }
      console.log("Deployed state:", deployed);
    }
  }, [project]);

  // If the project is not found, display the PageNotFound component
  if (!project) {
    return <PageNotFound />;
  }

  return (
    <>
      <main className="container portfolio">
        {/* Display the page header with project title and description */}
        <PageHeader title={project.title} description={project.description} />
        <div className="projectDetails bg-transparent">
          <div className="row">
            <div className="col-12 col-xl-4 projectImage">
              {/* Display the project image */}
              <Image src={project.image2} alt={project.title} opacity="0.5" />
            </div>
            <div className="col-12 col-xl-8 projectBodyContainer">
              <div className="tech">
                {/* Display project technologies with animation */}
                {project.technologies.map((technology, i) => (
                  <motion.span
                    key={i}
                    className="technology"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    {technology + " "}
                  </motion.span>
                ))}
              </div>

              <div className="projectBody">
                {/* Display project body paragraphs with animation */}
                {project.body.split("\n").map((paragraph, i) => (
                  <motion.p
                    className="paragraph"
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Display buttons with animation */}
              <motion.div
                style={{ display: "flex", gap: "10px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: project.body.split("\n").length * 0.3,
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button name={t("projects.view-code")} />
                </a>
                <div className="relative group">
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      name={t("projects.view-site")}
                      disabled={!deployed}
                    />
                  </a>
                  {!deployed && (
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-black text-white text-center text-xs rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Sorry, the deployment is not yet available!
                    </span>
                  )}
                </div>
                <Link to="/portfolio">
                  <Button
                    name={t("projects.go-back")}
                    color="var(--hl2-color)"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
