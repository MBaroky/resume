import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Header({ menu, setChildState, navState }) {
  useEffect(() => {
    if (menu) {
      setChildState(true);
    }
    // eslint-disable-next-line
  }, [menu]);

  //   handling navigation manually
  const navigate = useNavigate();
  const location = useLocation();
  const [thisPage, setThisPage] = useState(location.pathname);

  useEffect(() => {
    setThisPage(location.pathname);
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    navigate(thisPage);
    // eslint-disable-next-line
  }, [thisPage]);

  const getIndexOfMenuItem = pageName => {
    const object = menu.data.find(({ name }) => name === pageName);
    return menu.data.indexOf(object);
  };

  const handleNavigation = e => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const targetName = target.replace("/", "");
    const targetPageName = targetName !== "" ? targetName : "about";

    if (
      getIndexOfMenuItem(targetPageName) >
      getIndexOfMenuItem(thisPage.replace("/", ""))
    ) {
      navState.setNavDirection({
        dir: true,
      });
    } else {
      navState.setNavDirection({
        dir: false,
      });
    }
    setThisPage(target);
  };

  return (
    <nav
      className='navbar navbar-dark fixed-top bg-dark align-items-start toggled sidebar sidebar-dark accordion p-0'
      id='main-navbar'>
      <div className='container-fluid d-flex flex-md-column flex-row p-0'>
        <ul
          className='navbar-nav text-break text-light'
          id='accordionSidebar'>
          {menu
            ? menu.data.map((item, index) => (
                <li className='nav-item' key={index}>
                  <NavLink
                    onClick={handleNavigation}
                    className='nav-link px-1'
                    to={index === 0 ? "/" : item.name.toLowerCase()}
                    children={
                      <Fragment>
                        <i className={item.icon}></i>
                        <span className='text-center'>
                          {item.label}
                        </span>
                      </Fragment>
                    }></NavLink>
                  {/* <a className="nav-link px-1" href={`#${item.name.toLowerCase()}`}>
                            </a> */}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </nav>
  );
}

Header.prototype = {
  menu: PropTypes.object,
};

export default Header;
