import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import PrivateRoutes from "./utils/Protected";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
