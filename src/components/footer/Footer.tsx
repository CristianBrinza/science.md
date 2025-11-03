import React from 'react';
import styles from './Footer.module.css';


interface FooterProps {
  disclaimer?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  // disclaimer
}) => {
  const FooterStyle: React.CSSProperties = {};

  // const { t } = useTranslation();



  return (
    <div style={FooterStyle} className={styles.footer}>
     footer
    </div>
  );
};

export default Footer;
