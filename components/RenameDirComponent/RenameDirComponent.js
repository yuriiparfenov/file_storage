import { useMutation, queryClient } from 'react-query';
import axios from 'axios';

import { ButtonsText } from '../const';
import Button from '../Button/Button';

const RenameDirComponent = ({ targetPath }) => {
  console.log(targetPath);

  const { mutate } = useMutation((targetPath) =>
    axios.post('http://localhost:3000/api/rename_dir', targetPath),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );

  const renameDirHandler = () => {
    const newName = prompt('Введите ново имя', 'Новая папка');
    mutate({ title: newName, targetPath });
  };

  return <Button title={ButtonsText.rename} onClick={renameDirHandler} />
}

export default RenameDirComponent;