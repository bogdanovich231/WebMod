import { Link } from 'react-router-dom';
import iconLogo from '../../assets/logo.svg';
import styles from './Logo.module.css';

interface ILogo {
  direction?: 'row' | 'column';
  align?: 'center';
}
function Logo({ direction, align }: ILogo) {
  return (
    <Link to={'/'} className={styles.logo} style={{ flexDirection: direction }}>
      <img src={iconLogo} alt="WebModTech" />
      <div className={styles.logoTitle} style={{ alignItems: align }}>
        <h4>Tatsiana Kulinkovich</h4>
        <p>Software engineer</p>
      </div>
    </Link>
  );
}

export default Logo;
