import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import AddToCart from './AddToCart';
import Quantity from './Quantity';

class ProductDetails extends Component {
    render() {
        const product = this.props.product ? (
            <div key={this.props.product.id}>
                <Product item={this.props.product} />
                <Quantity item={this.props.product} />
                <AddToCart item={this.props.product} label="Adicionar ao carrinho"/>
            </div>
        ) : (
            <div>
                <h1>Produto não encontrado.</h1>
            </div>
        )
        
        return (
            <div>{product}</div>
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