import styles from './Header.module.css';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../Logo/Logo';
import { useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setScrolled } from '../../store/slices/scroll.slice';
import { RootState } from '../../store/store';

function Header() {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state: RootState) => state.scroll.isScrolled);
  const location = useLocation();
  const lastHash = useRef('');

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    dispatch(setScrolled(scrollTop > 100));
  }, [dispatch]);

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    const scrollToElement = () => {
      const element = document.getElementById(lastHash.current);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }
    };

    requestAnimationFrame(scrollToElement);
  }, [location]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`${styles.header} ${isScrolled ? styles.sticky : ''}`}>
      <div className={styles.containerHeader}>
        <Logo />
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
