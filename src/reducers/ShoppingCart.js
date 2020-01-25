const initState = {
    products: [],
    shoppingCart: []
}

const addToCart = (state, item) => {
    let quantity = state.shoppingCart.filter(cart => cart.id === item.id)
                                       .reduce((total, cart) => total += cart.addToCart, 0)

    let newItem = {
        ...item,
        addToCart: quantity + item.addToCart
    }

    let newShoppingCart = state.shoppingCart.filter(cart => cart.id !== item.id)
    newShoppingCart = [...newShoppingCart, newItem]
        
    let products = state.products.filter(product => product.id !== item.id)
    let newProduct = {
        ...item,
        addToCart: 1
    }
    products = [...products, newProduct]

    return {
        ...state,
        shoppingCart: newShoppingCart.sort((a,b) => a.id - b.id),
        products: products.sort((a, b) => a.id - b.id)
    }
}

const updateCart = (state, item) => {    
    let newShoppingCart = state.shoppingCart.filter(cart => cart.id !== item.id)
    let newItem = state.products.find(product => product.id === item.id)

    newShoppingCart = [...newShoppingCart, newItem]

    let products = state.products.filter(product => product.id !== item.id)
    let newProduct = {
        ...item,
        addToCart: 1
    }
    products = [...products, newProduct]

    return {
        ...state,
        shoppingCart: newShoppingCart.sort((a, b) => a.id - b.id),
        products: products.sort((a, b) => a.id - b.id)
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
    const { initState } = state;

    if(!item) {
        return {
            ...state,
            products: initState
        }
    }

    let newProducts = (parseInt(item) ? (initState.filter(product => product.id === item)) : (initState.filter(product => product.product.toLowerCase().includes(item.toLowerCase()))));

    return {
        ...state,
        products: newProducts.sort((a, b) => a.id - b.id)
    }
}

const getProducts = (state, item) => {
    return {
        ...state,
        products: item,
        initState: item
    }
}

const ShoppingCartReducer = (state = initState, actions) => {
    const { type, item } = actions;
    let newState = {};
    switch(type) {
        case 'ADD_TO_CART': newState = addToCart(state, item); break;
        case 'UPDATE_CART': newState = updateCart(state, item); break;
        case 'REMOVE_FROM_CART': newState = removeFromCart(state, item); break;
        case 'ADD_QUANTITY': newState = handleQuantity(state, item); break;
        case 'REMOVE_QUANTITY': newState = handleQuantity(state, item); break;
        case 'FILTER': newState = filter(state, item); break;
        case 'GET_PRODUCTS': newState = getProducts(state, item); break;
        default: newState = state; break;
    }
    return newState;
}

export default ShoppingCartReducer;