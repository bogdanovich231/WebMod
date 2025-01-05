import { useNavigate } from 'react-router-dom';
import { Slug } from '../../../utils/Intefrace/SlugInterface';
import CustomButton from '../../CustomButton/CustomButton';
import styles from './CardProject.module.css';

interface ICardProject {
  backgroundImage: string;
  buttonColor: string;
  slug: Slug;
}

function CardProject({ backgroundImage, buttonColor, slug }: ICardProject) {
  const navigate = useNavigate();

  const handleRedirect = (slug: Slug) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <div className={styles.containerCard} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.cardButton}>
        <CustomButton text="About Project" background={buttonColor} onClick={() => handleRedirect(slug)} />
      </div>
    </div>
  );
}

export default CardProject;
