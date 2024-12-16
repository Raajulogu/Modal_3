import { Folder } from 'lucide-react';
import type { ShareFolder } from '../../types';
import { ButtonBase } from '../UI/ButtonBase';
import { useState } from 'react';
import axios from 'axios';

interface ShareFolderButtonProps {
  folder: ShareFolder;
}

export const ShareFolderButton = ({ folder }: ShareFolderButtonProps) => {
  const [error, setError] = useState<string | null>(null);

   const handleClicks = async () => {
    // try {
    //   // Check if the File System Access API is available
    //   if ('showDirectoryPicker' in window) {
    //     const directoryHandle = await (window as any).showDirectoryPicker();
    //     console.log(`Opened directory: ${directoryHandle.name}`);
    //     setError(null);
    //   } else {
    //     throw new Error('File System Access API is not supported in this browser.');
    //   }
    // } catch (err) {
    //   console.error('Error opening folder:', err);
    //   setError('Unable to open folder. Please check your browser settings or try a different browser.');
    // }
    // if (window.electron) {
    //   window.electron.openFolder(folder.path);
    // }
  };
  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:5000/smb/list', {
        params: { remotePath:folder.path },
        responseType: 'blob', // Ensure the response is treated as a file
      });

      // Create a link element to download the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;

      // Set the filename
      const fileName = folder.path.split('/').pop() || 'downloaded_file';
      link.setAttribute('download', fileName);

      // Trigger the download and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download the file.');
    }
  };
  
  

  return (
    <ButtonBase
      onClick={handleClick}
      variant="glass"
      className="w-full justify-between group"
    >
       <a href={folder.path} target="_blank">{folder.name}</a>
      <Folder 
        size={20} 
        className="text-yellow-400 group-hover:text-yellow-300 transition-colors" 
      />
    </ButtonBase>
  );
};