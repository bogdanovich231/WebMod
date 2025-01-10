import { Link } from 'react-router-dom';
import iconLogo from '../../assets/logo.svg';
import styles from './Logo.module.css';

interface ILogo {
  direction?: 'row' | 'column';
  align?: 'center';
}
function Logo({ direction, align }: ILogo) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Link to={'/'} className={styles.logo} style={{ flexDirection: direction }}>
      <img src={iconLogo} alt="WebModTech" />
      <div className={styles.logoTitle} onClick={scrollToTop} style={{ alignItems: align }}>
        <h4>Tatsiana Kulinkovich</h4>
        <p>Software engineer</p>
      </div>
    </Link>
  );
}

export default Logo;
