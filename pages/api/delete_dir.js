const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';

export default async function deleteDirHandler(req, res) {
  try {
    const { title, targetPath:{ parentPath } } = await req.body;

    const rootPath = path.resolve(process.cwd(), dataPath, parentPath);
    
    fs.rmdir(rootPath, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory delete successfully!');
    })

    if (title) {
      return res.status(200).json({ message: `Дирректория удалена` });
    }

  } catch (err) {
    console.log(err);
    res.status(401).json(); // произошла ошибка
  }
}