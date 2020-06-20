import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING } from "../constants/cartConstants";

const initialState = {cartItems:[]};

function cartReducer(state = initialState, action){
    switch(action.type){
        case CART_ADD_ITEM:
          return state = {
                cartItems: [...state.cartItems, action.payload]
            };
        case CART_REMOVE_ITEM: 
            const item = action.payload // => ProductID
            // find product
            let updateProduct = state.cartItems.find(x => x.product === item);
            //changing the quantity of the product product.qty -=1 
                //update the state of your redux store with product
            if(updateProduct.qty === 1){
                return {
                    cartItems: state.cartItems.filter(x => x.product !== updateProduct.product)
                            }
            }
            else {
                updateProduct.qty -=1;
                return {
                    cartItems: state.cartItems.map(x => x.product === updateProduct.product ? updateProduct : x)
                            }
            }
            case CART_SAVE_SHIPPING:
                return { ...state, shipping: action.payload };
            default:
                return state;
    }
}
export {cartReducer};