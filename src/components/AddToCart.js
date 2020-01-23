import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from  '../actions/cartActions';

class AddToCart extends Component {
    handleClick = () => {
        let newItem = {
            ...this.props.item,
            addToCart: this.props.item.addToCart ? this.props.item.addToCart : 1
        }
        // this.props.item.addToCart = this.props.item.addToCart ? this.props.item.addToCart : 1;
        this.props.addToCart(newItem);
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.label}</button>
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