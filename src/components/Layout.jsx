import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { CartContext, CartProvider } from '../context/CartContext';
import { CategoryProvider } from "../context/CategoryContext";

const Layout = () => {
    
    return (
        <div className="App">
            <CartProvider>
                <CategoryProvider>
                <NavBar />
                <Outlet /> 
                </CategoryProvider>
            </CartProvider>

        </div>
    )

}

export default Layout;