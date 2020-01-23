import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductDetailsButton, ProductItem, Title, DefaultParagraph } from '../styles/styles';

const Product = (props) => {
    let { item } = props;
    return (
        <ProductItem>
            <Title>{item.product}</Title>
            <DefaultParagraph>{item.description}</DefaultParagraph>
            <DefaultParagraph>{item.price}</DefaultParagraph>
            <ProductDetailsButton>
                <NavLink to={'/product/' + item.id}>Detalhes do produto</NavLink>
            </ProductDetailsButton>
        </ProductItem>
    )
}

export default Product;