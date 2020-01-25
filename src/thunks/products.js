import { productsAPIs } from '../apis/products';
import { getProducts } from '../actions/productActions';

const productsThunk = {
    getProducts: () => dispatch => {
        productsAPIs.getProducts().then(products => dispatch(getProducts(products)))
    }
}

export { productsThunk }