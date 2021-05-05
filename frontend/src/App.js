import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HomeScreen from './components/fixedComponents/HomeScreen';
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
                        <Link to="/cart">Cart
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
                                            Sign Out
                                        </Link>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/signin">Sign In</Link>
                            )
                        }
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
