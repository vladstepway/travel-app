import React from 'react';
import { Spin } from 'antd';

const Preloader = () => {
  return (
      <div style={{
        width: 'max-content',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}><Spin size="large" /></div>
  );
};

export default Preloader;
