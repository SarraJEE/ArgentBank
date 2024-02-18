import * as React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";
import { useSelector } from "react-redux";

const PrivateRouteComponent = ({ element, ...props }) => {
  const isAuth = useSelector((state) => state.login.isAuth);

  return isAuth ? (
    React.cloneElement(element, props) // Utiliser React.cloneElement pour transmettre les props
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<PrivateRouteComponent element={<User />} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
