import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "flag-icons/css/flag-icons.min.css";

const LanguageSelectorButton = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      flag: 'fi-gb',
      gradient: 'from-red-500 to-blue-600'
    },
    { 
      code: 'fr', 
      name: 'Français', 
      flag: 'fi-fr',
      gradient: 'from-blue-500 to-red-500'
    },
    { 
      code: 'ar', 
      name: 'Arabe', 
      flag: 'fi-tn',
      gradient: 'from-red-500 to-green-600'
    },
  ];

  const currentLang = languages.find(lang => lang.code === selectedLanguage);

  return (
    <div className="language-selector relative">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full px-3.5 py-1 mr-1 text-base text-cyan-600 rounded-md shadow-sm focus:outline-none sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105 relative overflow-hidden group"
        type="button"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <span className="flex items-center relative z-10">
          <span className={`fi ${currentLang.flag} mr-2 text-lg drop-shadow-sm`}></span>
          <span className="font-medium">{currentLang.name}</span>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} group-hover:scale-110`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-lg shadow-xl animate-slideDown">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-cyan-600/10 rounded-lg blur-lg"></div>
          
          <ul className="relative">
            {languages.map((lang, index) => (
              <li
                key={lang.code}
                className="cursor-pointer hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-gray-700/50 dark:hover:to-gray-600/50 px-3.5 py-2 transition-all duration-300 group relative overflow-hidden"
                onClick={() => changeLanguage(lang.code)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <span className={`fi ${lang.flag} mr-3 text-lg drop-shadow-sm`}></span>
                    {/* Flag glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors duration-300">
                    {lang.name}
                  </span>
                  
                  {/* Selection indicator */}
                  {lang.code === selectedLanguage && (
                    <div className="ml-auto flex items-center">
                      <svg className="w-4 h-4 ml-2 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default LanguageSelectorButton;