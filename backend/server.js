

import express from 'express';
import cors from 'cors';
import path from 'path';
import { readDirectory } from './smb-utils';


const app = express();
app.use(express.json());

app.get('/smb/list', async (req, res) => {
  const { path } = req.query;
  try {
    const files = await readDirectory(path || '/');
    res.json({ success: true, files });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/smb/download', async (req, res) => {
    const { remotePath } = req.query;
  
    try {
      // Generate a unique local filename
      const fileName = remotePath.split('/').pop() || 'file';
      const localPath = `./downloads/${fileName}`;
      
      // Stream the file from SMB to the local file system
      smbClient.createReadStream(remotePath)
        .pipe(res);
  
      // Set the appropriate headers for download
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Type', 'application/octet-stream');
    } catch (error) {
      console.error('Error downloading file:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  