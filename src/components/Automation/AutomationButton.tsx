// import { FileText, Play } from 'lucide-react';
// import type { AutomationItem } from '../../types';
// import { Card } from '../UI/Card';
// import { ButtonBase } from '../UI/ButtonBase';

// interface AutomationButtonProps {
//   item: AutomationItem;
// }

// export const AutomationButton = ({ item }: AutomationButtonProps) => {
//   const handleViewSOP = () => {
//     console.log(`Opening SOP: ${item.sopPath}`);
//   };

//   const handleRunAutomation = () => {
//     console.log(`Running automation: ${item.automationPath}`);
//   };

//   return (
//     <Card>
//       <h3 className="text-white font-medium mb-4">{item.name}</h3>
//       <div className="flex gap-3">
//         <ButtonBase
//           onClick={handleViewSOP}
//           variant="glass"
//           size="sm"
//           className="flex-1"
//         >
//           <FileText size={16} className="text-blue-400" />
//           <span>View SOP</span>
//         </ButtonBase>
//         <ButtonBase
//           onClick={handleRunAutomation}
//           variant="primary"
//           size="sm"
//           className="flex-1"
//         >
//           <Play size={16} />
//           <span>Run</span>
//         </ButtonBase>
//       </div>
//     </Card>
//   );
// };


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { AutomationItem } from '../../types';
import axios from 'axios';

interface AutomationCardProps {
  item: AutomationItem;
  index: number;
}

export default function AutomationButton({ item, index }: AutomationCardProps) {
  // const [activeTab, setActiveTab] = useState<'sop' | 'automation'>('sop');
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const handleFileOpen = async (path:string="") => {
    try {
      const response = await axios.post('http://localhost:5000/api/open', {
        path: encodeURIComponent(path),
      });
  
      if (response.status === 200) {
        alert('File opened successfully!');
      }
    } catch (error) {
      console.error('Error opening file:', error);
      alert('Failed to open the file.');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur rounded-xl p-6 hover:shadow-xl hover:shadow-white/10 transition-shadow"
      >
        <motion.h3
          className="text-xl font-semibold text-white mb-4"
          whileHover={{ scale: 1.02 }}
        >
          {item.name}
        </motion.h3>

        {/* <div className="flex gap-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('sop')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'sop' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            <ImageIcon className="inline-block mr-2" size={18} />
            SOP
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('automation')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'automation' 
                ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg' 
                : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            <Play className="inline-block mr-2" size={18} />
            Automation
          </motion.button>
        </div> */}

        <AnimatePresence mode="wait">
          {/* {activeTab === 'sop' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsImageFullscreen(true)}
              className="cursor-pointer"
            >
              <motion.img
                src={item.imagePath}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleFileOpen(item.excelPath)}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/50 transition-shadow"
            >
              <Play size={20} />
              Run Automation
            </motion.button>
          )} */}

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleFileOpen(item.excelPath)}
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/50 transition-shadow"
          >
            <Play size={20} />
            Run Automation
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageFullscreen(true)}
            className="cursor-pointer"
          >
            <motion.img
              src={item.imagePath}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {isImageFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageFullscreen(false)}
        >
          <motion.img
            src={item.imagePath}
            alt={item.name}
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </>
  );
}