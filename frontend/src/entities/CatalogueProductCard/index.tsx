import React from 'react';
import {
  ProductContainerStyled,
  HeaderMenuProductStyled,
  DiscountBadgeStyled,
  FavouriteIconStyled,
  TopSideBoxLinkToProductStyled,
  ProductImageStyled,
  ProductTitleStyled,
  ProductPriceBlockStyled,
  ProductFinalPriceStyled,
  ProductPriceWithoutDiscountStyled,
} from './index.styled';
import { Button } from "@/shared/Button/ui";
import { BUTTON_SIZE_VARIANT } from "@/shared/Button/config/enums";


const product = {
  _id: '1',
  title: 'test1',
  discount: 10,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-Vg_IFRtnL2WQsSiJFML7R22xC8i0FL11w&s',
  price: 1000,
  isFavourite: false,
}
const CatalogueProductCard = () => {
  const { _id, image, price, title, discount } = product;
  const finalPrice = discount ? (price / 100) * (100 - discount) : price;

  // const isFavourite = allFavouriteProducts?.includes(product._id);

  const onFavouriteClick = () => {
    // if (isFavourite) {
    //   return axios.delete(`/favourites/${product._id}`);
    // }
    // return axios.post(`/favourites/${product._id}`);
  };

  return (
    <ProductContainerStyled withImageAnimation={Boolean(image)}>
      <HeaderMenuProductStyled>
        {discount ? (
          <DiscountBadgeStyled variant="body2">{`-${discount}%`}</DiscountBadgeStyled>
        ) : null}
        {/*<FavouriteIconStyled isFavourite={isFavourite}>*/}
        {/*  <HeartIcon*/}
        {/*    width="20px"*/}
        {/*    height="20px"*/}
        {/*    color={isFavourite ? '#B81E1F' : '#FFFFFF'}*/}
        {/*    onClick={onFavouriteClick}*/}
        {/*  />*/}
        {/*</FavouriteIconStyled>*/}
      </HeaderMenuProductStyled>
      <TopSideBoxLinkToProductStyled href={_id}>
        <ProductImageStyled id="image" src={image} />
      </TopSideBoxLinkToProductStyled>
      <div>
        <ProductTitleStyled href={_id} id="title">
          {title}
        </ProductTitleStyled>
        <ProductPriceBlockStyled>
          <ProductFinalPriceStyled variant="h6">
            {`${finalPrice.toFixed(0)} ₽`}
          </ProductFinalPriceStyled>
          {discount ? (
            <ProductPriceWithoutDiscountStyled variant="body1">
              {`${price.toFixed(0)} ₽`}
            </ProductPriceWithoutDiscountStyled>
          ) : null}
        </ProductPriceBlockStyled>
        <Button
          // onClick={() => setProductToCart(product)}
          fullWidth
          size={BUTTON_SIZE_VARIANT.small}
        >
          В корзину
        </Button>
      </div>
    </ProductContainerStyled>
  );
};

export default CatalogueProductCard;
