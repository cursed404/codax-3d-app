import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import BoxForm from './Form';
import { Switch } from 'antd';
import './App.css';
import { Mesh, BufferGeometry, Float32BufferAttribute } from 'three';


const App: React.FC = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFormSubmit = (width: number, height: number, depth: number) => {
    setWidth(width);
    setHeight(height);
    setDepth(depth);
  };

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
    document.body.style.backgroundColor = checked ? '#333' : '#fff';
    document.body.style.color = checked ? '#fff' : '#000';
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Switch checked={isDarkMode} onChange={toggleDarkMode} />
      <BoxForm onSubmit={handleFormSubmit} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box width={width} height={height} depth={depth} />
      </Canvas>
    </div>
  );
};

export default App;