import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Loading from "./Loading";

const Layout = () => {

    
    return(
        <div className="App">
            <NavBar/>
            <Outlet />
            

        </div>
    )

}

export default Layout;