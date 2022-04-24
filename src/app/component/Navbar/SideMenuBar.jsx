import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { FaTools, FaPowerOff } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

const SideMenuBar = () => {
  return (
    <ProSidebar style={{ height: "100vh" }}>
      <SidebarHeader>
        {
          <>
            <div className="sideMenuBarHeader">Prathima Gopal</div>
            <div className="sideMenuBarHeader">Apartment# 222</div>
          </>
        }
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<GoDashboard />}>
          <Link to="/resident/dashboard">Dashboard</Link>
        </MenuItem>
        <MenuItem icon={<FaTools />}>
          <Link to="/resident/service">Service Request</Link>
        </MenuItem>
        <MenuItem icon={<FiSettings />}>Settings</MenuItem>
        <MenuItem icon={<IoIosNotifications />}>Notifications</MenuItem>
        <MenuItem icon={<FaPowerOff />}>Logout</MenuItem>
      </Menu>
      <SidebarFooter style={{ textAlign: "center" }}></SidebarFooter>
    </ProSidebar>
  );
};

export default SideMenuBar;
