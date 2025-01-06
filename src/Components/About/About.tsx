import styles from './About.module.css';
import LinkedinLink from '../MediaLinks/LinkedinLink';
import TelegramLink from '../MediaLinks/TelegramLink';
import { useGetAboutQuery } from '../../store/api/api';
import { extractContent } from '../../utils/ExtractContent/ExtractContent';
import Loader from '../Loader/Loader';
import { Id } from '../../utils/Intefrace/SlugInterface';

function About({ id }: Id) {
  const { data, isLoading } = useGetAboutQuery({});

  const contentData = Array.isArray(data) ? data[0] : data;

  if (!contentData || !contentData.content || !contentData.content.rendered) {
    return <div>No content available</div>;
  }
  if (isLoading) return <Loader />;
  const { heading, headingH3, imgSrc } = extractContent(contentData.content.rendered);

  return (
    <div id={id} className={styles.about}>
      {heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} />}
      <div className={styles.containerAbout}>
        <img src={imgSrc} alt="Web studio" />
        <div className={styles.aboutTitle}>
          {headingH3 && <p dangerouslySetInnerHTML={{ __html: headingH3 }} />}
          <div className={styles.wrapperLinks}>
            <LinkedinLink />
            <TelegramLink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
