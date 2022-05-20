import { useState } from 'react';
import Upload from 'antd/lib/upload/Upload';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import Button from '../Button/Button';
import { ButtonsText } from '../const';
import TabsContainer from '../TabsComponent/TabsComponent';
import TreeListContainer from '../TreeListComponent/TreeListContainer';
import CreateDirComponent from '../CreateDirComponent/CreateDirComponent';
import DeleteDirComponent from '../DeleteDirComponent/DeleteDirComponent';
import RenameDirComponent from '../RenameDirComponent/RenameDirComponent';

import styles from './main.module.css';

const Main = () => {
  const queryClient = useQueryClient();
  const [target, setTarget] = useState(null);
  const [fileTarget, setFileTarget] = useState();

  const { isLoading, error, data } = useQuery({
    queryKey: 'repoData',
    queryFn: () => axios.get('http://localhost:3000/api/read_directory'),
    select: ({ data }) => data,
  });

  const { mutate: createDir } = useMutation({
    mutationKey: 'create_dir',
    mutationFn: (target) =>
      axios.post('http://localhost:3000/api/mkdir', target),
    onSuccess: () => queryClient.refetchQueries('repoData'),
  });

  const { mutate: deleteDir } = useMutation({
    mutationKey: 'delete_dir',
    mutationFn: (target) =>
      axios.post('http://localhost:3000/api/delete_dir', target),
    onSuccess: () => queryClient.refetchQueries('repoData'),
  });

  const { mutate: renameDir } = useMutation({
    mutationKey: 'rename_dir',
    mutationFn: (target) =>
      axios.post('http://localhost:3000/api/rename_dir', target),
    onSuccess: queryClient.refetchQueries('repoData'),
  });

  const creatNewDirHandle = async () => {
    const newDirName = prompt('Введите название новой папки', 'Новая папка');
    await createDir({ title: newDirName, targetPath: target });
  }; 

  const deleteTargetDirHandle = async () => {
    const result = confirm('Подтверждаете удаление папки?');

    if (result) {
      await deleteDir({ targetPath: target });
    }
  };

  const renameClickDirHandler = async () => {
    const newName = prompt('Введите новоe имя', 'Новая папка');
    await renameDir({ title: newName, targetPath: target });
  };

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const setTargetHandle = (target) => {
    setTarget(target);
  };

  const setFileTargetHandle = (target) => {
    setFileTarget(target);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <CreateDirComponent onClick={creatNewDirHandle} />
        <DeleteDirComponent onClick={deleteTargetDirHandle} />
        <Upload>
          <Button title={ButtonsText.loadFile} />
        </Upload>
        <Button title={ButtonsText.saveFile} />
        <Button title={ButtonsText.deleteFile} />
        <RenameDirComponent onClick={renameClickDirHandler} />
      </header>
      <section className={styles.files}>
        <TreeListContainer
          data={data}
          onSetTarget={setTargetHandle}
          onSetFileTarget={setFileTargetHandle}
        />
        <TabsContainer fileTarget={fileTarget} />
      </section>
    </main>
  );
};

export default Main;
