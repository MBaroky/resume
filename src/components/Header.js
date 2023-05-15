import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Header({menu}) {

    return (
        <nav className="navbar navbar-dark fixed-top bg-dark align-items-start toggled sidebar sidebar-dark accordion p-0" id="main-navbar">
        <div className="container-fluid d-flex flex-md-column flex-row p-0">
            <ul className="navbar-nav text-break text-light" id="accordionSidebar">
                {menu? menu.data.map((item,index) => (
                    <li className="nav-item" key={index}>
                            <NavLink className="nav-link px-1" to={index===0?'/':item.name.toLowerCase()} children={
                                <Fragment>

                                    <i className={item.icon}></i>
                                    <span className="text-center">{item.label}</span>
                                </Fragment>
                            }></NavLink>
                            {/* <a className="nav-link px-1" href={`#${item.name.toLowerCase()}`}>
                            </a> */}
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