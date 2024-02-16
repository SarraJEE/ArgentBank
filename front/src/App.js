import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import User from "./pages/User/User";
import Error from "./pages/Error/Error";


const App = () => {
  const isAuth = useSelector(state => state.login.isAuth);


 const PrivateRoute = ({ element, path }) => {
    return isAuth ? (
      element
    ) : (
      <Navigate to="/login" state={{ from: path }} />
    );
  };


 return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<User />} path="/profile" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


export default App;