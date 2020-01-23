import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import AddToCart from './AddToCart';
import Quantity from './Quantity';
import { Title, ProductContainer, Container } from '../styles/styles';

class ProductDetails extends Component {
    render() {
        const product = this.props.product ? (
            <ProductContainer key={this.props.product.id}>
                <Product item={this.props.product} />
                <Quantity item={this.props.product} />
                <AddToCart item={this.props.product} />
            </ProductContainer>
        ) : (
            <ProductContainer>
                <Title>Produto não encontrado.</Title>
            </ProductContainer>
        )
        
        return (
            <Container>{product}</Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.product_id;
    return {
        product: state.products.find(product => (product.id === parseInt(id)))
    }
}

export default connect(mapStateToProps)(ProductDetails);