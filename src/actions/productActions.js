export const addQuantity = (item) => {
    return {
        type: 'ADD_QUANTITY',
        item
    }
}

export const removeQuantity = (item) => {
    return {
        type: 'REMOVE_QUANTITY',
        item
    }
}

export const filterByName = (search) => {
    return {
        type: 'FILTER_BY_NAME',
        item: search
    }
}

export const filterById = (id) => {
    return {
        type: 'FILTER_BY_ID',
        item: id
    }
}

export const filter = (item) => {
    return {
        type: 'FILTER',
        item
    }
}

export const getProducts = (products)  => {
    return {
        type: 'GET_PRODUCTS',
        item: products
    }
}