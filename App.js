import { Body, Container, Content, H1, Header, Title } from 'native-base';
import ProductList from './ProductList';

export default function App() {
  
  return (
    <Container>
      <Header>
       <Body>
        <Title>List of products</Title>
       </Body>
      </Header>
      <Content>
       <ProductList/>
      </Content>
    </Container>
  );
}
