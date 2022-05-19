const fs = require('fs');

const path = require('path');

const dataPath = 'pages/api/data';

export default async function deleteDirHandler(req, res) {
  try {
    const { title } = await req.body;

    fs.rmdir(path.join(dataPath, title), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory successfully delete!');
    })

    if (title) {
      return res.status(200).json({ message: 'Gолучили имя папки на удаление' });
    }


  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}