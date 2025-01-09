import { useEffect, useState } from 'react';
import styles from './MessageWindow.module.css';
import CustomButton from '../../../CustomButton/CustomButton';
import IconRobot from '../../../../assets/robot.svg';

export interface IModalWindowFormProps {
  closeModal: () => void;
}

function MessageWindow({ closeModal }: IModalWindowFormProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsActive(true), 0);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(closeModal, 500);
  };
  return (
    <div className={`${styles.modalOverlay} ${isActive ? styles.active : ''}`}>
      <div className={styles.modalWindow}>
        <div className={styles.modalWindowContent}>
          <img src={IconRobot} alt="Success" />
          <h3>Success</h3>
          <p>Your message has been successfully sent! I will contact you shortly.</p>
          <CustomButton onClick={handleClose} text={'Close'} background="#b801c6" />
        </div>
      </div>
    </div>
  );
}

export default MessageWindow;
