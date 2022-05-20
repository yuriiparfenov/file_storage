const fs = require('fs');
const path = require('path');

const root = path.resolve(process.cwd(), 'pages/api/data');

export default async function getFileContentHandler(req, res) {
  try {

    const { title } = req.body;
    console.log(title);

    return res.json('tttt');

  } catch (err) {
    console.log(err);
    res.status(401); // произошла ошибка
  }
}