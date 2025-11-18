import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../assets/icons/united-kingdom-flag-icon.svg';
import nlFlag from '../assets/icons/netherlands-flag-icon.svg';
import uaFlag from '../assets/icons/ukraine-flag-icon.svg';
import ruFlag from '../assets/icons/russia-flag-icon.svg';
import '../i18n';

const LanguageSelector = ({ onSelect, autoOpen = false }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(autoOpen);
  const dropdownRef = useRef(null);

  // visibleCount controls how many items are shown (for stagger)
  const [visibleCount, setVisibleCount] = useState(0);
  const staggerTimers = useRef([]);

  const flags = {
    en: { icon: enFlag, label: 'English' },
    nl: { icon: nlFlag, label: 'Nederlands' },
    ua: { icon: uaFlag, label: 'Українська' },
    ru: { icon: ruFlag, label: 'Русский' },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setOpen(false);
    if (onSelect) onSelect();
  };

  // click outside closes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // when `open` changes, start/clear stagger timers
  useEffect(() => {
    // clear any existing timers
    staggerTimers.current.forEach(id => clearTimeout(id));
    staggerTimers.current = [];

    const itemsCount = Object.keys(flags).length;

    if (open) {
      // reset visible count then reveal one-by-one
      setVisibleCount(0);
      for (let i = 0; i < itemsCount; i++) {
        // stagger delay: 60ms * i (adjust to taste)
        const id = setTimeout(() => {
          setVisibleCount((prev) => prev + 1);
        }, 60 * i + 20); // +20ms little initial delay
        staggerTimers.current.push(id);
      }
    } else {
      // close: immediately hide items
      setVisibleCount(0);
    }

    // cleanup on unmount
    return () => {
      staggerTimers.current.forEach(id => clearTimeout(id));
      staggerTimers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]); // run whenever open toggles

  const currentLang = i18n.language?.split("-")[0];
  const currentFlag = flags[currentLang]?.icon || flags.en.icon;

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* current flag */}
      <img
        className="language-current-flag"
        src={currentFlag}
        alt={currentLang}
        onClick={() => setOpen((s) => !s)}
        style={{ cursor: 'pointer' }}
      />

      {/* dropdown menu (always rendered so CSS transitions work reliably) */}
      <div className={`language-options ${open ? 'show' : ''}`} aria-hidden={!open}>
        {Object.entries(flags).map(([lng, { icon, label }], idx) => (
          <div
            className={`language-option ${idx < visibleCount ? 'visible' : ''}`}
            key={lng}
            onClick={() => changeLanguage(lng)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') changeLanguage(lng); }}
            aria-label={label}
          >
            <img className="language-flag" src={icon} alt={label} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
