import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Admin imports
import AdminLogin from './Admin/AdminLogin';
import Sidebar from './Admin/Sidebar';
import Dashboard from './Admin/Dashboard';
import BannerMaster from './Admin/BannerMaster';
import CategoryMaster from './Admin/CategoryMaster';
import SubcategoryMaster from './Admin/SubcategoryMaster';
import ProductMaster from './Admin/ProductMaster';

// User imports
import ProductSlider from './User/ProductSlider';
import Home from './User/Components/Home';
import About from './User/About';
import Tarpaulin from './User/Tarpaulin';
import EnquiryForm from './User/EnquiryForm';
import Layout from './User/Layout';
import Product from './User/Components/Product';
import SubProducts from './User/Components/SubProducts';
import MainProduct from './User/Components/MainProduct';
import ProductDetailPage from './User/Components/ProductDetailPage';
import FibcSoln from './User/FibcSoln';
import ScrollToTop from './User/Components/ScrollToTop';
import WhatsAppIcon from './User/Components/WhatsAppIcon';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <WhatsAppIcon />}

      <Routes>
        {/* User Routes with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/solutions" element={<Layout><FibcSoln /></Layout>} />
        <Route path="/tarpaulin" element={<Layout><Tarpaulin /></Layout>} />
        <Route path="/contact" element={<Layout><EnquiryForm /></Layout>} />
        <Route path="/product" element={<Layout><Product /></Layout>} />
        <Route path="/subproducts" element={<Layout><SubProducts /></Layout>} />
        <Route path="/main-products" element={<Layout><MainProduct /></Layout>} />
        <Route path="/product-detail/:productId" element={<Layout><ProductDetailPage /></Layout>} />

        {/* Admin Routes */}
        <Route path="/admin/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="banner" element={<BannerMaster />} />
          <Route path="category" element={<CategoryMaster />} />
          <Route path="subcategory" element={<SubcategoryMaster />} />
          <Route path="product" element={<ProductMaster />} />
          <Route path="product-slider" element={<ProductSlider />} />
        </Route>

        <Route path="/*/adminlogin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
