import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '../../context/LanguageContext.tsx';
import Icon from "../Icon.tsx";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { setLanguage } = useLanguage();
    const {  i18n } = useTranslation();
    const [isListLangPopupVisible, setIsListLangPopupVisible] = useState(false);
    const navigate = useNavigate();

    const toggleLangPopup = () => {
        setIsListLangPopupVisible(!isListLangPopupVisible);
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
           <div className={styles.navbar_inside_right}>
               <a href="/"><img className={styles.navbar_logo} alt="Logo" src="/images/logo_blue.webp"/></a>
           </div>

           <div className={styles.navbar_inside_right}>
               <div className={styles.navbar_inside_right_navbar}><a href="/about">Despre</a></div>
               <div className={styles.navbar_inside_right_navbar}><a href="/agenda">Agenda</a></div>
               <div className={styles.navbar_inside_right_navbar}><a href="/contacts">Contacte</a></div>

           </div>

           <div className={styles.navbar_inside_right_navbar_mob}  onClick={toggleLangPopup}>
               <div className={styles.navbar_inside_right_navbar_lang}>

                       {i18n.language === 'en' ? (
                           <Icon type="en" size="28px"/>
                       ) : i18n.language === 'ro' ? (
                           <Icon type="ro" size="28px"/>
                       ) : (
                           <Icon type="ru" size="28px"/>
                       )}

               </div>

               <div className={styles.navbar_inside_right_navbar_lang_choose}>
                   <div className={styles.navbar_inside_right_navbar_lang_choose_btn}>
                   <Icon type="ro" size="22px"/>
                       &nbsp;&nbsp; RO
                   </div>
                   <div className={styles.navbar_inside_right_navbar_lang_choose_btn}>
                        <Icon type="ru" size="22px"/>
                       &nbsp;&nbsp; RU
                   </div>
               </div>
           </div>
       </div>
       <div
           className={`${styles.navbar_bottom_menu_right_lang_btn} `}
           onClick={toggleLangPopup}
       >
           {i18n.language === 'en' ? (
               <Icon type="en" size="28px"/>
           ) : i18n.language === 'ro' ? (
               <Icon type="ro" size="28px"/>
           ) : (
               <Icon type="ru" size="28px"/>
           )}
       </div>
       <div
           className={`${styles.navbar_bottom_menu_right_lang} ${
               isListLangPopupVisible
                   ? styles.navbar_bottom_menu_right_lang_show
                   : ''
           }`}
       >
           <div
               className={styles.navbar_bottom_menu_right_lang_btn_select}
               onClick={() => handleChangeLanguage('ro')}
           >
               <Icon type="ro" size="22px"/>
               &nbsp;&nbsp;
               RO
           </div>
       </div>
   </div>
  );
};

export default Navbar;
