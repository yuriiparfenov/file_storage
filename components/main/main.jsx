import { useState } from 'react';
import Upload from 'antd/lib/upload/Upload';
import { useQuery, useMutation, useQueryClient, QueryCache } from 'react-query';
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

  const [target, setTarget] = useState({});
  const [fileTarget, setFileTarget] = useState();

  const getFolderDirectory = async () => {
    const response = await fetch('http://localhost:3000/api/read_directory');
    return response.json();
  };

  const { isLoading, error, data } = useQuery(
    'repoData',
    getFolderDirectory,
    {
      isFetching: true,
      isRefetching: true,
    }
  );
/*
  const { mutate: createDirHandle } = useMutation((target) =>
    axios.post('http://localhost:3000/api/mkdir', target),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );

  const creatNewDirHandle = async () => {
    const newDirName = prompt('Введите название новой папки', 'Новая папка');
    await createDirHandle({
      title: newDirName,
      targetPath: target,
      isDirectory: true,
      isLeaf: false,
      children: [],
    });
  };
*/
  const { mutate: deleteDirHandle } = useMutation((target) =>
    axios.post('http://localhost:3000/api/delete_dir', target),
    {
      onSuccess: queryClient.refetchQueries('repoData')
    }
  );

  const deleteTargetDirHandle = async () => {
    await deleteDirHandle({ targetPath: target });
    //alert(`Папка удалена!`);
  };

  const { mutate: renameDirHandle } = useMutation(
    (target) => axios.post('http://localhost:3000/api/rename_dir', target),
    {
      onSuccess: (data) => {
        queryClient.queryClient.setQueryData('repoData', data);
      },
    }
  );

  const renameClickDirHandler = async () => {
    const newName = prompt('Введите новоe имя', 'Новая папка');
    await renameDirHandle({ title: newName, targetPath: target });
  };
/*
  const { isLoading: isLoadingFile, error: fileError, data: fileData } = useQuery(['file_read', target], () => {
    axios.post('http://localhost:3000/api/read_file', target),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  });

  console.log(fileData);*/

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
        {/*<CreateDirComponent onClick={creatNewDirHandle} />*/}
        <DeleteDirComponent onClick={deleteTargetDirHandle} />
        <Upload>
          <Button title={ButtonsText.loadFile} disabled />
        </Upload>
        <Button title={ButtonsText.saveFile} disabled />
        <Button title={ButtonsText.deleteFile} disabled />
        <RenameDirComponent onClick={renameClickDirHandler} />
      </header>
      <section className={styles.files}>
        <TreeListContainer
          data={data}
          onSetTarget={setTargetHandle}
          onSetFileTarget={setFileTargetHandle}
        />
        <TabsContainer target={fileTarget} />
      </section>
    </main>
  );
};

export default Main;
