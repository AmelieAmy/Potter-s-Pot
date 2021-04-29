import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import HomeScreen from './components/fixedComponents/HomeScreen';
import ProductScreen from './components/fixedComponents/ProductScreen';


const App = () => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Potter's Pot</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                    </div>
                </header>
                <main>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
