const fs = require('fs');
const path = require('path');

const dataPath = 'pages/api/data';


export default async function createDirHandler(req, res) {
  try {
    const { title } = await req.body;
    console.log('Данные с фронта', req.body);

    fs.mkdir(path.join(dataPath, title), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    })

    if (title) {
      return res.status(200).json({ message: 'Ура, получили имя папки' });
    }


  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}