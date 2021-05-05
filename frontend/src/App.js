import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeScreen from './components/fixedComponents/HomeScreen';
import SigninScreen from './components/fixedComponents/SigninScreen';
import CartScreen from './components/sharedComponents/CartScreen';
import ProductScreen from './components/sharedComponents/ProductScreen';


const App = () => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link to="/" className="brand">Potter's Pot</Link>
                    </div>
                    <div>
                        <Link to="/cart">Cart
                        {cartItems.length > 0 && (
                            <span className="badge">{cartItems.length}</span>
                        )}
                        </Link>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/signin" component={SigninScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
