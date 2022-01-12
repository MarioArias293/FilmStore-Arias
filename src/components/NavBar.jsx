import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {


    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-film" viewBox="0 0 20 20">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                </svg> <span>FilmStore</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Productos y Servicios</Nav.Link>
                        <Nav.Link href="#pricing">Acerca de nosotros</Nav.Link>
                    </Nav>
                    <button type="button" class="btn btn-outline-light"><CartWidget />  <span class="badge bg-primary">1</span></button>
                </Navbar.Collapse>
                
            


            </Container>
        </Navbar>
    )

}



export default NavBar;