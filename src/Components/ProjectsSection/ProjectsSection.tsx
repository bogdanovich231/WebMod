import { useGetProjectsQuery } from '../../store/api/api';
import { extractContent } from '../../utils/ExtractContent/ExtractContent';
import Loader from '../Loader/Loader';
import CardProject from './CardProject/CardProject';
import styles from './ProjectsSection.module.css';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import './SwiperProjects.css';

function ProjectsSection({ id }) {
  const { data, isLoading } = useGetProjectsQuery({});

  if (isLoading) return <Loader />;

  if (!data || !Array.isArray(data)) {
    return <div>No projects available</div>;
  }

  return (
    <div id={id} className={styles.containerProjects}>
      <h2>
        My <b className={styles.softText}>successful</b> projects
      </h2>
      <p>
        Discover recent projects showcasing our skills and creativity. I take pride in each one, striving to ensure my
        work helps clients achieve their goals in the digital space.
      </p>
      <SwiperComponent
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1180: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          790: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="swiperProjects"
      >
        {data.map((item: any, index: number) => {
          const { imgSrc } = extractContent(item.content.rendered);
          const slug = item.slug;
          const buttonColor = index % 2 === 0 ? '#050306' : '#B308C0';

          return (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CardProject backgroundImage={imgSrc} buttonColor={buttonColor} slug={slug} />
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </div>
  );
}

export default ProjectsSection;
