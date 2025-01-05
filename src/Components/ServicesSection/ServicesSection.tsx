import styles from './ServicesSection.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import StackSection from './StackSection/StackSection';

function ServicesSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

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
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  className={`${styles.contentInformation} ${activeIndex === index ? styles.active : styles.inactive}`}
                >
                  <h3>Landing Page Development</h3>
                  <p>Stunning single-page websites designed to maximize conversions.</p>
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
