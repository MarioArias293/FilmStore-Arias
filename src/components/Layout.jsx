import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { CartProvider } from '../context/CartContext';
import { CategoryProvider } from '../context/CategoryContext';

const Layout = () => {
  return (
    <div className="App">
      <CartProvider>
        <CategoryProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </CategoryProvider>
      </CartProvider>
    </div>
  );
};

export default Layout;
