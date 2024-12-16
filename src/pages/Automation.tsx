import { motion } from 'framer-motion';
import { Header } from '../components/Layout/Header';
import { AnimatedBackground } from '../components/3D/Background';
import { automationItems } from '../data/navigationData';
import AutomationButton from '../components/Automation/AutomationButton';

export const Automation = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {automationItems.map((item,index) => (
            <AutomationButton key={item.name} item={item} index={index} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};