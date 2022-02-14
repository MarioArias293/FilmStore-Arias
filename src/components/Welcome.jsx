import { Container } from "react-bootstrap"
import { useContext }  from "react";
import { CategoryContext } from "../context/CategoryContext";

const Welcome = ({cat}) => {

  
    const { categories } = useContext(CategoryContext) 
    const category = categories.find(category => category.name === cat)
    const catName = category ?  category.text : "FilmStore"
    
  

    return (
        <Container className="mt-0" style={{ fontSize: "5rem", borderBottom: "solid 2px", borderImage: "linear-gradient(to right, #E97B0E, #EA9E0F) 1"  }} >
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"  className="bi bi-film" viewBox="0 0 20 20">
                
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" fill="url(#grad1)" />
            </svg>
            {catName}

        </Container>
    )
}

export default Welcome