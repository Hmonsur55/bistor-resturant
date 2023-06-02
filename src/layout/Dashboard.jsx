
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome,FaCalendar, FaWallet, FaShoppingCart,FaCalendarDay, FaStar, FaUtensils, FaBars, FaBook, FaUsers } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {
  // TODO: load data form server based on admin data
  const isAdmin = true;

  const [cart] = useCart()
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
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaBars></FaBars> Manage Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaBook></FaBook> Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
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
                    to="/dashboard/mycarts"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <FaShoppingCart></FaShoppingCart> My Carts
                    <span className="badge badge-secondary">
                      {" "}
                      {cart.length || 0}
                    </span>
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
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendarDay></FaCalendarDay> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendarDay></FaCalendarDay> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendarDay></FaCalendarDay> Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <FaCalendarDay></FaCalendarDay> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;