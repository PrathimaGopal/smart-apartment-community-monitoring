import React from "react";
import SideMenuBar from "../component/Navbar/SideMenuBar";
import "../css/resident.css";

export default function ResidentDashboard() {
  return (
    <div style={{ display: "flex" }}>
      <SideMenuBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Resident Dashboard
      </div>
    </div>
  );
}
