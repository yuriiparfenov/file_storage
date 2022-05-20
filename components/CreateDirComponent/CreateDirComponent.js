import { useMutation } from 'react-query';
import axios from 'axios';

import Button from '../Button/Button';
import { ButtonsText } from '../const';

const CreateDirComponent = ({ targetPath }) => {

  const { mutate } = useMutation((targetPath) =>
    axios.post('http://localhost:3000/api/mkdir', targetPath));

  const creatDirNameHandler = () => {
    const newDirName = prompt('Введите название новой папки', 'Новая папка');
    mutate({
      title: newDirName,
      targetPath: targetPath,
      isDirectory: true,
      isLeaf: false,
      children: [],
    });
  };

  return <Button title={ButtonsText.createDir} onClick={creatDirNameHandler} />
};

export default CreateDirComponent;