const fs = require('fs');


export default async function readDirHandler(req, res) {
  try {

    //Получить данные папки
    /*
    fs.readdir('./public', (err, items) => {
      console.log(items);
      //res.json({ items })
    })*/

    //Прочитать файл
    /*
    fs.readFile('./public/11/1.txt', 'utf-8', (err, file) => {
      console.log(file);
      //res.json({ file })
    })*/

    function dirTree(dir, shift) {
      if (shift === undefined)
        shift = 0;

      let list = fs.readdirSync(dir), name;
      let treeArray = [];

      for (let item of list) {
        if (fs.statSync(name = dir + "\\" + item).isDirectory()) {
          console.log("\t".repeat(shift) + item + " [FOLDER]");
          dirTree(name, shift + 1);
        }
        else
          console.log("\t".repeat(shift) + item);
      }

    } 

    res.json({ file: dirTree("./public") });


  } catch (err) { console.log(err || { message: 'Ошибка данных' }) }

}

