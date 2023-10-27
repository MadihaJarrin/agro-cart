import { Outlet } from "react-router-dom";
import NavBar from "../Component/Shared/Navigation/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;