import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
// import StripeCheckout from 'react-stripe-checkout';
import Nav from './components/Nav.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import ProductPage from './components/Pages/ProductPage.jsx';
import CartPage from './components/Pages/CartPage.jsx';
import SigninPage from './components/Pages/SigninPage';
import RegisterPage from './components/Pages/RegisterPage';
import ProductsPage1 from './components/Pages/ProductPage1';
import ShippingPage from './components/Pages/ShippingPage';
import PaymentPage from './components/Pages/PaymentPage';
import OrderPage from './components/Pages/OrderPage';
import ProfilePage from './components/Pages/ProfilePage';

function App() {

  // const [product, setProduct] = useState ({
  //   name:"react",
  //   price: 10,
  //   ProductBy: "FB",
  // });

  return (
    <BrowserRouter>
    <div className="grid-container">
    <Nav/>
    <Sidebar/>

    <main className="main">
      <div>
      <Route path="/" exact = {true} component={HomePage}/>
      <Route path="/product/:id" component={ProductPage}/>
      <Route path="/cart/:id?" component={CartPage}/>
      <Route path="/signin" component={SigninPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/products" component={ProductsPage1}/>
      <Route path="/shipping" component={ShippingPage}/>
      <Route path="/payment" component={PaymentPage}/>
      <Route path="/order" component={OrderPage}/>
      <Route path="/profile" component={ProfilePage}/>
      </div>
    </main>
    <Footer/>

    </div>
    </BrowserRouter>
  
  )
  
}

export default App;
