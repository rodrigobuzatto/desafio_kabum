import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavContainer, MyCart } from '../styles/styles';
import logo from '../images/logo.png';
 
class Navbar extends Component {
    render() {
        return (
            <NavContainer>
                <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                <MyCart>
                    <NavLink to="/cart"><label>{this.props.items}</label>Meu carrinho</NavLink>
                </MyCart>
            </NavContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.length
    }
}

export default connect(mapStateToProps)(Navbar);