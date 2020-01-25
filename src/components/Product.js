import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductInfo, ProductImage, Title, DefaultPrice, ProductDetailsButton } from '../styles/styles';
import { FiPlusCircle } from  'react-icons/fi';

const Product = (props) => {
    let { item } = props;
    return (
        <ProductInfo>
            <ProductImage src={item.image}/>
            <Title>{item.product}</Title>
            <DefaultPrice>{'R$ ' + parseFloat(item.price).toFixed(2)}</DefaultPrice>
            <ProductDetailsButton>
                <NavLink to={'/product/' + item.id}>Detalhes</NavLink>
                <FiPlusCircle/>
            </ProductDetailsButton>
        </ProductInfo>
    )
}

export default Product;