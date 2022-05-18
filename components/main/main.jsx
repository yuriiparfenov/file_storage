import Upload from 'antd/lib/upload/Upload';
import { useEffect } from 'react/cjs/react.production.min';
import ButtonView from '../button/button-view';
import { Buttons } from '../const';
import TabsContainer from '../tabs-container/tabs-container';
import TreeList from '../tree-list/tree-list';
import styles from './main.module.css';

const Main = ({ data }) => {
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
        <TreeList data={data} />
        <TabsContainer />
      </section>
    </main>
  );
};

export default Main;
