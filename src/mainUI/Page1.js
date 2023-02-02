import React from "react";
import SideBar from "../component/SideBar";
import Form from "../component/Form";
import { Container, Stack } from "@mui/material";
import Step from "../component/Step";

function Page1() {
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
            circle_color="hsl(206, 94%, 87%)"
            numberColor="black"
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
            circle_color="inherit"
            numberColor="white"
            stepText="SUMMARY"
          />
        </SideBar>

        {/* form step1 */}
        <Form />

        {/* step2 */}
        {/* <Step2 /> */}

        {/* step 3 */}
        {/* <Step3Monthly /> */}
        {/* <Step3Yearly /> */}

        {/* step 4 */}
        {/* <Finishing/> */}

        {/* Thank you */}
        {/* <Thank /> */}
      </Container>
    </Stack>
  );
}

export default Page1;
