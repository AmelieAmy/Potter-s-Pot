import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../../redux_files/actions/productActions';
import { prices, ratings } from '../../utils';
import LoadingBox from '../sharedComponents/loadingBox';
import MessageBox from '../sharedComponents/messageBox';
import Product from '../sharedComponents/product';
import Rating from '../sharedComponents/rating';

const SearchScreen = (props) => {

    const { 
        name = 'all', 
        category = 'all', 
        min = 0,
        max = 0,
        rating = 0,
        order = 'newest',
    } = useParams();

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
                min,
                max,
                rating,
                order,
            })
        );
    }, [category, dispatch, name, min, max, rating, order]);
  
    const getFilterUrl = (filter) => {
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
        const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
        const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
        const filterRating = filter.rating || rating;
        const sortOrder = filter.order || order;
        return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}`;
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
                <div>
                    Trier par{' '}
                    <select
                        value={order}
                        onChange={(e) => {
                        props.history.push(getFilterUrl({ order: e.target.value }));
                        }}
                    >
                        <option value="newest">Nouveautés</option>
                        <option value="lowest">Prix: Petit à Grand</option>
                        <option value="highest">Prix: Grand à Petit</option>
                        <option value="toprated">Avis</option>
                    </select>
                </div>
            </div>

            <div className="row top">
                <div className="col-1">
                    <h3>Catégories</h3>
                    <div>
                        {loadingCategories ? (
                            <LoadingBox></LoadingBox>
                        ) : errorCategories ? (
                            <MessageBox variant="danger">{errorCategories}</MessageBox>
                        ) : (
                            <ul>
                                <li>
                                    <Link to={getFilterUrl({ category: 'all' })} className={'all' === category ? 'active' : ''}>
                                        Tous
                                    </Link>
                                </li>
                                {categories.map((c) => (
                                    <li key={c}>
                                        <Link to={getFilterUrl({ category: c })} className={c === category ? 'active' : ''}>
                                            {c}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <h3>Prix</h3>
                        <ul>
                            {prices.map((p) => (
                                <li key={p.name}>
                                    <Link to={getFilterUrl({ min: p.min, max: p.max })} className={`${p.min}-${p.max}` === `${min}-${max}` ? 'active' : ''}>
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Avis</h3>
                        <ul>
                            {ratings.map((r) => (
                                <li key={r.name}>
                                    <Link to={getFilterUrl({ rating: r.rating })} className={`${r.rating}` === `${rating}` ? 'active' : ''}>
                                        <Rating caption={' ou plus'} rating={r.rating}></Rating>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
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