import { Link } from 'react-router-dom';
import styles from './FooterMenu.module.css';

function FooterMenu() {
  return (
    <>
      <ul className={styles.footerMenu}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About </Link>
        </li>
        <li>
          <Link to={'/projects'}>Projects</Link>
        </li>
        <li>
          <Link to={'/collaboration'}>Collaboration</Link>
        </li>
      </ul>
    </>
  );
}

export default FooterMenu;
