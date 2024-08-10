import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * Represents a page header with title and description.
 *
 * @component
 * @param {string} titleKey - The translation key for the title of the page.
 * @param {string} descriptionKey - The translation key for the description of the page.
 */

const PageHeader = ({ titleKey, descriptionKey }) => {
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
        {t(descriptionKey)}
      </motion.p>
      {/* Page title */}
      <motion.h3
        className="pageTitle"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {t(titleKey)}
      </motion.h3>
    </>
  );
};

export default PageHeader;
