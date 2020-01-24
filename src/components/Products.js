import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { Title } from '../styles/styles';
import { ProductsContainer, ProductsListContainer, ProductDetailContainerError, ProductItem } from '../styles/styles';

class Products extends Component {
    render() {
        const listProducts = this.props.products.length ? (
            <ProductsListContainer>
            {
                this.props.products.map((item) => {
                    return (
                        <ProductItem key={item.id}>
                            <Product item={item}/>
                            <AddToCart item={item} />
                        </ProductItem>
                    )
                })
            }
            </ProductsListContainer>
            ) :  (
            <ProductDetailContainerError>
                <Title>Produto não encontrado</Title>
            </ProductDetailContainerError>
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