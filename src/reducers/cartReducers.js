import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const initialState = {cartItems:[]};

function cartReducer(state = initialState, action){
    switch(action.type){
        case CART_ADD_ITEM:
          return state = {
                cartItems: [...state.cartItems, action.payload]
            };
        case CART_REMOVE_ITEM:
            return{cartItems: state.cartItems.filter(x => x.product !== action.payload)}
        //     const item = action.payload;
        //     const product = state.cartItems.find(x => x.product === item.product);
        //     if(product){
        // return {
        //     cartItems: 
        //     state.cartItems.map(x => x.product === product.product?item: x)}
        //     }
        //     return {cartItems: [...state.cartItems, item]};
            default:
                return state;
    }
}
export {cartReducer};