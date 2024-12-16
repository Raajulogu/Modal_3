const SMB2 = require('smb2');

const smbClient = new SMB2({
  share: '\\\\wtc1501cifs.prod.local\\ORGSHARE',
  domain: 'YOUR_DOMAIN', // Use your domain
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
});

async function readDirectory(path) {
  try {
    const files = await smbClient.readdir(path);
    console.log('Files:', files);
    return files;
  } catch (error) {
    console.error('Error reading directory:', error);
    throw error;
  }
}

async function downloadFile(remotePath, localPath) {
  return new Promise((resolve, reject) => {
    smbClient.createReadStream(remotePath)
      .pipe(require('fs').createWriteStream(localPath))
      .on('finish', resolve)
      .on('error', reject);
  });
}

module.exports = { readDirectory, downloadFile };
