import { FaHome, FaPhoneVolume, FaShopify, FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open  ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col px-20 ">

                {/* Page content here items-center justify-center */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open sidebar</label>
            </div>

            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  bg-yellow-500">

                    {/* Sidebar content here */}
                    {/* <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home </NavLink> </li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservations </NavLink> </li> */}
                    <li>
                        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                            <span className="badge badge-secondary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    {/* <li><NavLink to='/dashboard/history'><GiWallet></GiWallet>Payment History</NavLink></li> */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>
                    <li><NavLink to='/categories'><MdCategory></MdCategory> Categories</NavLink></li>
                    <li><NavLink to="/order"><FaShopify></FaShopify> Order Product</NavLink></li>
                    <li><NavLink to="/about"><FaPhoneVolume></FaPhoneVolume> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;