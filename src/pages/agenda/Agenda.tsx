import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Agenda.module.css';
import SEO from '../../components/SEO.tsx';

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

      <div className={styles.agenda}>
        <div className={styles.agenda_title}>{t('agenda.heading')}</div>

        <div className={styles.agenda_blocks}>
          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>09:30</div>
            <div className={styles.agenda_text}>
              <b>{t('agenda.items.registration.title')}</b>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>10:00</div>
            <div className={styles.agenda_text}>
              <span>
                <b>{t('agenda.items.salutation.title')}</b> <br />
                {t('agenda.items.salutation.speaker')},
                <i>{t('agenda.items.salutation.role')}</i>
              </span>
            </div>
          </div>

          <div className={styles.agenda_title_2}>
            {t('agenda.presentationsTitle')}
          </div>

          <div className={styles.agenda_blocks_bg}>
            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:05</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.policies.title')}</b> <br />
                  {t('agenda.items.policies.speaker')},{' '}
                  <i>{t('agenda.items.policies.roleLine1')}</i>
                  <br />
                  <i>{t('agenda.items.policies.roleLine2')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:20</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.association.title')}</b>
                  <br />
                  {t('agenda.items.association.speaker')},{' '}
                  <i>{t('agenda.items.association.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:30</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.currentState.title')}</b> <br />
                  {t('agenda.items.currentState.speaker')},{' '}
                  <i>{t('agenda.items.currentState.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:45</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.nutrition.title')}</b>
                  <br />
                  {t('agenda.items.nutrition.speaker')},
                  <i>{t('agenda.items.nutrition.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:00</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.principles.title')}</b> <br />
                  {t('agenda.items.principles.speaker')},{' '}
                  <i>{t('agenda.items.principles.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:30</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.melliferousPlants.title')}</b>
                  <br />
                  {t('agenda.items.melliferousPlants.speaker')},{' '}
                  <i>{t('agenda.items.melliferousPlants.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:45</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.forestPlantations.title')}</b>
                  <br />
                  {t('agenda.items.forestPlantations.speaker')},{' '}
                  <i>{t('agenda.items.forestPlantations.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:00</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.honeyQuality.title')}</b>
                  <br />
                  {t('agenda.items.honeyQuality.speaker')},{' '}
                  <i>{t('agenda.items.honeyQuality.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:15</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>{t('agenda.items.efficientUse.title')}</b>
                  <br />
                  {t('agenda.items.efficientUse.speaker')},{' '}
                  <i>{t('agenda.items.efficientUse.role')}</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:30</div>
              <div className={styles.agenda_text}>
                <div>
                  <b>{t('agenda.items.naturalHarvest.title')}</b> <br />
                  {t('agenda.items.naturalHarvest.speaker')},{' '}
                  <i>{t('agenda.items.naturalHarvest.role')}</i>
                </div>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:45</div>
              <div className={styles.agenda_text}>
                <div>
                  <b>{t('agenda.items.competitiveness.title')}</b>
                  <br />
                  {t('agenda.items.competitiveness.speaker')},{' '}
                  <i>{t('agenda.items.competitiveness.role')}</i>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>13:00</div>
            <div className={styles.agenda_text}>
              <b>{t('agenda.items.coffeeBreak.title')}</b>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>14:00</div>
            <div className={styles.agenda_text}>
              <b>{t('agenda.items.discussions.title')}</b>
            </div>
          </div>
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
