import { Stack } from "@mui/system";
import React from "react";
import sidebarLogo from "../assets/images/bg-sidebar-desktop.svg";
import "../assets/Css/sideBar.css";

function SideBar(props) {
  return (
    <Stack
      style={{
        height: "570px",
        backgroundImage: `url(${sidebarLogo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "280px",
      }}
      spacing={1}
      direction={"column"}
      alignItems={"flex-start"}
      paddingTop={"22px"}
    >
      <div></div>
      {props.children}
    </Stack>
  );
}

export default SideBar;
