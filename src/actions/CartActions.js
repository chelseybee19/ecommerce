import Axios from "axios";
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING } from "../constants/cartConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
    
try {
   const {data} = await Axios.get("https://the-soso-artist.herokuapp.com/api/products/" + productId);
   dispatch({type: CART_ADD_ITEM, payload:{
       product:data._id,
       name:data.name,
       stripeId:data.stripeId,
       image:data.image,
       price:data.price,
       qty,
   }
});
const { cart: { cartItems } } = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));

}catch (error){
    console.log(error); 
}
}
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
const saveShipping = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING, payload: data });
  }
export {addToCart, removeFromCart, saveShipping};
