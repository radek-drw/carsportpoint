import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";
import PartnersPage from "./components/pages/PartnersPage/PartnersPage";
import CataloguePage from "./components/pages/CataloguePage/CataloguePage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import AdminPage from "./components/pages/AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
