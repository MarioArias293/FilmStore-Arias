import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {


    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid " >
                <div class="col-1"></div>
                <div>
                    <a href="/">

                    </a>
                </div>
                <a class="navbar-brand " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-film" viewBox="0 0 20 20">
                        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                    </svg><span>{"     "}</span>
                <span>   FilmStore</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav me-auto">
                        <a class="nav-item nav-link active" href="/">Home</a>
                        <a class="nav-item nav-link" href="/">Acerca de nosotros</a>
                        <a class="nav-item nav-link" href="/">Productos y Servicios</a>




                    </div>

                    <button type="button" class="btn btn-outline-light"><CartWidget />  <span class="badge bg-primary">1</span></button>
                </div>
                <div class="col-1"></div>
            </div>
        </nav>

    )

}



export default NavBar;