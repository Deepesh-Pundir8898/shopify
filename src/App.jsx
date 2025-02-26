import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./components/home/Home";
import Products from "./components/product/Products";
import Users from "./components/user/Users";
import ContactUs from "./components/user/ContactUs";
import Login from "./components/login/Login";
import ProductDetails from "./components/product/ProductDetails";
import Nav from "./components/navbar/Nav";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
