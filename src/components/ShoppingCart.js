import React, { Component } from 'react';
import { connect } from 'react-redux';
import Quantity from './Quantity';
import RemoveFromCart from './RemoveFromCart';
import UpdateCart from './UpdateCart';
import { ShoppingCartContainer, ShoppingCartDetail, ProductImage, Title, DefaultParagraph, ProductDetailsInfo, ShoppingCartDetailContainer, ProductActions, DefaultPrice, SubTotalContainer, SubTotalInfo, PageTitle } from '../styles/styles';
import BackToShopping from './BackToShopping';

class ShoppingCart extends Component {
    render() {
        const shoppingCart = this.props.shoppingCart.length ? (
            <ShoppingCartDetailContainer>                
                {
                    this.props.shoppingCart.map((item) => {
                        return (
                            <ShoppingCartDetail key={item.id}>
                                <ProductImage src={item.image}/>
                                <ProductDetailsInfo>
                                    <Title>{item.product}</Title>
                                    <DefaultParagraph>{item.description}</DefaultParagraph>
                                    <DefaultPrice>{ 'R$ ' + (parseFloat(item.price) * (item.addToCart || 1)).toFixed(2) }</DefaultPrice>
                                </ProductDetailsInfo>
                                <ProductActions>
                                    <Quantity item={item} />
                                    <UpdateCart item={item} />
                                    <RemoveFromCart item={item} />
                                    <BackToShopping />
                                </ProductActions>
                            </ShoppingCartDetail>
                        )
                    })
                }
            </ShoppingCartDetailContainer>
        ) : (
            <ShoppingCartDetailContainer>
                <Title>Carrinho vazio</Title>
                <BackToShopping />
            </ShoppingCartDetailContainer>
        );


        const totalCartValue = this.props.shoppingCart.length ? (
            this.props.shoppingCart.map(item => item).reduce((total, item) => total += (parseFloat(item.price) * item.addToCart), 0)
        ) : (
            0
        );

        return (
            <ShoppingCartContainer>
                <PageTitle>Carrinho de compras</PageTitle>
                {shoppingCart}
                <SubTotalContainer>
                    <SubTotalInfo>
                        <DefaultPrice>{'Total da compra: R$ ' + totalCartValue.toFixed(2)}</DefaultPrice>
                    </SubTotalInfo>
                </SubTotalContainer>
            </ShoppingCartContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps)(ShoppingCart);