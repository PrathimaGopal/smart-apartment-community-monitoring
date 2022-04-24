import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
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
            <div
              style={{
                padding: "24px",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: "1px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Welcome, Resident
            </div>
            <div
              style={{
                paddingLeft: "24px",
                paddingBottom: "24px",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 14,
                letterSpacing: "1px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Apartment: 222
            </div>
          </>
        }
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<GoDashboard />}>Dashboard</MenuItem>
        <MenuItem icon={<FaTools />}>Service Request</MenuItem>
        <MenuItem icon={<FiSettings />}>Settings</MenuItem>
        <MenuItem icon={<IoIosNotifications />}>Notifications</MenuItem>
        <MenuItem icon={<FaPowerOff />}>Logout</MenuItem>
      </Menu>
      <SidebarFooter style={{ textAlign: "center" }}></SidebarFooter>
    </ProSidebar>
  );
};

export default SideMenuBar;
