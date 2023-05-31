
// import { data } from 'autoprefixer';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import imglogo from '../../assets/others/profile.png'
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const { user, logOut, loading } = useContext(authContext);
  const [cart] = useCart();
  console.log(cart)
  if (loading) {
    return <p>Loading.........</p>
  }
console.log(user)
  const handleLogout = () => {
   logOut()
     .then(() => {
       // Sign-out successful.
     })
     .catch((error) => {
       console.log(error)
       // An error happened.
     });
  }
    const menuItems = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Our menu</Link>
        </li>
        <li>
          <Link to="/order/salad">Order Food</Link>
        </li>
        <li>
          <Link to="/secrate">Secrate</Link>
        </li>
        <li>
          {user ? (
            <>
              <button onClick={handleLogout} className="capitalize btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </li>
        <li className='items-center'>
          <button className="btn gap-4">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary"> { cart.length || 0 }</div>
          </button>
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
            {user ? (
              <>
                <img
                  className="w-16 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </>
            ) : (
              <>
                <img className="w-16 rounded-full" src={imglogo} alt="" />
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;