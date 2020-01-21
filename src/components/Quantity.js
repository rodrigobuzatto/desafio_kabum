import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantity, removeQuantity } from '../actions/productActions';

class Quantity extends Component {

    quantity = 1;

    handleClickAdd = () => {
        this.quantity++;
        this.props.product.addToCart = this.quantity;
        this.props.addQuantity(this.props.product);
    }

    handleClickRemove = () => {
        this.quantity--;
        this.props.product.addToCart = this.quantity;
        this.props.removeQuantity(this.props.product);
    }

    render() {        
        return (
            <div>
                <button onClick={this.handleClickRemove} disabled={this.quantity === 0}>-</button>
                <label>{this.quantity}</label>
                <button onClick={this.handleClickAdd}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.products.find(product => product.id === ownProps.item.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuantity: (item) => { (dispatch(addQuantity(item))) },
        removeQuantity: (item) => { (dispatch(removeQuantity(item))) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quantity)