// import React, { useEffect } from 'react';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Home from './Home/Home';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import  {useAuth}  from './context/AuthProvider';
// import Products from './Product/Products';
// import SeeProducts from './ProductsViewAll/SeeProducts';
// import CartPage from './cart/CartPage';
// import Pay from './checkout-point/Pay';
// import AddProduct from './components/Add_Product';
// import AdminSignup from './components/AdminSignup';

// const App = () => {
//   const { authUser , adminAuthUser  } = useAuth();



//   return (
//     <Routes>
//       {/* Authtication Authorization  */}
//       <Route
//         path='/signup'
//         element={authUser ? <Navigate to="/" /> : <Signup />}
//       />
//       <Route
//         path='/login'
//         element={authUser ? <Navigate to="/" /> : <Login />}
//       />
//       {/* All  Navbar Pages  */}
//       <Route
//         path='/'
//         element={authUser ? <Home /> : <Navigate to="/login" />}
//       />
//       <Route
//         path='/products'
//         element={authUser ? <Products /> : <Navigate to="/login" />}
//       />
//       <Route
//         path='/add-product'
//         element={ adminAuthUser ? <AddProduct /> : <Navigate to="/login" />}
//       />
//       <Route
//         path='/cart/:id?'
//         element={authUser ? <CartPage /> : <Navigate to="/login" />}
//       />
//       <Route
//         path='/payout'
//         element={authUser ? <Pay /> : <Navigate to="/login" />}
//       />
//       <Route
//         path='/see-products/:id'
//         element={authUser ? <SeeProducts /> : <Navigate to="/login" />}
//       />

//     </Routes>
//   )
// }

// export default App;


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

const ProtectedRoute = ({ isAllowed, redirectTo = '/login', children }) =>
  isAllowed ? children : <Navigate to={redirectTo} replace />;

const App = () => {
  const { authUser, adminAuthUser } = useAuth();
  console.log('Auth User in App.jsx:', authUser);

  return (
    <Routes>
      {/* Auth */}
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
        element={adminAuthUser ? <Navigate to="/" /> : <AdminSignup />}
      />

      {/* Main pages */}
      <Route path='/' element={<ProtectedRoute isAllowed={authUser}><Home /></ProtectedRoute>} />
      <Route path='/products' element={<ProtectedRoute isAllowed={authUser}><Products /></ProtectedRoute>} />
      <Route
        path='/add-product'
        element={<ProtectedRoute isAllowed={adminAuthUser} redirectTo="/login"><AddProduct /></ProtectedRoute>}
      />
      <Route path='/cart/:id?' element={<ProtectedRoute isAllowed={authUser}><CartPage /></ProtectedRoute>} />
      <Route path='/payout' element={<ProtectedRoute isAllowed={authUser}><Pay /></ProtectedRoute>} />
      <Route path='/see-products/:id' element={<ProtectedRoute isAllowed={authUser}><SeeProducts /></ProtectedRoute>} />

      {/* Fallback */}
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;