import iconLogo from '../../assets/logo.svg';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={iconLogo} alt="WebModTech" />
      <div className={styles.logoTitle}>
        <h4>Tatsiana Kulinkovich</h4>
        <p>Software engineer</p>
      </div>
    </div>
  );
}

export default Logo;
