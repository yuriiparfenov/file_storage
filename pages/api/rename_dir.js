const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';

export default async function deleteDirHandler(req, res) {
  try {
    const { title, targetPath: { parentPath } } = await req.body;
    const rootPath = path.resolve(process.cwd(), dataPath, parentPath);
    const newPath = path.join(dataPath, title);

    fs.rename(path.join(rootPath), path.join(newPath), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory rename successfully!');
    })
  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}