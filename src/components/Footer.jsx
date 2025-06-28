import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

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

  return (
    <motion.footer
      ref={ref}
      className="py-6 w-full"
      initial={{ y: "10vw", opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.a
          className="footer-link block text-center group"
          href="https://github.com/codeTun/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* GitHub Stats Row */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-3 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-1">
              <AiOutlineStar className="w-4 h-4" />
              {gitHubInfo.stars > 0 && <span className="text-sm font-medium">{gitHubInfo.stars}</span>}
            </div>
            <div className="flex items-center gap-1">
              <BiGitRepoForked className="w-4 h-4" />
              {gitHubInfo.forks > 0 && <span className="text-sm font-medium">{gitHubInfo.forks}</span>}
            </div>
            <span className="text-sm font-medium">- {t("footer.title")}</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-500 mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          >
            <span className="inline-block mr-1 text-cyan-600 dark:text-cyan-400">▷</span>
            {t("footer.description")} &copy; {currentYear}
          </motion.p>

          {/* Rights */}
          <motion.p 
            className="text-xs text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
          >
            {t("footer.rights")}
          </motion.p>
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;
