import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';
import {productDetailReducer} from './reducers/productDetails';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState= {cart: {cartItems}, userSignin: {userInfo}};
const reducer= combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});

// const composeEnhancer = window.__REDUC_DEVTOOLS_EXTENSION_COMPOSE__  ;

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
