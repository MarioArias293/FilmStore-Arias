import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { CartContext, CartProvider } from '../context/CartContext';

const Layout = () => {


    return (
        <div className="App">
            <CartProvider>
                <NavBar />
                <Outlet />
            </CartProvider>

        </div>
    )

}

export default Layout;