import React from "react";
import { Routes, Route } from "react-router-dom";
import SideMenuBar from "../component/Navbar/SideMenuBar";
import ResidentDashboardGrid from "../component/resident/ResidentDashboardGrid";
import ServiceRequest from "../component/resident/ServiceRequest";
import "../css/resident.css";

export default function ResidentDashboard() {
  return (
    <div className="container">
      <SideMenuBar />
      <Routes>
        <Route exact path="/dashboard" element={<ResidentDashboardGrid />} />
        <Route exact path="/service" element={<ServiceRequest />} />
      </Routes>
    </div>
  );
}
