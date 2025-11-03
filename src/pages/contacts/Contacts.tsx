import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Contacts.module.css';
import SEO from '../../components/SEO.tsx';

export default function Contacts() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.contacts.title'),
    description: t('pages.contacts.description'),
    keywords: t('pages.contacts.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />

      <div className={styles.contacts}>
        <div className={styles.contacts_title_1}>
          {t('pages.contacts.heading')}
        </div>
        <div className={styles.contacts_text_1}>
          {t('pages.contacts.text')}
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
