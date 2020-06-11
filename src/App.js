import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import ProductPage from './components/Pages/ProductPage.jsx';
import CartPage from './components/Pages/CartPage.jsx';
import SigninPage from './components/Pages/SigninPage';

function App() {

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
      </div>
    </main>
    <Footer/>

    </div>
    </BrowserRouter>
  
  )
  
}

export default App;
