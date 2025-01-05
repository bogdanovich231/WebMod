import { useGetProjectInformationQuery } from '../../store/api/api';
import Loader from '../../Components/Loader/Loader';
import { extractContent, extractStackList } from '../../utils/ExtractContent/ExtractContent';
import styles from './SingleProject.module.css';
import { useParams } from 'react-router-dom';

function SingleProject() {
  const { slug } = useParams();
  const { data, isLoading } = useGetProjectInformationQuery({ slug });
  const contentData = Array.isArray(data) ? data[0] : data;

  if (!contentData || !contentData.content || !contentData.content.rendered) {
    return <Loader />;
  }
  if (isLoading) return <Loader />;

  const { heading, paragraph, imgSrc2 } = extractContent(contentData.content.rendered);

  const stackList = extractStackList(contentData.content.rendered);

  return (
    <div className={styles.containerProject}>
      <div className={styles.projectContent}>
        <div className={styles.projectDescription}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
        <div className={styles.projectStack}>
          <ul>
            {stackList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.projectImage}>
          <img src={imgSrc2} alt="Project WebModTech" />
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
