const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';

export default async function deleteDirHandler(req, res) {
  try {
    const { targetPath:{ parentPath } } = await req.body;

    const rootPath = path.resolve(process.cwd(), dataPath, parentPath);
    
    await fs.rmdir(rootPath, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory delete successfully!');
      return res.status(200).json();
    })

  } catch (err) {
    console.log(err);
    res.status(401).json(); // произошла ошибка
  }
}