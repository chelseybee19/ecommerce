import axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

const listProducts = () =>(dispatch) => {

    dispatch({type:PRODUCT_LIST_REQUEST});
    axios.get("/api/products").then (({data})=>
    dispatch({type:PRODUCT_LIST_SUCCESS, payload: data})
    ).catch(function(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
        });
};

const detailsProduct = (productId) => (dispatch) => {

    dispatch({type:PRODUCT_DETAILS_REQUEST, payload: productId});
    axios.get("/api/products/" + productId).then (({data})=>
    dispatch({type:PRODUCT_DETAILS_SUCCESS, payload: data})
    ).catch(function(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
        });
}

export {listProducts, detailsProduct};