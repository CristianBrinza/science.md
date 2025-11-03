import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../../context/LanguageContext.tsx';
import Icon from '../Icon.tsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { setLanguage } = useLanguage();
  const { i18n, t } = useTranslation();
  const [isListLangPopupVisible, setIsListLangPopupVisible] = useState(false);
  const navigate = useNavigate();

  const toggleLangPopup = () => {
    setIsListLangPopupVisible(!isListLangPopupVisible);
  };

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
    // setOverlayVisible(true);
  };
  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang); // setează global limba

    const pathParts = location.pathname.split('/').filter(Boolean);
    if (['en', 'ro', 'ru'].includes(pathParts[0])) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    const newPath = `/${pathParts.join('/')}/`.replace(/\/+$/, '/');
    navigate(newPath);
    setIsListLangPopupVisible(false);
    // localStorage.setItem('i18nextLng', lang);
  };
  return (
    <div className={`${styles.navbar} ${className}`}>
      <div className={styles.navbar_inside}>
        <div className={styles.navbar_logo_block}>
          <a href="/">
            <img
              className={styles.navbar_logo}
              alt={t('components.navbar.logoAlt')}
              src="/images/logo_blue.webp"
            />
          </a>
        </div>

        <div
          className={`${styles.navbar_inside_right} ${isMenuVisible ? styles.navbar_inside_right_show : ''}`}
        >
          <div className={styles.navbar_inside_right_navbar}>
            <a href="/about">{t('components.navbar.links.about')}</a>
          </div>
          <div className={styles.navbar_inside_right_navbar}>
            <a href="/agenda">{t('components.navbar.links.agenda')}</a>
          </div>
          <div className={styles.navbar_inside_right_navbar}>
            <a href="/contacts">{t('components.navbar.links.contacts')}</a>
          </div>
        </div>

        <div className={styles.navbar_inside_right_navbar_mob}>
          <div
            className={styles.navbar_inside_right_navbar_lang}
            onClick={toggleLangPopup}
          >
            {i18n.language === 'en' ? (
              <Icon type="en" size="28px" />
            ) : i18n.language === 'ro' ? (
              <Icon type="ro" size="28px" />
            ) : (
              <Icon type="ru" size="28px" />
            )}
          </div>
          <div
            className={styles.navbar_inside_right_navbar_mob_menu}
            onClick={toggleMenuVisibility}
          >
            <Icon type="menu" size="28px" />
          </div>

          <div
            className={`${styles.navbar_inside_right_navbar_lang_choose} ${
              isListLangPopupVisible
                ? styles.navbar_inside_right_navbar_lang_choose_show
                : ''
            }`}
          >
            <div
              className={styles.navbar_inside_right_navbar_lang_choose_btn}
              onClick={() => handleChangeLanguage('ro')}
            >
              <Icon type="ro" size="22px" />
              &nbsp;&nbsp; RO
            </div>
            <div
              className={styles.navbar_inside_right_navbar_lang_choose_btn}
              onClick={() => handleChangeLanguage('ru')}
            >
              <Icon type="ru" size="22px" />
              &nbsp;&nbsp; RU
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
