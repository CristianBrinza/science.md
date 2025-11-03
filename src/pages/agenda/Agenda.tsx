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
        <div className={styles.agenda_title}>Agenda</div>

        <div className={styles.agenda_blocks}>
          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>09:30</div>
            <div className={styles.agenda_text}>
              <b> Înregistrarea participanților</b>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>10:00</div>
            <div className={styles.agenda_text}>
              <span>
                <b>Cuvinte de salutare</b> <br />
                POPA Sergiu,<i> dr., conf. univ., Decan FȘASM, UTM</i>
              </span>
            </div>
          </div>

          <div className={styles.agenda_title_2}>Prezentări</div>

          <div className={styles.agenda_blocks_bg}>
            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:05</div>
              <div className={styles.agenda_text}>
                <span>
                  <b> Politici de dezvoltare a apiculturii în RM</b> <br />
                  ROȘCA Valentin,{' '}
                  <i>Șef Direcție politici în sectorul zootehnic,</i> <br />
                  <i>Ministerul Agriculturii și Industriei Alimentare</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:20</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>
                    Rolul asocierii apicultorilor în dezvoltarea bazei melifere
                  </b>{' '}
                  <br />
                  MAXIM Ion, <i>Director executiv ANARM</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:30</div>
              <div className={styles.agenda_text}>
                <span>
                  <b> Starea actuală a bazei melifere în RM</b> <br />
                  MARDARI Tatiana, <i>dr., conf. univ., FȘASM, UTM</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>10:45</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>
                    Substanțe nutritive necesare pentru sporirea vitalității și
                    productivității albinelor
                  </b>
                  <br />
                  CAISÎN Larisa,<i> dr. hab., prof. univ., FȘASM, UTM</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:00</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>Principii de organizare a conveierului melifer</b> <br />
                  DRAGOMAN Iurii, <i>doctorand, FȘASM, UTM</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:30</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>
                    Specii de plante melifere cu utilități aromatice și
                    medicinale
                  </b>{' '}
                  <br />
                  MELNIC Victor,{' '}
                  <i>dr., conf. univ., USM, președinte AO „AROMEDA”</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>11:45</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>
                    Plantări forestiere cu valoare adăugată sporită. Conveierul
                    melifer.
                  </b>{' '}
                  <br />
                  SAINSUS Alexandru V., <i> platforma ARBORETUM.LIVE</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:00</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>
                    {' '}
                    Aspecte ale calității mierii în dependență de zona
                    geografică a RM
                  </b>{' '}
                  <br />
                  CATARAGA Ivan, <i>doctor în științe agricole, apicultor</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:15</div>
              <div className={styles.agenda_text}>
                <span>
                  <b>Valorificarea eficientă a bazei melifere existente</b>{' '}
                  <br />
                  SACARA Petru,{' '}
                  <i>președinte AO „MOLDAPIS”, apicultor, crescător de mătci</i>
                </span>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:30</div>
              <div className={styles.agenda_text}>
                <div>
                  <b> Culesul natural vs. hrănirea artificială</b> <br />
                  MIRON Vladimir, <i>apicultor, APICOLA MIRON</i>
                </div>
              </div>
            </div>

            <div className={styles.agenda_block}>
              <div className={styles.agenda_hour}>12:45</div>
              <div className={styles.agenda_text}>
                <div>
                  <b>
                    {' '}
                    Influența bazei melifere asupra competitivității produselor
                    apicole
                  </b>{' '}
                  <br />
                  ZBANCĂ Andrei,<i> dr., conf. univ., FIEB, UTM</i>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>13:00</div>
            <div className={styles.agenda_text}>
              <b> Coffee break</b>
            </div>
          </div>

          <div className={styles.agenda_block}>
            <div className={styles.agenda_hour}>14:00</div>
            <div className={styles.agenda_text}>
              <b> Discuții</b>
            </div>
          </div>
        </div>
      </div>
      <Footer disclaimer={true} />
    </>
  );
}
