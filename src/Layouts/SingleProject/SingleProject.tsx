import { useGetProjectInformationQuery } from '../../store/api/api';
import Loader from '../../Components/Loader/Loader';
import { extractContent, extractStackList } from '../../utils/ExtractContent/ExtractContent';
import styles from './SingleProject.module.css';
import { useParams } from 'react-router-dom';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useEffect } from 'react';
import { useIntersectionObserver } from '../../utils/UseIntersectionObserver/UseIntersectionObserver';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

function SingleProject() {
  const { slug } = useParams();
  const { data, isLoading } = useGetProjectInformationQuery({ slug });

  useEffect(() => {
    const cleanupObserver = useIntersectionObserver(styles.containerProject, styles.visible);
    return () => {
      cleanupObserver();
    };
  }, [data]);

  const contentData = Array.isArray(data) ? data[0] : data;

  if (!contentData || !contentData.content || !contentData.content.rendered) {
    return <Loader />;
  }
  if (isLoading) return <Loader />;

  const { heading, projectLink, paragraph, imgSrc2 } = extractContent(contentData.content.rendered);

  const stackList = extractStackList(contentData.content.rendered);

  return (
    <div className={styles.containerProject}>
      <ScrollToTop />
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
      </div>
      <div className={styles.projectImage}>
        <img src={imgSrc2} alt="Project WebModTech" />
      </div>
      <div className={styles.containerButton}>
        <CustomButton text="View Project" background="#B308C0" link={projectLink} />
      </div>
    </div>
  );
}

export default SingleProject;
