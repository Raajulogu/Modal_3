import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, FolderOpen, Link as LinkIcon, Users } from 'lucide-react';
import { powerBiReports, sharedFolders, teamLinks } from '../data/navigationData';

export default function SOPSite() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleFileOpen = (path: string) => {
    // In a real application, you would implement the file opening logic here
    console.log(`Opening file: ${path}`);
  };

  const handleLinkOpen = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('powerbi')}
          className="w-full p-4 bg-blue-600 text-white rounded-lg flex items-center gap-2"
        >
          <FileText size={20} />
          Power BI Report
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('folders')}
          className="w-full p-4 bg-green-600 text-white rounded-lg flex items-center gap-2"
        >
          <FolderOpen size={20} />
          Share Folders
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('links')}
          className="w-full p-4 bg-purple-600 text-white rounded-lg flex items-center gap-2"
        >
          <LinkIcon size={20} />
          Links
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('team')}
          className="w-full p-4 bg-orange-600 text-white rounded-lg flex items-center gap-2"
        >
          <Users size={20} />
          Team
        </motion.button>
      </div>

      <div className="col-span-3">
        <AnimatePresence mode="wait">
          {activeSection === 'powerbi' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-2 gap-4"
            >
              {powerBiReports.map((report) => (
                <motion.button
                  key={report.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLinkOpen(report.link)}
                  className="p-4 bg-white/10 backdrop-blur rounded-lg text-white"
                >
                  {report.name}
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeSection === 'folders' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-2 gap-4"
            >
              {sharedFolders.map((folder) => (
                <motion.button
                  key={folder.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleFileOpen(folder.path)}
                  className="p-4 bg-white/10 backdrop-blur rounded-lg text-white"
                >
                  {folder.name}
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeSection === 'links' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-2 gap-4"
            >
              {teamLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLinkOpen(link.link)}
                  className="p-4 bg-white/10 backdrop-blur rounded-lg text-white"
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          )}

          {activeSection === 'team' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 bg-white/10 backdrop-blur rounded-lg"
            >
              <img
                src="C:/Vasanthan/team.jpg"
                alt="Team"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}