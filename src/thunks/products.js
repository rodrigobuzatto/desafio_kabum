import { productsAPIs } from '../apis/products';

const productsThunk = {
    getProducts: () => {
        return (dispatch) => {
            dispatch({
                type: 'GET_PRODUCTS'
            })
        }
    }
}

export { productsThunk }