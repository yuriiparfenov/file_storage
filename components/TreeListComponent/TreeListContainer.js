import React from 'react';
import { memo } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';

import styles from './tree-list.module.css';
import axios from 'axios';

const { DirectoryTree } = Tree;

const TreeListContainer = ({ data, onSetTarget }) => {
    const [thisTarget, setThisTarget] = useState('');

    const onSelect = (key, info) => {
        setThisTarget(`${info.node.title}`);
    };

    return (
        <section className={styles.list}>
            <DirectoryTree
                multiple
                onSelect={onSelect}
                treeData={data}
                onClick={() => onSetTarget(thisTarget)}
            />
        </section>
    );
};

export default TreeListContainer;