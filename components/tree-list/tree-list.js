import React from 'react';
import { memo } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import styles from './tree-list.module.css';

const { DirectoryTree } = Tree;


const TreeList = ({ data }) => {
    

    const treeData = data;
    const onSelect = (keys) => {
        console.log('Trigger Select', keys);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    return (
        <section className={styles.list}>
            <DirectoryTree
                multiple
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            />
        </section>

    );
};

export default memo(TreeList, (prevProps, nextProps) => prevProps.data === nextProps.data);