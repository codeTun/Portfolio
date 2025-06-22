import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const DownloadResumeButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(null);

  const languageOptions = [
    {
      code: 'fr',
      label: t('downloadResume.french'),
      flag: '🇫🇷',
      filename: '/iheb_elazheri_cv_fr.pdf'
    },
    {
      code: 'en',
      label: t('downloadResume.english'),
      flag: '🇺🇸',
      filename: '/iheb_elazheri_cv_en.pdf'
    }
  ];

  const handleDownload = async (option) => {
    setIsDownloading(option.code);
    
    // Create download link
    const link = document.createElement('a');
    link.href = option.filename;
    link.download = `Elazheri_Iheb_CV_${option.code.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset states
    setTimeout(() => {
      setIsDownloading(null);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center mr-20">
      {/* Main Download Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        gradientDuoTone="cyanToBlue"
        className="px-6 py-1 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 text-color-black relative"
      >
        <span className="flex items-center gap-2">
          📄 {t("navbar.cv")}
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 min-w-[280px] z-50 animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
              {t('downloadResume.selectLanguage')}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t('downloadResume.chooseVersion')}
            </p>
          </div>

          {/* Language Options */}
          <div className="p-2">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => handleDownload(option)}
                disabled={isDownloading}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-2xl">{option.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t('downloadResume.fileFormat')}
                  </div>
                </div>
                
                {/* Download Icon or Loading */}
                <div className="flex items-center">
                  {isDownloading === option.code ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-600"></div>
                      <span className="text-xs text-cyan-600 font-medium">
                        {t('downloadResume.downloading')}
                      </span>
                    </div>
                  ) : (
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DownloadResumeButton;