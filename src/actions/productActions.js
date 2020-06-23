import axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
  PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST } from "../constants/productConstants";
import Axios from 'axios';

const listProducts = () =>(dispatch) => {

    dispatch({type:PRODUCT_LIST_REQUEST});
    axios.get("https://the-soso-artist.herokuapp.com/api/products").then (({data})=>
    dispatch({type:PRODUCT_LIST_SUCCESS, payload: data})
    ).catch(function(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
        });
};

const detailsProduct = (productId) => (dispatch) => {

    dispatch({type:PRODUCT_DETAILS_REQUEST, payload: productId});
    axios.get("https://the-soso-artist.herokuapp.com/api/products/" + productId).then (({data})=>
    dispatch({type:PRODUCT_DETAILS_SUCCESS, payload: data})
    ).catch(function(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.message});
        });
};

const saveProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
      const { userSignin: { userInfo } } = getState();
      if (!product._id) {
        const { data } = await Axios.post('https://the-soso-artist.herokuapp.com/api/products', product, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      } else {
        const { data } = await Axios.put('https://the-soso-artist.herokuapp.com/api/products/' + product._id, product, {
          headers: {
            'Authorization': 'Bearer ' + userInfo.token
          }
        });
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
      }
  
    } catch (error) {
  
      dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
  };

  const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
      const { userSignin: { userInfo } } = getState();
      dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
      const { data } = await axios.delete("https://the-soso-artist.herokuapp.com/api/products/" + productId, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token
        }
      });
      dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
      dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  
    }
  }

export {listProducts, detailsProduct, saveProduct, deleteProduct};