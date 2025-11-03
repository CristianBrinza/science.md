import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  disclaimer?: boolean;
}

const Footer: React.FC<FooterProps> = (
  {
    // disclaimer
  }
) => {
  const FooterStyle: React.CSSProperties = {};

  // const { t } = useTranslation();

  return (
    <div style={FooterStyle} className={styles.footer}>
      <div className={styles.footer_inside}>
        <div className={styles.footer_inside_block}>
          <div className={styles.footer_inside_block_title}>Contacte</div>
        </div>
      </div>
      <div className={styles.footer_copyright}>Copyright © 2025 | utm.md</div>
    </div>
  );
};

export default Footer;
