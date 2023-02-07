import React, { useEffect, useState } from "react";
import SideBar from "../component/SideBar";
import { Container, Grid, Stack } from "@mui/material";
import Step from "../component/Step";
import "../assets/Css/step2.css";
import Step3Monthly from "../component/Monthly/Step3Monthly";
import ServicesMonthly from "../component/Monthly/ServicesMonthly";
import useMediaQuery from "@mui/material/useMediaQuery";

function Page3month() {
  // use media query
  const matches = useMediaQuery("(max-width:376px)");
  // state to listen to window back button
  const [hash, sethash] = useState(window.location.hash);
  
  // handel back button
  // useEffect(() => {
  //   sethash("page3month");
  //   window.location.hash = "page3month";
  //   window.addEventListener("hashchange", function (e) {
  //     localStorage.removeItem("Online service");
  //     localStorage.removeItem("Larger storage");
  //     localStorage.removeItem("Customizable Profile");
  //   });
  // }, []);

  return (
    <main>
      {matches ? (
        // width 375
        <Stack
          sx={{ height: "100vh", background: " hsl(217, 100%, 97%)" }}
          direction="row"
          justifyItems="center"
          alignItems="center"
        >
          <Container
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              padding: "0",
              margin: "0",
              position: "relative",
              background: "hsl(217, 100%, 97%)",
              overflow: "hidden",
            }}
          >
            {/* side bar */}
            <SideBar>
              <Grid>
                <Step
                  stepNumber="1"
                  circle_color="inherit"
                  numberColor="white"
                />
              </Grid>
              <Grid>
                <Step
                  stepNumber="2"
                  circle_color="inherit"
                  numberColor="white"
                />
              </Grid>
              <Grid>
                <Step
                  stepNumber="3"
                  circle_color="hsl(206, 94%, 87%)"
                  numberColor="black"
                />
              </Grid>
              <Grid>
                <Step
                  stepNumber="4"
                  circle_color="inherit"
                  numberColor="white"
                />
              </Grid>
            </SideBar>

            {/* <Step3Yearly /> */}
            <Step3Monthly>
              <ServicesMonthly
                service_text={"Online service"}
                service_desc={"Access to multiplayer games"}
                price={"+$1/mo"}
              />

              <ServicesMonthly
                service_text={"Larger storage"}
                service_desc={"Extra 1TB of cloud save"}
                price={"+$2/mo"}
              />

              <ServicesMonthly
                service_text={"Customizable Profile"}
                service_desc={"Custom theme on your profile"}
                price={"+$2/mo"}
              />
            </Step3Monthly>
          </Container>
        </Stack>
      ) : (
        // width 1440
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
            <Step3Monthly>
              <ServicesMonthly
                service_text={"Online service"}
                service_desc={"Access to multiplayer games"}
                price={"+$1/mo"}
              />

              <ServicesMonthly
                service_text={"Larger storage"}
                service_desc={"Extra 1TB of cloud save"}
                price={"+$2/mo"}
              />

              <ServicesMonthly
                service_text={"Customizable Profile"}
                service_desc={"Custom theme on your profile"}
                price={"+$2/mo"}
              />
            </Step3Monthly>
          </Container>
        </Stack>
      )}
    </main>
  );
}

export default Page3month;
