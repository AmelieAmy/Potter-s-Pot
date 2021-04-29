import React, {useEffect} from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Rating from '../sharedComponents/rating';
import data from '../../datas/data';

const ProductScreen = () => {
    const {id} = useParams();
    const urlId = parseInt(id);
    const product = data.products.find((x) => x._id === urlId);

    if (!product) {
        return <div> Product Not Found</div>;
    }
    else {
        return(
            <div>
                <Link to="/">Back to result</Link>
                <div className="row top">
                    <div className="col-2">
                        <img className="large" src={product.image} alt={product.name} />
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating
                                    rating={product.rating}
                                    numReviews={product.numReviews} >
                                </Rating>
                            </li>
                            <li>
                                Prix : {product.price}  €
                            </li>
                            <li>
                                Description:
                                <p>{product.description}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                <div>Prix</div>
                                <div className="price">{product.price} €</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                <div>Status</div>
                                <div>
                                    {product.countInStock > 0 ? (
                                    <span className="success">Disponible</span>
                                    ) : (
                                    <span className="error">Rupture de stock</span>
                                    )}
                                </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Ajouter au panier</button>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductScreen;