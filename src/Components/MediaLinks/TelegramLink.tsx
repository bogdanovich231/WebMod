import { Link } from 'react-router-dom';
import IconTg from '../../assets/telegram.svg';

function TelegramLink() {
  return (
    <Link to={'https://www.linkedin.com/in/tatsiana-kulinkovich-892410230/'}>
      <img src={IconTg} alt="telegram" />
    </Link>
  );
}

export default TelegramLink;
