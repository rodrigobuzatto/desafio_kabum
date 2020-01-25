import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { CartActions, DefaultSpan } from '../styles/styles';
import { MdRemoveShoppingCart } from 'react-icons/md';

class RemoveFromCart extends Component {
    handleClick = () => {
        this.props.item.addToCart = 1
        this.props.removeFromCart(this.props.item)
    }

    render() {
        return (
            <CartActions onClick={this.handleClick}><DefaultSpan>Remover do carrinho</DefaultSpan><MdRemoveShoppingCart/></CartActions>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => { dispatch(removeFromCart(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFromCart)