import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Cpu, Home, LogIn } from 'lucide-react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedButton } from '../AnimatedButton/AnimatedButton';
import logo from '../../images/logo.png'

export const Header = () => {
  const navigate = useNavigate();
  const params = useLocation().pathname;
  console.log(params, "params")
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

  const isSigninVisible = params !== "/automation" && params !== "/signin";
  const isHomeVisible = params !== "/";
   const isImageVisible = params !== "/signin"

  return (
    <header className="relative flex items-center bg-white/10 backdrop-blur-md border-b border-white/10 p-4 px-20 w-full min-h-[80px]">
      <div className=" flex justify-between items-center gap-8">
        {isImageVisible && <img src={logo} className='w-30 h-14' />}
        {isHomeVisible && <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-purple-300 hover:text-indigo-200 transition-colors"
        >
          <Home size={28} />
          <span className="font-semibold text-xl">Home</span>
        </motion.button>}

        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-indigo-300">{format(currentTime, 'MMMM d, yyyy')}</p>
          <p className="text-white font-semibold">
            {format(currentTime, 'HH:mm:ss')}
          </p>
        </motion.div> */}



      </div>
      <div className='absolute top-[30%] xl:left-[40%] lg:left-[30%] md:left-[20%] w-[450px]'>
        <motion.div
          className=" "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-indigo-300 text-2xl">Atleos Global Ops Analytics, Pudu</p>
        </motion.div>
      </div>
      {isSigninVisible && <div className='absolute right-8  top-[20%]'>
        <motion.div
          className="flex flex-row gap-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedButton
            text="AI-ML Signin"
            icon={<Cpu className="w-7 h-7" />}
            onClick={() => navigate('/signin')}
          />
        </motion.div>
      </div>}
    </header>
  );
};