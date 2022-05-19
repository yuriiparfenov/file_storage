const path = require("path");
const fs = require("fs");


const dataPath = 'pages/api/data';
const rootPath = path.resolve(process.cwd(), dataPath);

export default async function getAllDirHandler(req, res) {
    const queryPath = req.query.path || "";

    try {
        const response = await readAllDir(queryPath);

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(401); // произошла ошибка
    }
};

async function readAllDir(dir) {
    const readPath = path.resolve(rootPath, dir);
    const data = await fs.readdirSync(readPath);

    const result = [];

    for (let i = 0; i < data.length; i++) {
        const name = data[i];
        const extname = path.extname(name);

        result.push({
            title: name,
            extname,
            path: readPath,
            isLeaf: extname ? true : false,
            children: Boolean(extname) ? undefined : await readAllDir(name)
        });
    }

    return result;
}