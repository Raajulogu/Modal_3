
import { Folder } from 'lucide-react';
import type { ShareFolder } from '../../types';
import { ButtonBase } from '../UI/ButtonBase';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ShareFolderButtonProps {
  folder: ShareFolder;
}

export const ShareFolderButton = ({ folder }: ShareFolderButtonProps) => {
  const [currentPath, setCurrentPath] = useState(folder.path); // Track the current path
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    
    // Fetch the list of files for the current path
    axios
      .get('http://localhost:5000/api/files', { params: { path: currentPath } })
      .then((response) => {
        setFiles(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
  }, [currentPath]);

  const handleDownload = (fileName:string) => {
    const filePath = currentPath ? `${currentPath}/${fileName}` : fileName;
    window.location.href = `http://localhost:5000/api/files/download?path=${encodeURIComponent(filePath)}`;
  };

  const handleFolderClick = (folderName: string) => {
    const newPath = currentPath ? `${currentPath}/${folderName}` : folderName;
    setCurrentPath(newPath); // Navigate to the clicked folder
  };

  const handleGoBack = () => {
    const parts = currentPath.split('/').filter(Boolean);
    parts.pop(); // Remove the last part of the path
    setCurrentPath(parts.join('/')); // Go up one level
  };

  const handleClick = () => {
    if(folder.name==="Backlog Changes"){
      window.open(folder.path,"_blank")
      return false;
    }
    setOpen(!open);
    setCurrentPath("")
  };

  return (
    <>
      <ButtonBase
        onClick={handleClick}
        variant="glass"
        className="w-full justify-between group p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <span>
        {folder.name}
        </span>
        <Folder
          size={20}
          className="text-yellow-400 group-hover:text-yellow-300 transition-colors"
        />
      </ButtonBase>

      {open && (
        <div className="mt-4 p-4 max-h-[400px] overflow-y-auto bg-white rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">File Manager</h1>

          {currentPath && (
            <button
              onClick={handleGoBack}
              className="text-blue-600 font-semibold mb-2 inline-block"
            >
              &larr; Go Back
            </button>
          )}

          <ul className="space-y-3">
            {files.map((file: any, index:number) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {file.isDirectory ? (
                  <button
                    onClick={() => handleFolderClick(file.name)}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-semibold"
                  >
                    📁 {file.name}
                  </button>
                ) : (
                  <>
                    <span className="flex items-center text-gray-700">
                      📄 {file.name}
                    </span>
                    <button
                      onClick={() => handleDownload(file.name)}
                      className="text-blue-500 font-semibold hover:text-blue-700"
                    >
                      Download
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
