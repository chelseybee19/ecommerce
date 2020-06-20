import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './ProductPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import { addToCart } from '../../actions/CartActions';


function ProductPage (props) {
    let [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails) ;
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));

        return () => {    
        };
    }, [dispatch, props.match.params.id] );

    const handleAddToCart = () => {
        console.log(+qty, "this is the qty")
        dispatch(addToCart(props.match.params.id, +qty))
        // props.history.push("/cart/" + props.match.params.id +"?qty=" + qty );
    }
    // const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
        <div className="back-to-link">
        <Link to="/">Back to Homepage</Link>
        </div>
        {loading? <div>loading...</div> :
        error?<div>{error}</div> :
        ( <div className = "details">
            <div className="details-img">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="detail-info">
                <ul>
                    <li>
                        <h3>{product.name}</h3>
                    </li>
                    <li>
                        {product.artist}
                    </li>
                    <li>
                        {product.category}
                    </li>
                    <li>
                        Price: ${product.price}
                    </li>
                    <li>
                        Description:
                        <div>{product.description}</div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        price: ${product.price}
                    </li>
                    <li>
                        Status:{product.countInStock > 0? " In Stock" : " Unavailable"}
                    </li>
                    <li>
                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                    </li>
                    <li>
                        {product.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>
                        }
                    </li>
                </ul>
            </div>
        </div>
        )
        }
    </div>
}

export default ProductPage