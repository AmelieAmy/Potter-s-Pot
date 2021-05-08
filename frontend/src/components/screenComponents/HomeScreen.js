import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import data from '../../datas/data.js'
import Product from '../sharedComponents/product'
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';
import { listProducts } from '../../redux_files/actions/productActions';

const HomeScreen = () => {
    
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts({}));
    }, []);

    return (  
        <div>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox variant="danger"> {error} </MessageBox>
            ) : (
                <div className="row center">
                    { products.map(product => (
                        <Product key={product._id} product={product} />
                    )) }
                </div>
            )}            
        </div>
    )
}

export default HomeScreen
