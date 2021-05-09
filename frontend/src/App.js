import React, { useEffect, useState } from 'react';
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
import SearchBox from './components/sharedComponents/searchBox';
import SearchScreen from './components/screenComponents/SearchScreen';
import LoadingBox from './components/sharedComponents/loadingBox';
import MessageBox from './components/sharedComponents/messageBox';
import { listProductCategories } from './redux_files/actions/productActions';


const App = () => {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
    }

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;

    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);
    

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <button
                        type="button"
                        className="open-sidebar"
                        onClick={() => setSidebarIsOpen(true)}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link to="/" className="brand">Potter's Pot</Link>
                    </div>
                    <div>
                        <Route render={({history}) => <SearchBox history={history}></SearchBox>}></Route>
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
                <aside className={sidebarIsOpen ? 'open' : ''}>
                    <ul className="categories">
                        <li>
                            <strong>Catégories</strong>
                            <button onClick={() => setSidebarIsOpen(false)} className="close-sidebar" type="button">
                                <i className="fa fa-times"></i>
                            </button>
                        </li>
                        {loadingCategories ? (
                            <LoadingBox></LoadingBox>
                        ) : errorCategories ? (
                            <MessageBox variant="danger">{errorCategories}</MessageBox>
                        ) : (
                            categories.map((c) => (
                                <li key={c}>
                                    <Link to={`/search/category/${c}`} onClick={() => setSidebarIsOpen(false)}>
                                        {c}
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>
                </aside>
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
                    <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
                    <Route path="/search/category/:category" component={SearchScreen} exact></Route>
                    <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
                    <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order" component={SearchScreen} exact></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">Tous droits réservés</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
