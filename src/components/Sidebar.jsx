import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Sidebar() {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      } 

      return(
 
           <aside className="sidebar">
            <h2>Art Catagories</h2>
            <button onClick={closeMenu} className="sidebar-close-btn">X</button>
            <ul className="sidebar-list">
                <li>
                {userInfo && userInfo.isAdmin && (
                    <Link to="products"> products</Link>
                    )}
                </li>
                <li>
                <a href="index.html">Portraits</a>
                </li>
            </ul>
        </aside>

    )
}