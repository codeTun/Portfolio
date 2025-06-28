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
      flag: (
        <div className="relative">
          <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md shadow-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">FR</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-md"></div>
        </div>
      ),
      filename: '/iheb_elazheri_cv_fr.pdf'
    },
    {
      code: 'en',
      label: t('downloadResume.english'),
      flag: (
        <div className="relative">
          <div className="w-8 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-md shadow-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">US</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-md"></div>
        </div>
      ),
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
        className="px-6 py-1 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 text-color-black relative overflow-hidden group"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <span className="flex items-center gap-2 relative z-10">
          <div className="relative">
            <span className="text-base">📄</span>
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
          </div>
          <span className="font-semibold text-sm">{t("navbar.cv")}</span>
          <svg 
            className={`w-4 h-4 transition-all duration-500 ${isOpen ? 'rotate-180' : ''} group-hover:scale-110`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/50 min-w-[280px] z-50 animate-slideDown">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-cyan-600/10 rounded-xl blur-xl"></div>
          
          {/* Header */}
          <div className="relative p-4 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {t('downloadResume.selectLanguage')}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {t('downloadResume.chooseVersion')}
                </p>
              </div>
            </div>
          </div>

          {/* Language Options */}
          <div className="relative p-2">
            {languageOptions.map((option, index) => (
              <button
                key={option.code}
                onClick={() => handleDownload(option)}
                disabled={isDownloading}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-gray-700/50 dark:hover:to-gray-600/50 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed mb-2 last:mb-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Flag */}
                <div className="relative z-10">
                  {option.flag}
                </div>
                
                {/* Content */}
                <div className="flex-1 text-left relative z-10">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {option.label}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t('downloadResume.fileFormat')}
                  </div>
                </div>
                
                {/* Download Icon or Loading */}
                <div className="flex items-center relative z-10">
                  {isDownloading === option.code ? (
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-4 h-4 border-2 border-cyan-200 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-4 h-4 border-2 border-transparent border-t-cyan-600 rounded-full animate-spin"></div>
                      </div>
                      <span className="text-xs text-cyan-600 font-medium">
                        {t('downloadResume.downloading')}
                      </span>
                    </div>
                  ) : (
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                      <svg 
                        className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
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
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DownloadResumeButton;