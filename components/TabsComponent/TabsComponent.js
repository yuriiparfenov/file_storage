import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import styles from './tabs-container.module.css';

const { TabPane } = Tabs;

const TabsComponent = ({ fileTarget }) => {
  return (
    <section className={styles.tabs}>
      <Tabs defaultActiveKey="1" type="card" size={'middle'}>
        {
          fileTarget ?
            <TabPane tab={fileTarget} key="1"></TabPane>
            :
            <p>Фаил не выбран</p>
        }
      </Tabs>
    </section>
  )
};

export default TabsComponent;