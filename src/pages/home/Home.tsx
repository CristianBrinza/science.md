import SEO from './../../components/SEO.tsx';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import Button from '../../components/Button.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
export default function Home() {
  const { t } = useTranslation();
  const seo = {
    title: t('pages.home.title'),
    description: t('pages.home.description'),
    keywords: t('pages.home.keywords'),
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <div className={styles.home}>
        <div className={styles.home_inside}>
          <div className={styles.home_inside_left}>
            <div className={styles.home_inside_left_pretitle}>
              Seminar științifico-practic
            </div>
            <div className={styles.home_inside_left_title}>
              Potențialul melifer al republicii moldova: știință și practică în
              apicultură
            </div>
            <div className={styles.home_inside_left_subtitle}>
              Evenimentul este organizat în cadrul proiectului de doctorat
              „Aspecte tehnologice de întocmire a conveierului melifer în
              condițiile Republicii Moldova”, specialitatea 421.02 Alimentația
              animalelor și tehnologia furajelor.
            </div>
            <div className={styles.home_inside_left_btns}>
              <Button
                to="/about"
                color={'#fff'}
                bgcolor={'var(--theme_secondary_color_blue)'}
                border={'var(--theme_secondary_color_blue)'}
                hover_bgcolor={'var(--theme_secondary_color_yellow)'}
                hover_border={'var(--theme_secondary_color_yellow)'}
              >
                Despre eveniment
              </Button>
              <Button
                to="/agenda"
                color={'var(--theme_secondary_color_blue)'}
                hover_bgcolor={'var(--theme_secondary_color_yellow)'}
                hover_border={'var(--theme_secondary_color_yellow)'}
              >
                Agenda
              </Button>
            </div>
          </div>
          <img
            className={styles.home_hero_img}
            alt="Home"
            src="/images/home_hero_1.webp"
          />
        </div>
      </div>

      <Slider {...settings} className={styles.partners}>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt="Partner"
            src="/images/p1.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt="Partner"
            src="/images/p2.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt="Partner"
            src="/images/p3.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt="Partner"
            src="/images/p4.webp"
          />
        </div>
      </Slider>

      <div className={styles.home_block_2}>
        <div className={styles.home_block_2_title_1}>Despre Proiect</div>
        <div className={styles.home_block_2_text_1}>
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
        <div className={styles.home_block_2_btns}>
          <Button
            to="/contacte"
            color={'#fff'}
            bgcolor={'var(--theme_secondary_color_blue)'}
            border={'var(--theme_secondary_color_blue)'}
            hover_bgcolor={'var(--theme_secondary_color_yellow)'}
            hover_border={'var(--theme_secondary_color_yellow)'}
          >
            Contacte
          </Button>
          <Button
            to="/agenda"
            color={'var(--theme_secondary_color_blue)'}
            hover_bgcolor={'var(--theme_secondary_color_yellow)'}
            hover_border={'var(--theme_secondary_color_yellow)'}
          >
            Agenda
          </Button>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.about_left}>
          <div className={styles.about_left_title}>COMITETUL ORGANIZATORIC</div>
          <div className={styles.about_list}>
            <span>
              <b>DRAGOMAN Iurii</b>, doctorand, UTM, FȘASM
            </span>
            <span>
              <b>BIVOL Ludmila</b>, dr., lector univ., UTM, FȘASM
            </span>
            <span>
              <b>CIBOTARU Elena</b>, dr., conf. univ., UTM, FȘASM
            </span>
            <span>
              <b>PETCU Iana</b>, doctorandă, UTM, FȘASM
            </span>
            <span>
              <b>BRÎNZA Cristian</b>, masterand, UTM, FIEB
            </span>
            <span>
              <b>RUSU Ion</b>, masterand, UTM, FIEB
            </span>
          </div>
        </div>

        <div className={styles.about_left}>
          <div className={styles.about_left_title}>COMITETUL ȘTIINȚIFIC</div>
          <div className={styles.about_list}>
            <span>
              <b>EREMIA Nicolae</b>, dr. hab., prof. univ., UTM, FȘASM
            </span>
            <span>
              <b>CAISÎN Larisa</b>, dr. hab., prof. univ., UTM, FȘASM
            </span>
            <span>
              <b>MARDARI Tatiana</b>, dr., conf. univ., UTM, FȘASM
            </span>
            <span>
              <b>MELNIC Victor</b>, dr., conf. univ., USM, președinte AO
              „AROMEDA”
            </span>
            <span>
              <b>CIBOTARU Elena</b>, dr., conf. univ., UTM, FȘASM
            </span>
            <span>
              <b>ZAGAREANU Andrei</b>, dr., președinte ANARM
            </span>
            <span>
              <b>CATARAGA Ivan</b>, dr., apicultor
            </span>
            <span>
              <b>DRAGOMAN Iurii</b>, doctorand, UTM, FȘASM
            </span>
          </div>
        </div>
      </div>

      <Footer disclaimer={true} />
    </>
  );
}
