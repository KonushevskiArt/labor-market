import { Container } from "shared/ui/Container/Container";
import React, { useState } from "react";

import { Typography, Button, Space } from 'antd';

const { Text, Title} = Typography;

const MainPage = () => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const increase = () => {
    setCount((prevCount) => prevCount + 1)
  } 

  return (
    <Container>
      <Title>MainPage</Title>

      <Space>
        <Button onClick={decrease}>Decrease</Button>
        <Text>Count: {count}</Text>
        <Button onClick={increase}>Increase</Button>
      </Space>


    </Container>
  )
};

export default MainPage;
