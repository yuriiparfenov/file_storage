import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import styles from './tabs-container.module.css';
import { useMutation, useQuery } from 'react-query';

const { TabPane } = Tabs;

const TabsComponent = ({ data }) => {
/*
    const { isLoading, error, data } = useQuery('file_read', (target) => {
        fetch('http://localhost:3000/api/read_file', target)
            .then(res => res.json());
    })

*/
    return (
        <section className={styles.tabs}>
            <Tabs defaultActiveKey="1" type="card" size={'middle'}>
                <TabPane tab="Card Tab 1" key="1">
                    {/*isLoading ? <p>Loading...</p> : null}
                    {data*/}
                    блабла
                </TabPane>
            </Tabs>
        </section>
    )
};

export default TabsComponent;