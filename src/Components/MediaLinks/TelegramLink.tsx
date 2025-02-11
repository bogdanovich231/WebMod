import { Link } from 'react-router-dom';
import IconTg from '../../assets/telegram.svg';

function TelegramLink() {
  return (
    <Link to={'https://t.me/tanyabogdanovich'}>
      <img src={IconTg} alt="telegram" />
    </Link>
  );
}

export default TelegramLink;
