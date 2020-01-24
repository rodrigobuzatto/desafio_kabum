import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
//import Filter from '../components/Filter';
import { Title } from '../styles/styles';
import { ProductsContainer, ProductItem } from '../styles/styles2';

class Products extends Component {
    render() {
        const listProducts = this.props.products.length ? this.props.products.map((item) => {
            return (
                <ProductItem key={item.id}>
                    <Product item={item}/>
                    <AddToCart item={item} />
                </ProductItem>
            )
        }) :  (
            <Title>Produto não encontrado</Title>
        )

        return (            
            <ProductsContainer>
                {listProducts}
            </ProductsContainer>
        )
    }
}

const mapStoreToProps = (state) => {    
    return {
        products: state.products
    }
}

export default connect(mapStoreToProps)(Products);