import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <nav className={styles.containerMenu}>
      <ul>
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
    </nav>
  );
}

export default NavMenu;
