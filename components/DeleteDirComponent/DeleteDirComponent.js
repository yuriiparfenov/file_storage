import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import Button from '../Button/Button';
import { ButtonsText } from '../const';


const DeleteDirComponent = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation((item) =>
    axios.post('http://localhost:3000/api/mkdir', item), {
      onSuccess: (data) => {
        queryClient.invalidateQueries('repoData');
        queryClient.setQueryData(['repoData', item], data);
      }
    }
  );
  if (mutation.isSuccess) console.log('Dir delete success');
  if (mutation.isError) console.log(mutation.error);

  const deleteDirHandler = () => {
    mutation.mutate({
      title: name,
      isLeaf: false,
      children: [],
    });
  };

  return (
    <Button title={ButtonsText.deleteDir} onClick={deleteDirHandler} />
  )
}

export default DeleteDirComponent;