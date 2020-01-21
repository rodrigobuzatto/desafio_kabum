import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import Quantity from './Quantity';

class ShoppingCart extends Component {    
    shoppingCartItems = this.props.shoppingCart.length ? (
        this.props.shoppingCart.map((item) => {
            <div>
                <Product item={item} />
                <Quantity item={item} />
            </div>
        })
    ) : []

    render() {
        const shoppingCart = this.props.shoppingCart.length ? (
            <div>
                <h1>{this.shoppingCartItems}</h1>
            </div>
        ) : (
            <div>
                <h1>Carrinho vazio</h1>
                <NavLink to="/">Voltar as compras</NavLink>
            </div>
        );
        return (
            <div>
                {shoppingCart}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps)(ShoppingCart);