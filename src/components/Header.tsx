import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Clock from './Clock';

export default function Header() {
  const location = useLocation();

  const getHeaderText = () => {
    switch (location.pathname) {
      case '/':
        return 'Welcome to S&OP Global';
      case '/dashboard':
        return 'Welcome to S&OP Global';
      case '/sop':
        return 'S&OP Team Website';
      default:
        return 'Forecast Analytics with AI-ML';
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative py-8 px-6 mt-4"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-md rounded-2xl"
        animate={{
          scale: [1, 1.01, 1],
          rotateX: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <div className="relative flex justify-between items-center">
        <motion.h1
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {getHeaderText()}
        </motion.h1>
        <Clock />
      </div>
    </motion.div>
  );
}