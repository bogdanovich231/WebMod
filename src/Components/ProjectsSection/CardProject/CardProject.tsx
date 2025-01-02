import CustomButton from '../../CustomButton/CustomButton';
import styles from './CardProject.module.css';
interface ICardProject {
  backgroundImage: string;
  buttonColor: string;
}
function CardProject({ backgroundImage, buttonColor }: ICardProject) {
  return (
    <div className={styles.containerCard} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.cardButton}>
        <CustomButton text="About Project" background={buttonColor} />
      </div>
    </div>
  );
}

export default CardProject;
