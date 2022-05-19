import React from 'react';
import { memo } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import { useQuery } from 'react-query';
import { useState } from 'react';

import styles from './tree-list.module.css';

const { DirectoryTree } = Tree;

const TreeListContainer = ({ data }) => {

    const onSelect = (key, info) => {

    };

    const onExpand = () => {
    };

    return (
        <section className={styles.list}>
            <DirectoryTree
                multiple
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={data}
            />
        </section>
    );
};

export default memo(TreeListContainer, (prevProps, nextProps) => prevProps !== nextProps);