import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './pages/App';
import ResidentDashboard from './pages/residentDashboard/ResidentDashboard';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import Login from './pages/login';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="resident" element={<ResidentDashboard />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
