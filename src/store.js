import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productListReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import {productDetailReducer} from './reducers/productDetails';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState= {cart: {cartItems}, userSignin: {userInfo}};
const reducer= combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
});

// const composeEnhancer = window.__REDUC_DEVTOOLS_EXTENSION_COMPOSE__  ;

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
