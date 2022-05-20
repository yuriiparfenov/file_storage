const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';

export default async function createDirHandler(req, res) {
  try {
    console.log(req.body);
    const { title, targetPath } = await req.body;

    fs.mkdir(path.join(dataPath, targetPath, title), (err) => {
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