import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

// const openMenu = () => {
//     document.querySelector(".sidebar").classList.add("open")
//   };

//   const userSignin = useSelector(state => state.userSignin);
//   const { userInfo } = userSignin;

function Nav(props){

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  };

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return (
  <div>
  <header>
  <nav className="nav">
    <div className="brand">
      <button onClick={openMenu} className="brand-button">
        &#9776;
      </button>
      <Link to="/">Art Book</Link>
    </div>
    <div className="header-links">
      {
        userInfo ? <Link to="/profile">{userInfo.name}</Link> :
        <Link to="/signin">SignIn</Link>
      }
      <a href="/cart">Cart</a>
      {/* {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="/"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )} */}
    </div>
  </nav>
  </header>
  </div> 
  )
  
          };

export default Nav;