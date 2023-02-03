import React, { useEffect, useState } from "react";
import SideBar from "../component/SideBar";
import { Container, Stack } from "@mui/material";
import Step from "../component/Step";
import "../assets/Css/step2.css";
import Step3Yearly from "../component/Yearly/Step3Yearly";
import ServicesYearly from "../component/Yearly/ServicesYearly";

function Page3year() {
  const [hash, sethash] = useState(window.location.hash);
  console.log(hash);
  useEffect(() => {
    sethash("page3month");
    window.location.hash = "page3month";
    window.addEventListener("hashchange", function (e) {
      localStorage.removeItem("Online service");
      localStorage.removeItem("Larger storage");
      localStorage.removeItem("Customizable Profile");
    });
  }, []);
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
            circle_color="hsl(206, 94%, 87%)"
            numberColor="black"
            stepText="ADD-ONS"
          />
          <Step
            stepNumber="4"
            circle_color="inherit"
            numberColor="white"
            stepText="SUMMARY"
          />
        </SideBar>

        {/* <Step3Yearly /> */}
        <Step3Yearly>
          <ServicesYearly
            service_text={"Online service"}
            service_desc={"Access to multiplayer games"}
            price={"+$10/yr"}
          />

          <ServicesYearly
            service_text={"Larger storage"}
            service_desc={"Extra 1TB of cloud save"}
            price={"+$20/yr"}
          />

          <ServicesYearly
            service_text={"Customizable Profile"}
            service_desc={"Custom theme on your profile"}
            price={"+$20/yr"}
          />
        </Step3Yearly>
      </Container>
    </Stack>
  );
}

export default Page3year;