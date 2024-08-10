import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * Represents a page header with title and description.
 *
 * @component
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 */

const PageHeader = ({ title, description }) => {
  const { t } = useTranslation();
  return (

  <>
    {/* Page description */}
    <motion.p
      className="pageDescription"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {t("projects.header")}
    </motion.p>
    {/* Page title */}
    <motion.h3
      className="pageTitle"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {t("projects.title")}
    </motion.h3>
  </>
  );
};

export default PageHeader;
