import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import Button from '../Button/Button';
import { ButtonsText } from '../const';

const CreateDirComponent = () => {

  const { mutate } = useMutation((dir) =>
    axios.post('http://localhost:3000/api/mkdir', dir));

  const creatDirNameHandler = () => {
    const newDirName = prompt('Введите название новой папки', 'Новая папка');
    mutate({
      title: newDirName,
      isLeaf: false,
      children: [],
    });
  };

  return <Button title={ButtonsText.createDir} onClick={creatDirNameHandler} />
};

export default CreateDirComponent;