import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import Quantity from './Quantity';
import RemoveFromCart from './RemoveFromCart';
import UpdateCart from './UpdateCart';
import { Container, BackToCartButton, Title, ProductContainer } from '../styles/styles';

class ShoppingCart extends Component {
    render() {
        const shoppingCart = this.props.shoppingCart.length ? (
            <Container>                
                {
                    this.props.shoppingCart.map((item) => {
                        return (
                            <ProductContainer key={item.id}>
                                <Product item={item} />
                                <Quantity item={item} />
                                <UpdateCart item={item} />
                                <RemoveFromCart item={item} />
                            </ProductContainer>
                        )
                    })
                }
            </Container>
        ) : (
            <ProductContainer>
                <Title>Carrinho vazio</Title>
                <BackToCartButton>
                    <NavLink to="/">Voltar as compras</NavLink>
                </BackToCartButton>
            </ProductContainer>
        );
        return (
            <Container>
                {shoppingCart}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps)(ShoppingCart);