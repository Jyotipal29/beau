import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import PrivateRoutes from "./utils/Protected";
import PageNotFound from "./pages/404";
import OrderSuccess from "./pages/OrderSuccess";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import AdminProducts from "./pages/AdminProducts";
import AdminProduct from "./pages/AdminProduct";
import AdminProtected from "./utils/AdminProtected";
import ProductForm from "./pages/ProductForm";
import AdminOrders from "./pages/AdminOrders";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wish" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route element={<AdminProtected />}>
            <Route path="/admin" element={<AdminProducts />} />
            <Route path="/admin/:id" element={<AdminProduct />} />
            <Route path="/product/form" element={<ProductForm />} />
            <Route path="/product/form/edit/:id" element={<ProductForm />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
