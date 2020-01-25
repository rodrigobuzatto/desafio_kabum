const productsAPIs = {
    getProducts: () => fetch('http://5e2736756eeb44001453698e.mockapi.io/products').then(res => res.json())
}

export { productsAPIs }