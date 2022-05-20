const path = require("path");
const fs = require("fs");

const dataPath = 'pages/api/data';
const rootPath = path.resolve(process.cwd(), dataPath);

export default async function getAllDirHandler(req, res) {
    const queryPath = req.query.path || "";

    try {
        const response = await readAllDir(queryPath, rootPath);

        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(401); // произошла ошибка
    }
};

async function readAllDir(name_path, full_path) {
    const data = await fs.readdirSync(full_path);

    const response = [];

    for (let i = 0; i < data.length; i++) {
        const name = data[i];
        const _name_path = path.join("/", name_path, name);
        const _full_path = path.resolve(full_path, name);
        const isDirectory = fs.statSync(_full_path).isDirectory();
        const extname = path.extname(name);;

        response.push({
            title: name,
            extname,
            isDirectory,
            path: _name_path,
            targetPath: '',
            isLeaf: extname ? true : false,
            children: isDirectory ? await readAllDir(_name_path, _full_path) : undefined
        });
    }

    return response;
}











/*
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
            targetPath: '',
            isLeaf: extname ? true : false,
            children: Boolean(extname) ? undefined : await readAllDir(name)
        });
    }

    return result;
}

*/