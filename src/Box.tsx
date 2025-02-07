import React, { useRef } from 'react';
import { BufferGeometry, Float32BufferAttribute, Mesh } from 'three';



interface BoxProps {
  width: number;
  height: number;
  depth: number;
}

const Box: React.FC<BoxProps> = ({ width, height, depth }) => {
  const meshRef = useRef<Mesh>(null);

  const geometry = new BufferGeometry();
  const vertices = [
    // Передняя грань
    0, 0, 0, width, 0, 0, width, height, 0,
    0, 0, 0, width, height, 0, 0, height, 0,

    // Задняя грань
    0, 0, depth, width, 0, depth, width, height, depth,
    0, 0, depth, width, height, depth, 0, height, depth,

    // Левая грань
    0, 0, 0, 0, 0, depth, 0, height, depth,
    0, 0, 0, 0, height, depth, 0, height, 0,

    // Правая грань
    width, 0, 0, width, 0, depth, width, height, depth,
    width, 0, 0, width, height, depth, width, height, 0,

    // Верхняя грань
    0, height, 0, width, height, 0, width, height, depth,
    0, height, 0, width, height, depth, 0, height, depth,

    // Нижняя грань
    0, 0, 0, width, 0, 0, width, 0, depth,
    0, 0, 0, width, 0, depth, 0, 0, depth,
  ];

  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;