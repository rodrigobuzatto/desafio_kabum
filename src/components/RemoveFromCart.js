import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { CartActions } from '../styles/styles';

class RemoveFromCart extends Component {
    handleClick = () => {
        this.props.item.addToCart = 1
        this.props.removeFromCart(this.props.item)
    }

    render() {
        return (
            <CartActions onClick={this.handleClick}>Remover do carrinho</CartActions>
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