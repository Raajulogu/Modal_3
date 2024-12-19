import { motion } from 'framer-motion';
import { Header } from '../components/Layout/Header';
import { AnimatedBackground } from '../components/3D/Background';
import { automationItems } from '../data/navigationData';
import AutomationButton from '../components/Automation/AutomationButton';
import { PublishButton } from '../components/PublishButton/PublishButton';
import axios from 'axios';

export const Automation = () => {

  const handleFileOpen = async (fileName: any) => {
    try {
      const response = await axios.post('fileName', null, {
        params: { path: "/home/dotzza/Pictures/Screenshots/test2.png" },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error opening file:', error);
      alert('Failed to open file');
    }
  };

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

          <span onClick={()=>handleFileOpen("")}>
          <PublishButton />
          </span>
        </motion.div>
      </main>
    </div>
  );
};