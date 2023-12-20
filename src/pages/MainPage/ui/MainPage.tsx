import { Container } from "shared/ui/Container/Container";
import { Typography, Button, Space } from 'antd';
import type { RootState } from "app/store";

import { decrement, increment } from "app/store/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";


const { Text, Title} = Typography;

const MainPage = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const decrease = () => {
    dispatch(decrement())
  }

  const increase = () => {
    dispatch(increment())
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
