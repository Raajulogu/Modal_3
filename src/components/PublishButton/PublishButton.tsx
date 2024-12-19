import { useRef } from 'react';
import { Send } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useGSAP } from '@gsap/react';

import './styles.css';
import { Particles } from './Particles';
import { createButtonTimeline } from './animation';

export const PublishButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });
  const controls = useAnimation();

  const handleClick = contextSafe(() => {
    if (!buttonRef.current) return;
    const timeline = createButtonTimeline(buttonRef.current);
    timeline.play();
    
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    });
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    buttonRef.current.style.setProperty('--x', `${x}%`);
    buttonRef.current.style.setProperty('--y', `${y}%`);
  };

  return (
    <motion.button
      ref={buttonRef}
      className="publish-button"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      animate={{
        y: [0, -8, 0],
        rotateX: [0, 2, 0],
        rotateY: [0, 4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="button-content"
        animate={{ 
          rotateX: [0, 10, 0],
          z: [0, 20, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <motion.span 
          className="button-text"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          Publish
        </motion.span>
        <motion.div
          animate={{ 
            rotate: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Send className="button-icon" size={24} />
        </motion.div>
      </motion.div>
      
      <div className="button-glow" />
      <div className="button-border" />
      
      <motion.div
        className="button-shine"
        animate={{
          x: ["-100%", "200%"],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Particles />
      <div className="button-backdrop" />
    </motion.button>
  );
};