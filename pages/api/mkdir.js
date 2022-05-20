const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';


export default async function createDirHandler(req, res) {
  try {
    let targetPropPath = '';
    const { title, targetPath:{ parentPath, parentLeaf} } = await req.body;

    if(!parentLeaf) {
      targetPropPath = parentPath;
    };

    const rootPath = path.resolve(process.cwd(), dataPath, targetPropPath);

    fs.mkdir(path.join(rootPath, title), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    })

    if (title) {
      return res.status(200).json({ message: `Создана дирректория ${title}` });
    }

  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}