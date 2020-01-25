import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductInfo, ProductImage, Title, DefaultParagraph, DefaultPrice, ProductDetailsButton } from '../styles/styles';
import image from  '../images/logo.jpg';

const Product = (props) => {
    let { item } = props;
    return (
        <ProductInfo>
            <ProductImage src={item.image}/>
            <Title>{item.product}</Title>
            <DefaultParagraph>{item.description}</DefaultParagraph>
            <DefaultPrice>{'R$ ' + parseFloat(item.price).toFixed(2)}</DefaultPrice>
            <ProductDetailsButton>
                <NavLink to={'/product/' + item.id}>Detalhes do produto</NavLink>
            </ProductDetailsButton>
        </ProductInfo>
    )
}

export default Product;