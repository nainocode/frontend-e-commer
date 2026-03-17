import React, { useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './Home/Home';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Products from './Product/Products';
import SeeProducts from './ProductsViewAll/SeeProducts';
import CartPage from './cart/CartPage';
import Pay from './checkout-point/Pay';
import Gift from './gifts/Gift';
import Deal from './dealspage/Deal'

const App = () => {
  const [authUser] = useAuth();
  return (
    <Routes>
      {/* Authtication Authorization  */}
      {/* <Route
        path='/signup'
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
      <Route
        path='/login'
        element={authUser ? <Navigate to="/" /> : <Login />}
      /> */}

      {/* All  Navbar Pages  */}
      <Route
        path='/'
        element={authUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path='/products'
        element={authUser ? <Products /> : <Navigate to="/login" />}
      />
      <Route
        path='/gifts'
        element={authUser ? <Gift /> : <Navigate to="/login" />}
      />
      <Route
        path='/deals'
        element={authUser ? <Deal /> : <Navigate to="/login" />}
      />
      <Route
        path='/cart/:id?'
        element={authUser ? <CartPage /> : <Navigate to="/login" />}
      />
      <Route
        path='/payout'
        element={authUser ? <Pay /> : <Navigate to="/login" />}
      />
      <Route
        path='/see-products/:id'
        element={authUser ? <SeeProducts /> : <Navigate to="/login" />}
      />

    </Routes>
  )
}

export default App;