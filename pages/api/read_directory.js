const path = require("path");
const fs = require("fs");


const root = path.resolve(process.cwd(), 'pages/api/data');

export default async function readDirHandler(req, res) {
  const queryPath = req.query.path || "";
  const readDir = path.resolve(root, queryPath);

  try {
    const data = await fs.readdirSync(readDir);

    const response = data.map(item => {
      const _path = path.resolve(queryPath, item);
      const extname = path.extname(_path);
    
      return {
        path: path.join('pages/api/data', item),
        title: item,
        extname: extname,
        isLeaf: extname ? true : false,
      }
    });
    
    res.status(200).json(response);
    
  } catch (err) {
    res.status(401); // произошла ошибка
  }
};
