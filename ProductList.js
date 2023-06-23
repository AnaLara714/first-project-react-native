import { Container, Content, Header, List, ListItem } from "native-base";
import React from "react";
import { Text, View } from "react-native";

export default function PrdoductList () {
  const products = ["Learning React", "Pro React", "Beginning React"];
  const listProducts = products.map((product) => 
    <ListItem key={product.toString()}>
      <Text>{ product }</Text>
    </ListItem>
  );
  return (
    <Container>
      {/* <Header/> */}
      <Content>
        <List>
          {listProducts}
        </List>
      </Content>
    </Container>
  )
}