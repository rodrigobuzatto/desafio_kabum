import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Navbar extends Component {
    render() {
        return (
            <nav>
            <NavLink to="/">Produtos</NavLink>
            <NavLink to="/cart">Meu carrinho<label>{this.props.items}</label></NavLink>
        </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.length
    }
}

export default connect(mapStateToProps)(Navbar);