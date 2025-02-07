import React, { useState } from 'react';
import { Button, Input, Form } from 'antd';
import './Form.css';

interface FormProps {
  onSubmit: (width: number, height: number, depth: number) => void;
}

const BoxForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);

  const handleSubmit = () => {
    onSubmit(width, height, depth);
  };

  return (
    <Form onFinish={handleSubmit} className="box-form">
      <Form.Item label="Ширина">
        <Input
          type="number"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value))}
        />
      </Form.Item>
      <Form.Item label="Высота">
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
      </Form.Item>
      <Form.Item label="Глубина">
        <Input
          type="number"
          value={depth}
          onChange={(e) => setDepth(parseFloat(e.target.value))}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Обновить куб
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BoxForm;