import SEO from './../../components/SEO.tsx';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import Button from '../../components/Button.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
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

  const targetDate = new Date('2025-11-23T10:00:00+02:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO {...seo} />
      <Navbar />
      <div className={styles.home}>
        <div className={styles.home_inside}>
          <div className={styles.home_inside_left}>
            <div className={styles.home_inside_left_pretitle}>
              {t('home.hero.pretitle')}
            </div>
            <div className={styles.home_inside_left_title}>
              {t('home.hero.titleLine1')}
              <br />
              {t('home.hero.titleLine2')}
            </div>
            <div className={styles.home_inside_left_subtitle}>
              <span>
                {t('home.hero.subtitlePart1')} {t('home.hero.subtitlePart2')}
                {t('home.hero.subtitlePart3')}{' '}
                <b>{t('home.hero.subtitleHighlight')}</b>
                {t('home.hero.subtitlePart4')}
              </span>
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
                {t('home.hero.buttons.about')}
              </Button>
              <Button
                to="/agenda"
                color={'var(--theme_secondary_color_blue)'}
                hover_bgcolor={'var(--theme_secondary_color_yellow)'}
                hover_border={'var(--theme_secondary_color_yellow)'}
              >
                {t('home.hero.buttons.agenda')}
              </Button>
            </div>
          </div>
          <img
            className={styles.home_hero_img}
            alt={t('home.hero.imageAlt')}
            src="/images/home_hero_1.webp"
          />
        </div>
      </div>

      <Slider {...settings} className={styles.partners}>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt={t('home.partners.imageAlt')}
            src="/images/p1.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt={t('home.partners.imageAlt')}
            src="/images/p2.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt={t('home.partners.imageAlt')}
            src="/images/p3.webp"
          />
        </div>
        <div className={styles.partners_block}>
          <img
            className={styles.partners_img}
            alt={t('home.partners.imageAlt')}
            src="/images/p4.webp"
          />
        </div>
      </Slider>

      <div className={styles.home_block_2}>
        <div className={styles.home_block_2_title_1}>
          Pânaă la eveniment au rămas:
        </div>

        <div className={styles.cooldown}>
          <div className={styles.cooldown_block}>
            <div className={styles.cooldown_block_top}>{timeLeft.days}</div>
            <div className={styles.cooldown_block_bottom}>zile</div>
          </div>
          <div className={styles.cooldown_block}>
            <div className={styles.cooldown_block_top}>{timeLeft.hours}</div>
            <div className={styles.cooldown_block_bottom}>ore</div>
          </div>
          <div className={styles.cooldown_block}>
            <div className={styles.cooldown_block_top}>{timeLeft.minutes}</div>
            <div className={styles.cooldown_block_bottom}>minute</div>
          </div>
          <div className={styles.cooldown_block}>
            <div className={styles.cooldown_block_top}>{timeLeft.seconds}</div>
            <div className={styles.cooldown_block_bottom}>secunde</div>
          </div>
        </div>
      </div>
      <div className={styles.home_block_2}>
        <div className={styles.home_block_2_title_1}>
          {t('home.projectSection.title')}
        </div>
        <div className={styles.home_block_2_text_1}>
          {t('home.projectSection.textPart1')}
          <br /> <br />
          {t('home.projectSection.textPart2')}{' '}
          <span>
            <b>{t('home.projectSection.textBold')}</b>
            {t('home.projectSection.textPart3')}
          </span>
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
            {t('home.projectSection.buttons.contacts')}
          </Button>
          <Button
            to="/agenda"
            color={'var(--theme_secondary_color_blue)'}
            hover_bgcolor={'var(--theme_secondary_color_yellow)'}
            hover_border={'var(--theme_secondary_color_yellow)'}
          >
            {t('home.projectSection.buttons.agenda')}
          </Button>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.about_left}>
          <div className={styles.about_left_title}>
            {t('home.organizing.title')}
          </div>
          <div className={styles.about_list}>
            <span>
              <b>{t('home.organizing.members.dragoman.name')}</b>,{' '}
              {t('home.organizing.members.dragoman.role')}
            </span>
            <span>
              <b>{t('home.organizing.members.bivol.name')}</b>,{' '}
              {t('home.organizing.members.bivol.role')}
            </span>
            <span>
              <b>{t('home.organizing.members.cibotaru.name')}</b>,{' '}
              {t('home.organizing.members.cibotaru.role')}
            </span>
            <span>
              <b>{t('home.organizing.members.petcu.name')}</b>,{' '}
              {t('home.organizing.members.petcu.role')}
            </span>
            <span>
              <b>{t('home.organizing.members.brinza.name')}</b>,{' '}
              {t('home.organizing.members.brinza.role')}
            </span>
            <span>
              <b>{t('home.organizing.members.rusu.name')}</b>,{' '}
              {t('home.organizing.members.rusu.role')}
            </span>
          </div>
        </div>

        <div className={styles.about_left}>
          <div className={styles.about_left_title}>
            {t('home.scientific.title')}
          </div>
          <div className={styles.about_list}>
            <span>
              <b>{t('home.scientific.members.eremia.name')}</b>,{' '}
              {t('home.scientific.members.eremia.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.caisin.name')}</b>,{' '}
              {t('home.scientific.members.caisin.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.mardari.name')}</b>,{' '}
              {t('home.scientific.members.mardari.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.melnic.name')}</b>,{' '}
              {t('home.scientific.members.melnic.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.cibotaru.name')}</b>,{' '}
              {t('home.scientific.members.cibotaru.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.zagareanu.name')}</b>,{' '}
              {t('home.scientific.members.zagareanu.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.cataraga.name')}</b>,{' '}
              {t('home.scientific.members.cataraga.role')}
            </span>
            <span>
              <b>{t('home.scientific.members.dragoman.name')}</b>,{' '}
              {t('home.scientific.members.dragoman.role')}
            </span>
          </div>
        </div>
      </div>

      <Footer disclaimer={true} />
    </>
  );
}
