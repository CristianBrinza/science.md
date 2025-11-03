import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './About.module.css';
import SEO from '../../components/SEO.tsx';
// import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.tsx";

export default function About() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.about.title'),
    description: t('pages.about.description'),
    keywords: t('pages.about.keywords'),
  };

  // const breadcrumbItems = [{ label: t('notfound.breadcrumb.title') }];

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      {/*<Breadcrumb items={breadcrumbItems}/>*/}
      <div className={styles.about}>
        <div className={styles.about_title_1}>{t('about.heading')}</div>
        <div className={styles.about_text_1}>
          {t('about.textPart1')}
          <br /> <br />
          {t('about.textPart2')} <b>{t('about.textBold')}</b>
          {t('about.textPart3')}
        </div>

        <div className={styles.about_title_2}>Speakeri:</div>

        <div className={styles.speakers}>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s1.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>EREMIA Nicolae</div>
            <div className={styles.speaker_card_title}>
              dr. hab., prof. univ., UTM, FȘASM
            </div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>CAISÎN Larisa</div>
            <div className={styles.speaker_card_title}>
              dr. hab., prof. univ., UTM, FȘASM
            </div>
          </div>

          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>MARDARI Tatiana</div>
            <div className={styles.speaker_card_title}>
              dr., conf. univ., UTM, FȘASM
            </div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>MELNIC Victor</div>
            <div className={styles.speaker_card_title}>
              dr., conf. univ., USM, AO „AROMEDA”
            </div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>CIBOTARU Elena</div>
            <div className={styles.speaker_card_title}>
              dr., conf. univ., UTM, FȘASM
            </div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>ZAGAREANU Andrei</div>
            <div className={styles.speaker_card_title}>
              dr., președinte ANARM
            </div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>CATARAGA Ivan</div>
            <div className={styles.speaker_card_title}>dr., apicultor</div>
          </div>
          <div className={styles.speaker_card}>
            <img
              className={styles.speaker_card_img}
              src="/images/s0.webp"
              alt="Speaker"
            />
            <div className={styles.speaker_card_name}>DRAGOMAN Iurii</div>
            <div className={styles.speaker_card_title}>
              doctorand, UTM, FȘASM
            </div>
          </div>
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
