import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from  '../actions/cartActions';

class AddToCart extends Component {
    handleClick = () => {
        this.props.item.addToCart = this.props.item.addToCart ? this.props.item.addToCart : 1;
        this.props.addToCart(this.props.item);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Adicionar ao carrinho</button>
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