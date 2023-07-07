import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='home' />} />
        <Route path='home' element= {<Home/>} />
        <Route path='shop' element= {<Shop/>} />
        <Route path='shop/:id' element= {<ProductDetails/>} />
        <Route path='cart' element= {<Cart/>} />
        <Route path='checkout' element= {<Checkout/>} />
        <Route path='login' element= {<Login/>} />
        <Route path='signup' element= {<Signup/>} />
        <Route path='about' element= {<About/>} />
        <Route path='privacypolicy' element= {<PrivacyPolicy/>} />
        <Route path='contact' element={<Contact/>} />
    </Routes>
  )
}

export default Routers
