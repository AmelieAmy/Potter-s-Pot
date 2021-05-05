import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeScreen from './components/fixedComponents/HomeScreen';
import RegisterScreen from './components/fixedComponents/RegisterScreen';
import ShippingAdressScreen from './components/fixedComponents/ShippingAdressScreen';
import SigninScreen from './components/fixedComponents/SigninScreen';
import CartScreen from './components/sharedComponents/CartScreen';
import ProductScreen from './components/sharedComponents/ProductScreen';
import { signout } from './redux_files/actions/userActions';


const App = () => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link to="/" className="brand">Potter's Pot</Link>
                    </div>
                    <div>
                        <Link to="/cart">Panier
                        {cartItems.length > 0 && (
                            <span className="badge">{cartItems.length}</span>
                        )}
                        </Link>
                        {
                            userInfo ?
                            (
                                <div className="dropdown">
                                    <Link to="#">
                                        {userInfo.name} <i className="fa fa-caret-down"></i>
                                    </Link>
                                    <ul className="dropdown-content">
                                        <Link to="#signout" onClick={signoutHandler}>
                                            Déconnexion
                                        </Link>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/signin">Connexion</Link>
                            )
                        }
                    </div>
                </header>
                <main>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/signin" component={SigninScreen}></Route>
                    <Route path="/register" component={RegisterScreen}></Route>
                    <Route path="/shipping" component={ShippingAdressScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">Tous droits réservés</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
