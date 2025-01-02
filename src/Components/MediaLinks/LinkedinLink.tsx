import { Link } from 'react-router-dom';
import IconIn from '../../assets/linkedin.svg';

function LinkedinLink() {
  return (
    <Link to={'https://www.linkedin.com/in/tatsiana-kulinkovich-892410230/'}>
      <img src={IconIn} alt="linkedin" />
    </Link>
  );
}

export default LinkedinLink;
