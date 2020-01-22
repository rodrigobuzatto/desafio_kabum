import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

class RemoveFromCart extends Component {
    handleClick = () => {
        this.props.item.addToCart = 1
        this.props.removeFromCart(this.props.item)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Remover do carrinho</button>
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