import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantity, removeQuantity } from '../actions/productActions';
import { QuantityButton, QuantityLabel, QuantityContainer } from '../styles/styles';

class Quantity extends Component {
    
    quantity = this.props.item.addToCart ? this.props.item.addToCart : 1;

    handleClickAdd = () => {
        this.quantity++;
        let newItem = {
            ...this.props.item,
            addToCart: this.quantity
        }
        this.props.addQuantity(newItem);
    }

    handleClickRemove = () => {
        if(this.quantity > 1) {
            this.quantity--;
            let newItem = {
                ...this.props.item,
                addToCart: this.quantity
            }
            this.props.removeQuantity(newItem);
        }
    }

    render() {
        return (            
            <QuantityContainer>                
                <QuantityButton onClick={this.handleClickRemove}>-</QuantityButton>
                <QuantityLabel>{this.quantity}</QuantityLabel>
                <QuantityButton onClick={this.handleClickAdd}>+</QuantityButton>
            </QuantityContainer>
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