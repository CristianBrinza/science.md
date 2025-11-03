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
        <div className={styles.contacts_title_1}>{t('contacts.heading')}</div>
        <div className={styles.contacts_text_1}>{t('contacts.text')}</div>

        <div className={styles.contacts_text_2}>
          <b>Data:</b> 23 NOIEMBRIE 2025 <br />
          <b>Ora:</b> 10:00 – 17:00 <br />
          <b>Locatie:</b> Chișinău, str. Mircerști 48, aula 14-100
        </div>

        <iframe
          className={styles.contact_iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169.86798887193603!2d28.867870643734943!3d47.06205083037304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d202ca02209%3A0x412c20f1e56915e4!2sFaculty%20of%20Computers%2C%20Informatics%20and%20Microelectronics!5e0!3m2!1sen!2s!4v1744031555692!5m2!1sen!2s"
          width="800"
          height="300"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
