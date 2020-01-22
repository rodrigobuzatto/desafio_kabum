//Mock API - http(s)://5e2736756eeb44001453698e.mockapi.io/products

const initState = {
    products: [
        {
            id: 1,
            product: 'Memoria RAM',
            description: 'Memoria RAM 2 GB',
            price: 150
        },
        {
            id: 2,
            product: 'SSD Kinngston',
            description: 'SSD Kingston 256MB',
            price: 250
        },
        {
            id: 3,
            product: 'Notebook Gamer Nitro 5',
            description: 'Uma breve descrição sobre o notebook gamer nitro 5',
            price: 3500
        }
    ],
    shoppingCart: []
}

const addToCart = (state, item) => {
    let existingItem = state.shoppingCart.find(product => product.id === item.id)
    let newItem = existingItem ? (
        {
            ...existingItem,
            existingItem: existingItem.addToCart += item.addToCart
        }
    ) : item

    let newShoppingCart = [...state.shoppingCart, newItem];

    return {
        ...state,
        shoppingCart: newShoppingCart.sort((a, b) => a.id - b.id)
    }
}

const removeFromCart = (state, item) => {
    let newShoppingCart = state.shoppingCart.filter(cart => cart.id !== item.id)

    return {
        ...state,
        shoppingCart: newShoppingCart.sort((a, b) => a.id - b.id)
    }
}

const handleQuantity = (state, item) => {
    let newProducts = state.products.filter(product => product.id !== item.id)
    newProducts = [...newProducts, item]

    return {
        ...state,
        products: newProducts.sort((a, b) => a.id - b.id)
    }
}

const filter = (state, item) => {
    if(!item) {
        return {
            ...state
        }
    }

    let newProducts = (parseInt(item) ? (state.products.find(product => product.id === parseInt(item))) : (state.products.filter(product => product.product.includes(item))));

    return {
        ...state,
        products: newProducts.sort((a, b) => a.id - b.id)
    }
}

const ShoppingCartReducer = (state = initState, actions) => {
    const { type, item } = actions;
    let newState = {};
    switch(type) {
        case 'ADD_TO_CART': newState = addToCart(state, item); break;
        case 'REMOVE_FROM_CART': newState = removeFromCart(state, item); break;
        case 'ADD_QUANTITY': newState = handleQuantity(state, item); break;
        case 'REMOVE_QUANTITY': newState = handleQuantity(state, item); break;
        case 'FILTER': newState = filter(state, item); break;
        default: newState = state; break;
    }
    return newState;
}

export default ShoppingCartReducer;