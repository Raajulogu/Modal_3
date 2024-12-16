import { Folder } from 'lucide-react';
import type { ShareFolder } from '../../types';
import { ButtonBase } from '../UI/ButtonBase';
import axios from 'axios';

interface ShareFolderButtonProps {
  folder: ShareFolder;
}

export const ShareFolderButton = ({ folder }: ShareFolderButtonProps) => {

  const handleClick = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/download`, {
        params: { path: encodeURIComponent(folder.path) },
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