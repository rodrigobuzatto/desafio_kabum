import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from './Filter';
import { MenuTitle, MenuProducts, MenuItem, MenuItemMessage } from '../styles/styles';
import { ProductsListContainer } from '../styles/styles';

class ProductsList extends Component {
    render() {
        const productsList = this.props.products.length ? this.props.products.map((item) => {
            return (
                <MenuItem key={item.id}>
                    <NavLink to={'/product/' + item.id}>{item.product}</NavLink>
                </MenuItem>
            )
        }) : (
            <MenuItemMessage>Produtos não encontrados.</MenuItemMessage>
        )
        return (
            <ProductsListContainer>
                <MenuTitle>Produtos </MenuTitle>
                <Filter />
                <MenuProducts>
                    {productsList}
                </MenuProducts>
            </ProductsListContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.sort((a, b) => a.product - b.product)
    }
}

export default connect(mapStateToProps)(ProductsList)