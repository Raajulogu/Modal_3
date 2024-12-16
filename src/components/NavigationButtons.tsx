import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, LogOut } from 'lucide-react';

export default function NavigationButtons() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 mt-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
        >
          <Home size={20} />
          <span className="font-semibold">Home</span>
        </motion.button>
      </motion.div>

      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back</span>
        </motion.button>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleLogout}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300"
        >
          <LogOut size={20} />
          <span className="font-semibold">Logout</span>
        </motion.button>
      </motion.div>
    </div>
  );
}