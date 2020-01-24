import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import Quantity from './Quantity';
import { ProductsContainer, ProductDetail, ProductImage, Title, DefaultParagraph, ProductDetailsInfo, ProductDetailContainer, ProductDetailContainerError, ProductActions, DefaultPrice } from '../styles/styles';
import image from '../images/logo.jpg';


class ProductDetails extends Component {
    render() {
        const product = this.props.product ? (
            <ProductDetailContainer>
                <ProductDetail key={this.props.product.id}>
                    <ProductImage src={image} />
                    <ProductDetailsInfo>
                        <Title>{this.props.product.product}</Title>
                        <DefaultParagraph>{this.props.product.description}</DefaultParagraph>
                        <DefaultPrice>{ 'R$ ' + (this.props.product.price * (this.props.product.addToCart || 1)).toFixed(2) }</DefaultPrice>
                    </ProductDetailsInfo>
                    <ProductActions>
                        <Quantity item={this.props.product} />
                        <AddToCart item={this.props.product} />
                    </ProductActions>
                </ProductDetail>
                
            </ProductDetailContainer>
        ) : (
            <ProductDetailContainerError>
                <Title>Produto não encontrado.</Title>
            </ProductDetailContainerError>
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