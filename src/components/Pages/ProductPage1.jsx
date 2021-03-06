import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProduct } from '../../actions/productActions';
import './ProductPage1.css';

function ProductsPage1(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [stripeId, setStripeId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [artist, setArtist] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector(state => state.productList);
  const { products } = productList;

  const productSave = useSelector(state => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  const productDelete = useSelector(state => state.productDelete);
  const { success: successDelete } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [dispatch, successSave, successDelete, productDelete]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setStripeId(product.stripeId);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setArtist(product.artist);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      _id: id,
      name, stripeId, price, image, artist, category,
      countInStock, description
    }));
  }
  const deleteHandler = (product) => {
    dispatch(deleteProduct(product._id));
  }
  return <div className="content content-margined">

    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={() => openModal({})}>Create Product</button>
    </div>
    {modalVisible &&
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="name">
                Name
          </label>
              <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="stripeid">
                Stripe Id
          </label>
              <input type="text" name="stripeid" value={stripeId} id="stripeid" onChange={(e) => setStripeId(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="price">
                Price
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="image">
                Image
          </label>
              <input type="html" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="brand">
                Artist
          </label>
              <input type="text" name="artist" value={artist} id="artist" onChange={(e) => setArtist(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="countInStock">
                CountInStock
          </label>
              <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="name">
                Category
          </label>
              <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="description">
                Description
          </label>
              <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
            </li>
          </ul>
        </form>
      </div>
    }


    <div className="product-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map(product => (<tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.artist}</td>
            <td>
              <button className="button" onClick={() => openModal(product)} >Edit</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)} >Delete</button>
            </td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
}
export default ProductsPage1;