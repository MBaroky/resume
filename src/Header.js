import React from 'react'
import PropTypes from 'prop-types'

function Header({menu}) {

    return (
        <nav className="navbar navbar-dark fixed-top bg-dark align-items-start toggled sidebar sidebar-dark accordion p-0" id="main-navbar">
        <div className="container-fluid d-flex flex-md-column flex-row p-0">
            <ul className="navbar-nav text-break text-light" id="accordionSidebar">
                {menu? menu.data.map((item,index) => (
                    <li className="nav-item" key={index}>
                        <a className="nav-link px-1" href={`#${item.name.toLowerCase()}`}>
                            <i className={item.icon}></i>
                            <span className="text-center">{item.label}</span>
                        </a>
                    </li>
                )) : ""}
            </ul>
        </div>
    </nav>
    );
}

Header.prototype={
    menu:PropTypes.object
}

export default Header;