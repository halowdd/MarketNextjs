"use client";
import React, { useEffect } from 'react';
import { ProductsListContainerStyled } from './index.styled';
import CatalogueProductCard from "@/entities/CatalogueProductCard";


const products = [
  {
    _id: '1',
    title: 'test1',
    discount: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-Vg_IFRtnL2WQsSiJFML7R22xC8i0FL11w&s',
    price: 1000,
    isFavourite: false,
  }
];

const CataloguePage = () => {

  // if (isError) {
  //   return <p>ошибка...</p>;
  // }
  // if (isLoading) {
  //   return <p>Загружается...</p>;
  // }

  return (
    <ProductsListContainerStyled>
      {products.map((product) => (
        <CatalogueProductCard key={product._id} {...product} />
      ))}
    </ProductsListContainerStyled>
  );
};

export default CataloguePage;
