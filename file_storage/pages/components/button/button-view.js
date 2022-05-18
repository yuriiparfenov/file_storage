import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ButtonView = ({ title }) => (
  <>
    <Button size={'small'}>{title}</Button>
  </>
);

export default ButtonView;