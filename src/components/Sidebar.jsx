import React from 'react'

export default function Sidebar() {

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      } 

      return(
 
           <aside className="sidebar">
            <h3>Art Catagories</h3>
            <button onClick={closeMenu} className="sidebar-close-btn">X</button>
            <ul className="sidebar-list">
                <li>
                <a href="index.html">landscape</a>
                </li>
                <li>
                <a href="index.html">Portraits</a>
                </li>
            </ul>
        </aside>

    )
}