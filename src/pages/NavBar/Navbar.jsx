import React from 'react';

const Navbar = () => {
    const menuItems = (
      <>
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </>
    );

    return (
      <div>
        <div className="navbar fixed bg-opacity-30 bg-black z-10 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow max-sm:bg-[#65280b] rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <div className="">
              <a className="btn btn-ghost normal-case text-xl">Bistor</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;