import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ButtonView = ({ title, click }) => (
  <>
    <Button size={'small'} onClick={click}>{title}</Button>
  </>
);

export default ButtonView;