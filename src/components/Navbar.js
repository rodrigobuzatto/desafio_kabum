import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavbarContainer, MyCart, ProductListButton } from '../styles/styles';
import logo from '../images/logo.png';
 
class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                <ProductListButton>
                    <NavLink to="/">Listagem de Produtos</NavLink>
                </ProductListButton>
                <MyCart>
                    <NavLink to="/cart">Meu carrinho<label>{this.props.items}</label></NavLink>
                </MyCart>
            </NavbarContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.length
    }
}

export default connect(mapStateToProps)(Navbar);