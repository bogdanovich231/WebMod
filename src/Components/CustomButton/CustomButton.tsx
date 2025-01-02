import { Link } from 'react-router-dom';
import styles from './CustomButton.module.css';

export interface ICustomButton {
  link?: string | undefined;
  text: string;
  onClick?: any;
  background?: string;
}

function CustomButton({ link, text, onClick, background }: ICustomButton) {
  return link ? (
    <Link to={link} className={styles.customButtonLink}>
      <button
        style={{ backgroundColor: background }}
        onClick={onClick}
        className={styles.customButton}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      style={{ backgroundColor: background }}
      onClick={onClick}
      className={styles.customButton}
    >
      {text}
    </button>
  );
}

export default CustomButton;
