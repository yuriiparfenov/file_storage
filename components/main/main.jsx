import { useState } from 'react';
import Upload from 'antd/lib/upload/Upload';
import { useQuery, ReactQueryDevtoolsPanel } from 'react-query';

import Button from '../Button/Button';
import { ButtonsText } from '../const';
import TabsContainer from '../TabsComponent/TabsComponent';
import TreeListContainer from '../TreeListComponent/TreeListContainer';
import CreateDirComponent from '../CreateDirComponent/CreateDirComponent';
import DeleteDirComponent from '../DeleteDirComponent/DeleteDirComponent';

import styles from './main.module.css';

const Main = () => {
  const [target, setTarget] = useState('');

  const getFolderDirectory = async () => {
    const response = await fetch(
      'http://localhost:3000/api/read_directory'
    );
    return response.json();
  };

  const { isLoading, error, data } = useQuery('repoData', getFolderDirectory);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const setTargetHandle = (target) => {
    setTarget(target);
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <CreateDirComponent targetPath={target}/>
        <DeleteDirComponent />
        <Upload>
          <Button title={ButtonsText.loadFile} />
        </Upload>
        <Button title={ButtonsText.saveFile} />
        <Button title={ButtonsText.deleteFile} />
        <Button title={ButtonsText.rename} />
      </header>
      <section className={styles.files}>
        <TreeListContainer data={data} onSetTarget={setTargetHandle} />
        <TabsContainer />
      </section>
      
    </main>
  );
};

export default Main;
