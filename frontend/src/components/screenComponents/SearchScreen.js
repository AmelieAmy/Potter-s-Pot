import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../../redux_files/actions/productActions';
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';
import Product from '../sharedComponents/product';

const SearchScreen = (props) => {

    const { name = 'all', category = 'all' } = useParams();

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);

    const { loading, error, products } = productList;

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(
            listProducts({
                name: name !== 'all' ? name : '',
                category: category !== 'all' ? category : '',
            })
        );
    }, [category, dispatch, name]);
  
    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
        return `/search/category/${filterCategory}/name/${filterName}`;
    };

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
                    {loadingCategories ? (
                        <LoadingBox></LoadingBox>
                    ) : errorCategories ? (
                        <MessageBox variant="danger">{errorCategories}</MessageBox>
                    ) : (
                        <ul>
                            {categories.map((c) => (
                                <li key={c}>
                                <Link
                                    className={c === category ? 'active' : ''}
                                    to={getFilterUrl({ category: c })}
                                >
                                    {c}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    )}
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