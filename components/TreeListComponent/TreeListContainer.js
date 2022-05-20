import React from 'react';
import 'antd/dist/antd.css';
import { Tree } from 'antd';

import styles from './tree-list.module.css';

const { DirectoryTree } = Tree;

const TreeListContainer = ({ data, onSetTarget, onSetFileTarget }) => {
    return (
        <section className={styles.list}>
            <DirectoryTree
                multiple
                treeData={data}
                onClick={(key, info) => {
                    onSetTarget({
                        parentPath: `${info.title}`,
                        parentLeaf: info.isLeaf,
                    });
                    info.isLeaf ? onSetFileTarget(info.title) : null;
                }
                }
            />
        </section>
    );
};

export default TreeListContainer;