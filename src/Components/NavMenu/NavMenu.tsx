import { Link, useLocation } from 'react-router-dom';
import styles from './NavMenu.module.css';
import { useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { toggleMenu, closeMenu } from '../../store/slices/menu.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function NavMenu() {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state: RootState) => state.menu);
  const isScrolled = useSelector((state: RootState) => state.scroll.isScrolled);
  const location = useLocation();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
    if (!menuOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  };

  const handleCloseMenu = () => {
    dispatch(closeMenu());
    enableBodyScroll(document.body);
  };
  const getActiveClass = (path: string) => (location.pathname === path ? styles.active : '');
  return (
    <>
      <input
        type="checkbox"
        id="menu_checkbox"
        checked={menuOpen}
        onClick={handleToggleMenu}
        className={styles.menuCheckbox}
      />
      <label htmlFor="menu_checkbox" className={styles.hamburgerMenu}>
        <div></div>
        <div></div>
        <div></div>
      </label>

      <nav
        className={`${styles.containerMenu} ${menuOpen ? styles.showMenu : ''} ${isScrolled ? styles.stickyMenuToggle : ''}`}
      >
        <ul>
          <li>
            <Link to="/" onClick={handleCloseMenu} className={getActiveClass('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={handleCloseMenu} className={getActiveClass('/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" onClick={handleCloseMenu} className={getActiveClass('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="collaboration" onClick={handleCloseMenu} className={getActiveClass('/collaboration')}>
              Collaboration
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
