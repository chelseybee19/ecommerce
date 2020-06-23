import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar() {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      } 

      return(
 
           <aside className="sidebar">
            <h2>Art Catagories</h2>
            <button onClick={closeMenu} className="sidebar-close-btn">X</button>
            <ul className="sidebar-list">
                <li>
                <Link to="products"> products</Link>
                {/* <a href="index.html">landscape</a> */}
                </li>
                <li>
                <a href="index.html">Portraits</a>
                </li>
            </ul>
        </aside>

    )
}