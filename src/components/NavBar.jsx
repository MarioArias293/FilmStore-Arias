import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { categories } from "../resources/productMock";
const NavBar = () => {
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" w>
            <Container>

                <Link to={"/"} style={{ textDecoration: 'none' }}><Navbar.Brand > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" className="bi bi-film" viewBox="0 0 20 20">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                </svg> <span>FilmStore</span>
                </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {categories.map((category) => (<NavLink key={category.name} to={`/category/${category.name}`} activeClassName="active" className="nav-link">{category.text}</NavLink>))}
                    </Nav>
                    <CartWidget /> 
                </Navbar.Collapse>




            </Container>
        </Navbar>
    )

}



export default NavBar;