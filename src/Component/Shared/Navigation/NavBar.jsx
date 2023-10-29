import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/order">Order Product</Link></li>
        {/* {
        isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
        <li><Link to="/dashboard/userhome">Dashboard</Link></li>
    } */}
        <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">AGROCART</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ">

                    {navOptions}

                </ul>
            </div>
            <div className="navbar-end">

                <div className="avatar placeholder ">
                    <div className="bg-neutral-focus text-white  rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-4 text-2xl">
                        {
                            user ? <>
                                <button onClick={handleLogOut} >Log out</button>
                            </> : <>
                                <button> <Link to="/login">Login</Link></button>
                            </>
                        }                    </div>
                </div>
            </div>

        </div>

    );
};

export default NavBar;