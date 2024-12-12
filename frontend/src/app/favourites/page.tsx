import React from 'react';
import { ProductsListContainerStyled } from './index.styled';
import CatalogueProductCard from "@/entities/CatalogueProductCard";


const products = [
  {
    id: '1',
    title: 'test1',
    discount: 10,
    image: null,
    price: 1000,
    isFavourite: true,
  }
];
const FavouritePage = () => {
  return (
    <ProductsListContainerStyled>
      {products.map((product) => (
        <CatalogueProductCard key={product.id} {...product} />
      ))}
    </ProductsListContainerStyled>
  );
};

export default FavouritePage;