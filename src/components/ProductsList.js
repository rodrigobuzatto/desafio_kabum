import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductsList extends Component {
    render() {
        const productsList = this.props.products.length ? this.props.products.map((item) => {
            return (
                <li>
                    <NavLink to={'/product/' + item.id} key={item.id}>{item.product}</NavLink>
                </li>
            )
        }) : (
            <li>Produtos não encontrados.</li>
        )
        return (
            <div>
                <ul>
                    {productsList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.sort((a, b) => a.product - b.product)
    }
}

export default connect(mapStateToProps)(ProductsList)