import React from "react";
import ProductCard from "./ProductCard";
import { Content } from "native-base";

export default function ProductList() {
  const getProducts = () => {
    return [
      {
        imagemUrl:"https://loremflickr.com/150/150?random=1",
        productName: "product 1",
        releasedDate: "May 31, 2016",
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          rating: 4,
          numOfReviews: 2
      },
      {
        imagemUrl:"https://loremflickr.com/150/150?random=2",
        productName: "product 2",
        releasedDate: "October 31, 2016",
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          rating: 2,
          numOfReviews: 12
      },
      {
        imagemUrl:"https://loremflickr.com/150/150?random=3",
        productName: "product 3",
        releasedDate: "july 31, 2016",
          description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          rating: 5,
          numOfReviews: 2
      }]
  }

  const products = getProducts();
  const listProducts = products.map((product) => 
    <ProductCard key={product.productName} data={product} />)

  return (
   <Content>
     {listProducts}
   </Content>
  );
}