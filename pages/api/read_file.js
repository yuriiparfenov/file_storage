const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';

export default async function getFileContentHandler(req, res) {
  try {

    const { parentPath } = req.body;
    console.log(parentPath);

    const rootPath = path.resolve(process.cwd(), dataPath, parentPath);

    fs.readFile(path.join(rootPath), "utf-8", (err, fileData) => {
      if (err) {
        return console.error(err);
      }
      return res.json(fileData);
    })

    

  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}