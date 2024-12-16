import { useNavigate } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors"
        >
          <Home size={24} />
          <span className="font-semibold">Home</span>
        </motion.button>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-indigo-300">{format(currentTime, 'MMMM d, yyyy')}</p>
          <p className="text-white font-semibold">
            {format(currentTime, 'HH:mm:ss')}
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSignIn}
          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <span className="font-semibold">AI-ML Signin</span>
          <LogOut size={24} />
        </motion.button>
      </div>
    </header>
  );
};