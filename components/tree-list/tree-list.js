import React from 'react';
import { memo } from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
import { useQuery } from 'react-query';
import styles from './tree-list.module.css';
import { useState } from 'react';

const { DirectoryTree } = Tree;


const TreeList = ({ dataTree }) => {
    const [title, setTitle] = useState('');


    const fetchSubdir = async (title) => {
        const res = await fetch(
            `http://localhost:3000/api/mkdir${title}`);
        return res.json();
    };


    const { data, error, isLoading } = useQuery(['fetchSubdir', title], () =>
        fetchSubdir(title)
    );
    console.log(data);

    const treeData = dataTree;
    const onSelect = (key, info) => {
        setTitle(info.node.title);
    };

    const onExpand = () => {

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