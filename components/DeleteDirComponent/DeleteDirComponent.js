import { useMutation, queryClient } from 'react-query';
import axios from 'axios';

import Button from '../Button/Button';
import { ButtonsText } from '../const';


const DeleteDirComponent = ({ targetPath }) => {

  const { mutate } = useMutation((targetPath) =>
    axios.post('http://localhost:3000/api/delete_dir', targetPath),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );

  const deleteDirHandler = () => {
    mutate({targetPath});
  };

  return (
    <Button title={ButtonsText.deleteDir} onClick={deleteDirHandler} />
  )
}

export default DeleteDirComponent;