import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import ButtonView from '../button/button-view';
import { Buttons } from '../const';

const CreateDirComponent = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation((item) =>
    axios.post('http://localhost:3000/api/mkdir', item), {
      onSuccess: (data) => {
        queryClient.invalidateQueries('repoData');
        queryClient.setQueryData(data);
      }
    }
  );
  if (mutation.isSuccess) console.log('Dir create sucsecc');
  if (mutation.isError) console.log(mutation.error);

 
  const creatDirHandler = () => {
    const newDirName = prompt('Введите название новой папки', 'Новая папка');
    mutation.mutate({
      title: newDirName,
      isLeaf: false,
      children: [],
    });
  };

  return (
    <ButtonView title={Buttons.createDir} click={creatDirHandler} />
  )

};

export default CreateDirComponent;