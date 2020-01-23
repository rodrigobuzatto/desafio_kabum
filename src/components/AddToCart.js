import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from  '../actions/cartActions';
import { CartActions } from '../styles/styles';

class AddToCart extends Component {
    handleClick = () => {
        let newItem = {
            ...this.props.item,
            addToCart: this.props.item.addToCart ? this.props.item.addToCart : 1
        }        
        this.props.addToCart(newItem);
    }

    render() {
        return (
            <CartActions onClick={this.handleClick}>Adicionar ao carrinho</CartActions>
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
        addToCart: (item) => { dispatch(addToCart(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);