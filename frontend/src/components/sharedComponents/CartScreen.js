import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux_files/actions/cartActions';

const CartScreen = (props) => {

    const productId = props.match.params.id;

    const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, []);

    return (
        <div>
            <h1>Panier</h1>
            <p>
                Ajouté au panier : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    );
}

export default CartScreen;