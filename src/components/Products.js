import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { Title } from '../styles/styles';
import { ProductsContainer, ProductsListContainer, ProductDetailContainerError, ProductItem, ProductsList } from '../styles/styles';
import Filter from '../components/Filter';
import { productsThunk } from '../thunks/products';

class Products extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const listProducts = this.props.products.length ? (
            <ProductsList>
                <Filter />
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
            </ProductsList>
            ) :  (
            <ProductsList>
                <Filter />            
                <ProductDetailContainerError>
                    <Title>Produtos não encontrados.</Title>
                </ProductDetailContainerError>
            </ProductsList>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => { dispatch(productsThunk.getProducts()) }
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Products);