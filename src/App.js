import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import Product from './components/ProductDetails';
// import ProductsList from './components/ProductsList';
import Filter from './components/Filter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Filter />
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route path="/cart" component={ShoppingCart}/>
          <Route path="/product/:product_id" component={Product}/>
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

export default App;
