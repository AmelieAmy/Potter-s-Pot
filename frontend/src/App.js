import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import { signout } from './redux_files/actions/userActions';

import HomeScreen from './components/screenComponents/HomeScreen';
import PaymentMethodScreen from './components/screenComponents/PaymentMethodScreen';
import RegisterScreen from './components/screenComponents/RegisterScreen';
import ShippingAdressScreen from './components/screenComponents/ShippingAdressScreen';
import SigninScreen from './components/screenComponents/SigninScreen';
import CartScreen from './components/screenComponents/CartScreen';
import ProductScreen from './components/screenComponents/ProductScreen';
import PlaceOrderScreen from './components/screenComponents/PlaceOrderScreen';
import OrderScreen from './components/screenComponents/OrderScreen';
import OrderHistoryScreen from './components/screenComponents/OrderHistoryScreen';
import ProfileScreen from './components/screenComponents/ProfileScreen';
import PrivateRoute from './components/sharedComponents/privateRoute';


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
                        <Link to="/cart">
                            Panier
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
                                        <li>
                                            <Link to="/profile" >
                                                Profil
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/orderhistory" >
                                                Historique de commande
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#signout" onClick={signoutHandler}>
                                                Déconnexion
                                            </Link>
                                        </li>
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
                    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
                    <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">Tous droits réservés</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
