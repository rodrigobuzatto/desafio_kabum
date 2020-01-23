import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import Quantity from './Quantity';
import RemoveFromCart from './RemoveFromCart';
import AddToCart from './AddToCart';

class ShoppingCart extends Component {
    render() {
        const shoppingCart = this.props.shoppingCart.length ? (
            <div>
                {
                    this.props.shoppingCart.map((item) => {
                        return (
                            <div key={item.id}>
                                <Product item={item} />
                                <Quantity item={item} />
                                <AddToCart item={item} label="Atualizar carrinho"/>
                                <RemoveFromCart item={item} />
                            </div>
                        )
                    })
                }
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