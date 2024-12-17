import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, icon, onClick }) => {
  return (
    <motion.button
      className="relative group perspective-1000"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={onClick}
    >
      <div className="relative px-3 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl transform transition-all duration-500 ease-out group-hover:translate-z-10 group-hover:rotate-y-12 shadow-2xl min-w-[150px]">
        <div className="flex items-center justify-center space-x-4">
          <motion.div 
            className="text-white text-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {icon}
          </motion.div>
          <span className="text-white font-bold text-lg tracking-wider">{text}</span>
        </div>
        <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
        <motion.div
          className="absolute -inset-4 border-2 border-purple-300/30 rounded-2xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.button>
  );
};