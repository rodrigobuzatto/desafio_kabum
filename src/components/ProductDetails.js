import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import AddToCart from './AddToCart';
import Quantity from './Quantity';
import { Title } from '../styles/styles';
import { ProductsContainer, ProductDetail } from '../styles/styles2';

class ProductDetails extends Component {
    render() {
        const product = this.props.product ? (
            <ProductDetail key={this.props.product.id}>
                <Product item={this.props.product} />
                <Quantity item={this.props.product} />
                <AddToCart item={this.props.product} />
            </ProductDetail>
        ) : (
            <ProductDetail>
                <Title>Produto não encontrado.</Title>
            </ProductDetail>
        )
        
        return (
            <ProductsContainer>{product}</ProductsContainer>
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