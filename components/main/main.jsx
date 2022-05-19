import { useState } from 'react';
import Upload from 'antd/lib/upload/Upload';
import { useQuery } from 'react-query';

import ButtonView from '../button/button-view';
import { Buttons } from '../const';
import TabsContainer from '../tabs-container/tabs-container';
import TreeList from '../tree-list/tree-list';
import CreateDirComponent from '../creat-dir-component/create-dir-component';
import DeleteDirComponent from '../delete-dir-component/delete-dir-component';

import styles from './main.module.css';

const Main = () => {
  const [dataState, setDataState] = useState();

  const getDirData = async () => {
    const response = await fetch(
      'http://localhost:3000/api/read_directory?path='
    );
    return response.json();
  };

  //Запрос списка дирректории
  const { isLoading, error, data } = useQuery('repoData', getDirData);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <CreateDirComponent />
        <DeleteDirComponent />

        <Upload>
          <ButtonView title={Buttons.loadFile} />
        </Upload>
        <ButtonView title={Buttons.saveFile} />
        <ButtonView title={Buttons.deleteFile} />
        <ButtonView title={Buttons.rename} />
      </header>
      <section className={styles.files}>
        <TreeList dataTree={data} />
        <TabsContainer />
      </section>
    </main>
  );
};

export default Main;
