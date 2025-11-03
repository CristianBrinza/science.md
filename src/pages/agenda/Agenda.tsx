import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Agenda.module.css';
import Button from '../../components/Button.tsx';
import SEO from '../../components/SEO';

export default function Agenda() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.agenda.title'),
    description: t('pages.agenda.description'),
    keywords: t('pages.agenda.keywords'),
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />

      <div className={styles.notfound}>
        <div className={styles.notfound_title}>
          {/*404  - Not Found*/}
          404.
        </div>

        <div className={`title_3 ${styles.notfound_subtitle}`}>
          {t('notfound.subtitle')}
        </div>
        <div className={styles.notfound_text}>{t('notfound.text')}</div>

        <Button
          to="/"
          color={'#fff'}
          bgcolor={'var(--theme_primary_color_blue_4)'}
          border={'var(--theme_primary_color_blue_4)'}
          hover_border={'var(--theme_primary_color_blue_2)'}
          hover_bgcolor={'var(--theme_primary_color_blue_2)'}
          hover_color={'var(--theme_primary_color_blue_4)'}
          icon={'arrow_right'}
        >
          {t('notfound.btn')}
        </Button>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
