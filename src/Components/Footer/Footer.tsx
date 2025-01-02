import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';
import LinkedinLink from '../MediaLinks/LinkedinLink';
import TelegramLink from '../MediaLinks/TelegramLink';
import FooterMenu from './FooterMenu/FooterMenu';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <FooterMenu />
        <Logo />
        <div className={styles.footerContact}>
          <h4 className={styles.contactTitle}>Contacts:</h4>
          <Link to={'info@studio.com'}>
            <h4>info@webmodtech.com</h4>
          </Link>
          <div className={styles.footerLinks}>
            <LinkedinLink />
            <TelegramLink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;