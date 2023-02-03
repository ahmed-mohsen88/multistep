import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import SideBar from "../component/SideBar";
import Step from "../component/Step";
import { Container } from "@mui/system";
import FinishingYear from "../component/FinishingYear";

function Page4year() {


  return (
    <Stack
      sx={{ height: "100vh", background: " hsl(217, 100%, 97%)" }}
      direction="row"
      justifyItems="center"
      alignItems="center"
    >
      <Container
        sx={{
          width: "942px",
          height: "606px",
          background: " hsl(0, 0%, 100%)",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          borderRadius: "9px",
        }}
      >
        {/* side bar */}
        <SideBar>
          <Step
            stepNumber="1"
            circle_color="inherit"
            numberColor="white"
            stepText="YOUR INFO"
          />
          <Step
            stepNumber="2"
            circle_color="inherit"
            numberColor="white"
            stepText="SELECT PLAN"
          />
          <Step
            stepNumber="3"
            circle_color="inherit"
            numberColor="white"
            stepText="ADD-ONS"
          />
          <Step
            stepNumber="4"
            circle_color="hsl(206, 94%, 87%)"
            numberColor="black"
            stepText="SUMMARY"
          />
        </SideBar>
        {/* page 4 */}
        <FinishingYear />
      </Container>
    </Stack>
  );
}

export default Page4year;
