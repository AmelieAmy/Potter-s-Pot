import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeScreen from './components/screenComponents/HomeScreen';
import PaymentMethodScreen from './components/screenComponents/PaymentMethodScreen';
import RegisterScreen from './components/screenComponents/RegisterScreen';
import ShippingAdressScreen from './components/screenComponents/ShippingAdressScreen';
import SigninScreen from './components/screenComponents/SigninScreen';
import CartScreen from './components/screenComponents/CartScreen';
import ProductScreen from './components/screenComponents/ProductScreen';
import { signout } from './redux_files/actions/userActions';
import PlaceOrderScreen from './components/screenComponents/PlaceOrderScreen';
import OrderScreen from './components/screenComponents/OrderScreen';


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
                    <Route path="/payment" component={PaymentMethodScreen}></Route>
                    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                    <Route path="/order/:id" component={OrderScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">Tous droits réservés</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
