import Axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL
} from '../constants/productConstants';

export const listProducts = ({
        name = '', 
        category = '', 
        min = 0,
        max = 0,
        rating = 0,
        order = '',
    }) => async (dispatch) => { 
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });

    try {
        const { data } = await Axios.get(`/api/products?name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

export const listProductCategories = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_CATEGORY_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/products/categories`);
        dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
    }
};
  
export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    try {
        const { data } = await Axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
        } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};