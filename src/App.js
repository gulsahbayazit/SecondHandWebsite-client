import "bootstrap/dist/css/bootstrap.min.css";
// Routes
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import NavbarWithoutSearch from "./components/NavbarWithoutSearch";
// import ProductCard from "./components/ProductCard";
// // Pages
import AboutPage from "./pages/AboutPage";
import AddProductPage from "./pages/AddProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsListingPage from "./pages/ProductsListingPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import EditProductPage from "./pages/EditProductPage";
import EarningPointsPage from "./pages/EarningPointsPage";
import PurchasePage from "./pages/PurchasePage";

function App() {
  const [string, setString] = useState("");
  return (
    <div className="App">
      <Navbar setString={setString} string={string} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/add-product" element={<AddProductPage />} />

        <Route path="/signup-info" element={<EarningPointsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/product-edit/:id" element={<EditProductPage />} />
        <Route
          path="/products"
          element={<ProductsListingPage string={string} />}
        />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
