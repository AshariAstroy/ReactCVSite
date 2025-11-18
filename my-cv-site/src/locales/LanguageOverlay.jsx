// src/locales/LanguageOverlay.js
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/icons/united-kingdom-flag-icon.svg';
import nlFlag from '../assets/icons/netherlands-flag-icon.svg';
import uaFlag from '../assets/icons/ukraine-flag-icon.svg';
import ruFlag from '../assets/icons/russia-flag-icon.svg';
import { FaAngleDoubleUp } from 'react-icons/fa';
import '../i18n';

const flags = {
  en: { icon: enFlag, label: 'English' },
  nl: { icon: nlFlag, label: 'Nederlands' },
  ua: { icon: uaFlag, label: 'Українська' },
  ru: { icon: ruFlag, label: 'Русский' },
};

const LanguageOverlay = () => {
  const { i18n } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowOverlay(false);
  };

const currentLang = i18n.language?.split("-")[0];
const currentFlag = flags[currentLang]?.icon || flags.en.icon;

  return (
    <>
      {/* Button to open language overlay (place this where you want the trigger) */}
      <div className="language-mobile-btn" onClick={() => setShowOverlay(true)}>
        <img
          className="language-current-flag"
          src={currentFlag}
          alt={currentLang}
        />
      </div>

      {/* Overlay always rendered but class controls visibility (better for transitions) */}
      <div className={`language-overlay ${showOverlay ? 'show-overlay' : ''}`} role="dialog" aria-modal="true">
        <span className="closebtn" onClick={() => setShowOverlay(false)}>
          <FaAngleDoubleUp />
        </span>

        <div className="language-options-mobile">
          {Object.entries(flags).map(([lng, { icon, label }]) => (
            <div
              className="language-option-mobile"
              key={lng}
              onClick={() => changeLanguage(lng)}
            >
              <img className="language-flag-mobile" src={icon} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageOverlay;