import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './About.module.css';
import SEO from '../../components/SEO.tsx';

export default function About() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.about.title'),
    description: t('pages.about.description'),
    keywords: t('pages.about.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />

      <div className={styles.about}>
        <div className={styles.about_title_1}>{t('pages.about.heading')}</div>
        <div className={styles.about_text_1}>
          {t('pages.about.textPart1')}
          <br /> <br />
          {t('pages.about.textPart2')}{' '}
          <b>{t('pages.about.textBold')}</b>
          {t('pages.about.textPart3')}
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
