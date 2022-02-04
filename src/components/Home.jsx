import { Container } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer";
import Welcome from "./Welcome";


const Home = () => (

  <div className="App" >
    <Container className=" "  >

    <Welcome />
    <ItemListContainer />
    </Container>

  </div>

)

export default Home;