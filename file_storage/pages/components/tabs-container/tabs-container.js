import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import styles from './tabs-container.module.css';

const { TabPane } = Tabs;

const TabsContainer = () => {
    return (
        <section className={styles.tabs}>
            <Tabs defaultActiveKey="1" type="card" size={'middle'}>
                <TabPane tab="Card Tab 1" key="1">
                    Content of card tab 1
                </TabPane>
                <TabPane tab="Card Tab 2" key="2">
                    Content of card tab 2
                </TabPane>
                <TabPane tab="Card Tab 3" key="3">
                    Content of card tab 3
                </TabPane>
            </Tabs>
        </section>
    )
};

export default TabsContainer;