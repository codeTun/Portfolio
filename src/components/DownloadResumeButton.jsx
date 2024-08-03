import { Button } from "flowbite-react";

const DownloadResumeButton = () => {
  const resumeLink = "/elazheri_iheb_resume.pdf";

  return (
    <div className="flex items-center justify-center">
      <a href={resumeLink} download="Elazheri Iheb CV.pdf">
        <Button
          gradientDuoTone="cyanToBlue"
          className="px-6 py-1 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 text-color-black "
        >
        Download CV
        </Button>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
