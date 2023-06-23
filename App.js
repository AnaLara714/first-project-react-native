import { StyleSheet, Text } from 'react-native';
import { Container, Content, H1, Header } from 'native-base';
import PrdoductList from './ProductList';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

export default function App() {
  const user = {
    firstName: "Ana",
    lastName: "Mesquita"
  }
  return (
    <Container>
      <Header/>
      <Content>
        <H1>Hello, </H1>
        <Text>{formatName(user)}</Text>
        <PrdoductList/>
      </Content>
    </Container>
  );
}
