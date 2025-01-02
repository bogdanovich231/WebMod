import styles from './Header.module.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <NavMenu />
    </div>
  );
}

export default Header;
