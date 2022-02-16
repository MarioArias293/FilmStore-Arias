import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { CategoryContext } from '../context/CategoryContext';

const NavBar = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navBarLine">
      <Container>
        <Link to={'/'} className="noDecoration">
          <Navbar.Brand>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-film"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E97B0E" stopOpacity="100%" />
                  <stop offset="100%" stopColor="#EA9E0F" stopOpacity="100%" />
                </linearGradient>
              </defs>
              <path
                d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
                fill="url(#grad1)"
              />
            </svg>{' '}
            <span>FilmStore</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={`/category/${category.name}`}
                activeclassname="active"
                className="nav-link"
              >
                {category.text}
              </NavLink>
            ))}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
