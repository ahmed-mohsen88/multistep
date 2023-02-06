import { Stack } from "@mui/system";
import React from "react";
import sidebarLogo from "../assets/images/bg-sidebar-desktop.svg";
import "../assets/Css/sideBar.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Grid } from "@mui/material";

function SideBar(props) {
  const matches = useMediaQuery("(max-width:376px)");
  return matches ? (
    <Grid
      container
      // width={"100%"}
      height={"180px"}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sidebarLogo}
        alt="sidebar"
        style={{
          width: "409px",
          position: "absolute",
          clipPath: "inset(68.5% 9px 79px 0px)",
          top: "-589px",
          left: "-25px",
          zIndex: "0",
          objectFit: "unset",
        }}
      />
      <Container
        sx={{
          zIndex: "1",
          position: "relative",
          display: "flex",
          justifyContent: "center", 
          alignItems: "flex-start",
          padding: "30px",
          gap: "5px",
          width: "unset",
        }}
      >
        {props.children}
      </Container>
    </Grid>
  ) : (
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
