import { useState } from "react";
import { AuthProvider } from "./assets/api/context/AuthContext.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./assets/app/home/HomePage.jsx";
import RegisterUser from "./assets/app/Register/RegisterUser.jsx";
import "./App.css";
import Login from "./assets/app/Login/Login.jsx";
import Index from "./assets/app/index/Index.jsx";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<h1>404</h1>}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/index" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
