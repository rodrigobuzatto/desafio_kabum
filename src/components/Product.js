import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
    let { item } = props;
    return (
        <div>
            <h1>{item.product}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <NavLink to={'/product/' + item.id}>Detalhes do produto</NavLink>
        </div>
    )
}

export default Product;