import { useState } from 'react';
import styles from './WelcomeSection.module.css';
import { motion } from 'framer-motion';
import IConStar1 from '../../assets/stars/star1.svg';
import IConStar2 from '../../assets/stars/star2.svg';
import IConStar3 from '../../assets/stars/star3.svg';
import IConStar4 from '../../assets/stars/star4.svg';
import IConStar5 from '../../assets/stars/star5.svg';

const CONSTELLATIONS = [
  { id: 1, src: IConStar1, x: 1600, y: 400 },
  { id: 2, src: IConStar2, x: 50, y: 600 },
  { id: 3, src: IConStar3, x: 1300, y: 50 },
  { id: 4, src: IConStar4, x: 300, y: 50 },
  { id: 5, src: IConStar5, x: 1200, y: 700 },
];

function WelcomeBlock() {
  const [mousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className={styles.welcome}>
      <div className={styles.containerWelcome}>
        <p>Utilizing current technologies to deliver innovative and engaging web solutions.</p>
        <h1>Creating web applications using modern technology</h1>
      </div>

      <div className={styles.constellations}>
        {CONSTELLATIONS.map((star) => (
          <motion.img
            key={star.id}
            src={star.src}
            alt={`Star ${star.id}`}
            className={styles.star}
            initial={{
              x: star.x,
              y: star.y,
              opacity: 0.8,
              scale: 1,
            }}
            animate={{
              x: [star.x, star.x + Math.random() * 50 - 25, star.x + Math.random() * 50 - 25],
              y: [star.y, star.y + Math.random() * 50 - 25, star.y + Math.random() * 50 - 25],
              opacity: [0.8, 1, 0.8],
              scale: [1, 1.1, 1],
            }}
            whileHover={{
              scale: 1.4,
              rotate: 10,
            }}
            style={{
              transform: `translate(${mousePosition.x / 40 - star.x / 40}px, ${mousePosition.y / 40 - star.y / 40}px)`,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default WelcomeBlock;
