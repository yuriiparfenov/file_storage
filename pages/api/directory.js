import { treeList } from './data/tree-list';

export default function getListHandler(req, res) {

  if (req.method === 'GET'){
    res.status(200).json(treeList);
  }
}


