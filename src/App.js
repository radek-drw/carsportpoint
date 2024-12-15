import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import PartnersPage from "./components/PartnersPage/PartnersPage";
import CataloguePage from "./components/CataloguePage/CataloguePage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <main className="font-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
