import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../redux_files/actions/cartActions';
import CheckoutSteps from '../sharedComponents/checkoutSteps'

const ShippingAdressScreen = (props) => {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        );
        props.history.push('/payment');
    };

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Adresse de livraison</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Nom</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Entrer votre nom"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Adresse</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Entrer votre adresse"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">Ville</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Entrer votre ville"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Code Postal</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Entrer votre code postal"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Pays</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Entrer votre pays"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continuer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ShippingAdressScreen
