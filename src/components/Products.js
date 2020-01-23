import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import Filter from '../components/Filter';

class Products extends Component {
    render() {
        const listProducts = this.props.products.length ? this.props.products.map((item) => {
            return (
                <div key={item.id}>
                    <Product item={item}/>
                    <AddToCart item={item} />
                </div>
            )
        }) :  (
            <div>
                <h1>Produto não encontrado</h1>
            </div>
        )

        return (
            <div>
                <Filter />
                {listProducts}
            </div>
        )
    }
}

const mapStoreToProps = (state) => {    
    return {
        products: state.products
    }
}

export default connect(mapStoreToProps)(Products);