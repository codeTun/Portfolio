import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";

const DownloadResumeButton = () => {
  const resumeLink = "/elazheri_iheb_resume.pdf";
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center mr-20">
      <a href={resumeLink} download="Elazheri Iheb CV.pdf">
        <Button
          gradientDuoTone="cyanToBlue"
          className="px-6 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 text-color-black "
        >
          {t("navbar.cv")}
        </Button>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
