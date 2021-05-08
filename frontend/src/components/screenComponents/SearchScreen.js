import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../redux_files/actions/productActions';
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';
import Product from '../sharedComponents/product';

const SearchScreen = (props) => {

    const { name = 'all' } = useParams();

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);

    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({ name: name !== 'all' ? name : '' }));
    }, [dispatch, name]);


    return (
        <div>
            <div className="row">
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>{products.length} Résultats</div>
                )}
            </div>
            <div className="row top">
                <div className="col-1">
                    <h3>Filtres</h3>
                    <ul>
                        <li>Catégorie 1</li>
                    </ul>
                </div>
                <div className="col-3">
                    {loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                            {products.length === 0 && (
                                <MessageBox>Aucun article trouvé</MessageBox>
                            )}
                            <div className="row center">
                                {products.map((product) => (
                                <Product key={product._id} product={product}></Product>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default SearchScreen;