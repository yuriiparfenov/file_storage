import React from 'react';
import 'antd/dist/antd.css';
import { Button as ButtonAntd } from 'antd';

const Button = ({ title, onClick }) => (
    <ButtonAntd size={'small'} onClick={onClick}>{title}</ButtonAntd>
);

export default Button;