import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Footer from './Components/Footer/Footer.jsx';
import banner_kids from'./Components/Assets/banner_kids.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_men from './Components/Assets/banner_mens.png';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={banner_men} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:productId' element={<Product />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
