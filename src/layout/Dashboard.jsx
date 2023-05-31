
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome,FaCalendar, FaWallet, FaShoppingCart,FaCalendarDay, FaStar } from "react-icons/fa";

const Dashboard = () => {
    return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaHome></FaHome> User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendar></FaCalendar>Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaWallet></FaWallet> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaShoppingCart></FaShoppingCart> My Carts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaStar></FaStar> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendarDay></FaCalendarDay> my booking
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;