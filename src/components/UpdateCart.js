import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../actions/cartActions'
import { CartActions, DefaultSpan } from '../styles/styles';
import { MdSync } from 'react-icons/md';
import { withRouter } from 'react-router-dom';

class UpdateCart extends Component {
    handleClick = () => {
        let newItem = {
            ...this.props.item,
            addToCart: this.props.item.addToCart ? this.props.item.addToCart : 1
        }
        this.props.updateCart(newItem)
        this.props.history.push('/cart');
    }

    render() {
        return (
            <CartActions onClick={this.handleClick}><DefaultSpan>Atualizar Item</DefaultSpan><MdSync/></CartActions>
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
        updateCart: (item) => { dispatch(updateCart(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateCart))