import styles from './ServicesSection.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StackSection from './StackSection/StackSection';
import { useIntersectionObserver } from '../../utils/UseIntersectionObserver/UseIntersectionObserver';

const services = [
  {
    title: 'Landing Page Development',
    description: 'Stunning single-page websites designed to maximize conversions.',
  },
  {
    title: 'Multi-Page Websites',
    description: 'Structured and functional websites for complex projects.',
  },
  {
    title: 'Telegram Bot Creation',
    description: 'Interactive and useful bots for your business.',
  },
  {
    title: 'WordPress Integration with REST API',
    description: 'Leveraging WordPress as a flexible platform for building modern web applications.',
  },
];

function ServicesSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const cleanupObserver = useIntersectionObserver(styles.containerServices, styles.visible);
    return () => {
      cleanupObserver();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const scrollProgress = scrollTop / (scrollHeight - clientHeight);
        setProgress(scrollProgress);
        const index = Math.floor(scrollProgress * 4);
        setActiveIndex(index);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.containerServices}>
      <h2>
        My <b className={styles.softText}>services</b>
      </h2>
      <div className={styles.wrapperServices}>
        <div className={styles.services}>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ height: `${Math.max(progress, 0.15) * 100}%` }} />
          </div>
          <div className={styles.wrapperContent} ref={contentRef}>
            <motion.div className={styles.content}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  className={`${styles.contentInformation} ${activeIndex === index ? styles.active : styles.inactive}`}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <StackSection />
      </div>
    </div>
  );
}

export default ServicesSection;
