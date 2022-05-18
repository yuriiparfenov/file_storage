import Upload from 'antd/lib/upload/Upload';
import ButtonView from '../button/button-view';
import { Buttons } from '../const';
import { DataForTree } from '../mocks/tree-data';
import TabsContainer from '../tabs-container/tabs-container';
import TreeList from '../tree-list/tree-list';
import styles from './main.module.css';

const Main = () => {
  
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <ButtonView title={Buttons.createDir} />
        <ButtonView title={Buttons.deleteDir} />
        <Upload>
          <ButtonView title={Buttons.loadFile} />
        </Upload>
        <ButtonView title={Buttons.saveFile} />
        <ButtonView title={Buttons.deleteFile} />
        <ButtonView title={Buttons.rename} />
      </header>
      <section className={styles.files}>
        <TreeList data={DataForTree} />
        <TabsContainer />
      </section>
    </main>
  );
};

export default Main;
