import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
//import Filter from '../components/Filter';
import { Container, Title, ProductContainer } from '../styles/styles';

class Products extends Component {
    render() {
        const listProducts = this.props.products.length ? this.props.products.map((item) => {
            return (
                <ProductContainer key={item.id}>
                    <Product item={item}/>
                    <AddToCart item={item} />
                </ProductContainer>
            )
        }) :  (
            <Title>Produto não encontrado</Title>
        )

        return (            
            <Container>
                {listProducts}
            </Container>
        )
    }
}

const mapStoreToProps = (state) => {    
    return {
        products: state.products
    }
}

export default connect(mapStoreToProps)(Products);