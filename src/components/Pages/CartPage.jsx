import React, { useEffect } from 'react';
import './CartPage.css';
import { removeFromCart } from '../../actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartPage(props){
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    console.log(props.location, "hello!!!!")
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
      }

    useEffect(() => {
        // if(productId){
        //     dispatch(addToCart(productId, qty));
        // }
    }, [dispatch, productId, qty]);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
      }

    return <div className="cart">
        <div className="cart-list">
            <ul className="list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        price
                    </div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        cart is empty
                    </div>
                    :
                    cartItems.map(item =>
                    <div>
                        <div className="cart-image">
                            <img src={item.image} alt="product"/>
                        </div>
                        <div className="cart-name">
                            {item.name}
                        </div>
                        <div>
                          
                            <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>
                                Delete
                            </button>
                        </div>
                        <div className="cart-price">
                            {item.price}
                        </div>
                    </div>

                    )
                }
            </ul>
        </div>
        <div className="cart-action">
        <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
        </button>

        </div>

    </div>

}

export default CartPage