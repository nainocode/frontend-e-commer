import React from 'react'
import { useState } from 'react';
import { createContext , useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const intialAuthUser = JSON.parse(localStorage.getItem("user")) || null;
    const intialAdminAuthUser = JSON.parse(localStorage.getItem("adminUser")) || null;

    const [authUser , setAuthUser] = useState(intialAuthUser);
    const [adminAuthUser , setAdminAuthUser] = useState(intialAdminAuthUser);

  return (
    <div>
        <AuthContext.Provider value={{ authUser, setAuthUser, adminAuthUser, setAdminAuthUser }}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
};
