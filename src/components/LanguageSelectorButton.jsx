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
    { code: 'en', name: 'English', flag: 'fi-gb' },
    { code: 'fr', name: 'Français', flag: 'fi-fr' },
    { code: 'ar', name: 'Arabe', flag: 'fi-tn' },
  ];

  return (
    <div className="language-selector relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full px-3.5 py-1 mr-1 text-base text-cyan-600 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        type="button"
      >
        <span className={`fi ${languages.find(lang => lang.code === selectedLanguage).flag} mr-2`}></span>
        {languages.find(lang => lang.code === selectedLanguage).name}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-transparent border border-gray-300 rounded-md shadow-lg">
          {languages.map(lang => (
            <li
              key={lang.code}
              className="cursor-pointer hover:bg-blue-300 dark:hover:bg-gray-700 px-3.1 py-1"
              onClick={() => changeLanguage(lang.code)}
            >
              <span className={`fi ${lang.flag} mr-2`}></span>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelectorButton;