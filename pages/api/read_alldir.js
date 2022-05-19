const path = require("path");
const fs = require("fs");


const root = path.resolve(process.cwd(), 'pages/api/data');

export default async function readDirHandler(req, res) {
  const queryPath = req.query.path || "";
  const readDir = path.resolve(root, queryPath); //ПУТЬ!!!

  try {

    const getList = async (dir) => {
      const data = await fs.readdirSync(dir);

      const response = await Promise.all(data.map((item) => {
        const _path = path.resolve(queryPath, item);
        const extname = path.extname(_path);

        return {
          path: path.join('pages/api/data', item),
          title: item,
          extname: extname,
          isLeaf: extname ? true : false,
        }
      }))

      return response;

    }


    console.log(getList(readDir).then(file => console.log(file)));
    res.status(200).json(getList(readDir));

  } catch (err) {
    res.status(401); // произошла ошибка
  }
};
