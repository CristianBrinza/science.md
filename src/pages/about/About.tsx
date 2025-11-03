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
        <div className={styles.about_title_1}>Despre Proiect</div>
        <div className={styles.about_text_1}>
          Seminar științifico-practic realizat in cadrul Universitatii tehnică a
          Moldovei, Facultatea științe agricole silvice și ale mediului,
          Departamentul resurse animaliere și siguranța alimentelor
          <br /> <br />
          Evenimentul este organizat în cadrul proiectului de doctorat{' '}
          <b>
            „Aspecte tehnologice de întocmire a conveierului melifer în
            condițiile Republicii Moldova”
          </b>
          , specialitatea 421.02 Alimentația animalelor și tehnologia furajelor.
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
