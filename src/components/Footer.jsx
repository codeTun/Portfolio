import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import "../i18n";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const currentYear = date.getFullYear();

  // State to hold GitHub information
  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // Fetch GitHub repository information
    fetch("#")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  // Variants for button animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      {/* GitHub repository link */}
      <a
        className="footer-link"
        href="https://github.com/codeTun/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - {t("footer.title")}
        </span>
        <p>
          <span>▷</span> {t("footer.description")} &copy; {currentYear}
        </p>
        <p>{t("footer.rights")}</p>
      </a>
    </footer>
  );
};

export default Footer;
