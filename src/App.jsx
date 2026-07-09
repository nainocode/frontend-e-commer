import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Products from './Product/Products';
import SeeProducts from './ProductsViewAll/SeeProducts';
import CartPage from './cart/CartPage';
import Pay from './checkout-point/Pay';
import AddProduct from './components/Add_Product';
import AdminSignup from './components/AdminSignup';

const App = () => {
  const { authUser, adminAuthUser } = useAuth();

  return (
    <Routes>
      {/* Authentication / Authorization */}
      <Route
        path='/signup'
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
      <Route
        path='/login'
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path='/admin-signup'
        element={adminAuthUser ? <Navigate to="/products" /> : <AdminSignup />}
      />

      {/* Home page - agar login nai to signup pe bhejo */}
      <Route
        path='/'
        element={authUser ? <Home /> : <Navigate to="/signup" />}
      />

      {/* Products - sirf admin access kar sake */}
      <Route
        path='/products'
        element={adminAuthUser ? <Products /> : <Navigate to="/login" />}
      />

      <Route
        path='/add-product'
        element={adminAuthUser ? <AddProduct /> : <Navigate to="/login" />}
      />
      <Route
        path='/cart/:id?'
        element={authUser ? <CartPage /> : <Navigate to="/signup" />}
      />
      <Route
        path='/payout'
        element={authUser ? <Pay /> : <Navigate to="/signup" />}
      />
      <Route
        path='/see-products/:id'
        element={authUser ? <SeeProducts /> : <Navigate to="/signup" />}
      />

      {/* Kisi ghalat route pe jaye to home pe bhej do */}
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;