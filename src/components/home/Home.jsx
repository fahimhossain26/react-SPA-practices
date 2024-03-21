import { Outlet } from "react-router-dom";
import Header from "../header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>this is home component </h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;