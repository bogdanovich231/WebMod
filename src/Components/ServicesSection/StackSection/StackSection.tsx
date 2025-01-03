import styles from './StackSection.module.css';
import IconReact from '../../../assets/stack/react.svg';
import IconGithub from '../../../assets/stack/github.svg';
import IconJest from '../../../assets/stack/jest.svg';
import IconNext from '../../../assets/stack/next.svg';
import IconRedux from '../../../assets/stack/redux.svg';
import IconTypescript from '../../../assets/stack/typescript.svg';
import IconWordpress from '../../../assets/stack/wordpress.png';
import IconCss from '../../../assets/stack/css.svg';
import IconJs from '../../../assets/stack/js.svg';

const icons = [IconReact, IconGithub, IconJest, IconNext, IconRedux, IconTypescript, IconWordpress, IconCss, IconJs];

function StackSection() {
  const chunkedIcons = [];
  for (let i = 0; i < icons.length; i += 3) {
    chunkedIcons.push(icons.slice(i, i + 3));
  }

  return (
    <div className={styles.containerStacks}>
      {chunkedIcons.map((chunk, index) => (
        <div key={index} className={styles.wrapperStacks}>
          {chunk.map((icon, subIndex) => (
            <div key={subIndex} className={styles.itemStack}>
              <img src={icon} alt={`Icon ${index * 3 + subIndex}`} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default StackSection;
