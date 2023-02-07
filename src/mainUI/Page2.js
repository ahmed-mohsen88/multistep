import React from "react";
import SideBar from "../component/SideBar";
import { Container, Grid, Stack } from "@mui/material";
import Step2 from "../component/Step2";
import Step from "../component/Step";
import "../assets/Css/step2.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function Page2() {
  // use media query
  const matches = useMediaQuery("(max-width:376px)");
  return (
    <main>
      {matches ? (
        // width 375
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
          {/* side bar 375 */}
          <SideBar>
            <Grid>
              <Step stepNumber="1" circle_color="inherit" numberColor="white" />
            </Grid>
            <Grid>
              <Step
                stepNumber="2"
                circle_color="hsl(206, 94%, 87%)"
                numberColor="black"
              />
            </Grid>
            <Grid>
              <Step stepNumber="3" circle_color="inherit" numberColor="white" />
            </Grid>
            <Grid>
              <Step stepNumber="4" circle_color="inherit" numberColor="white" />
            </Grid>
          </SideBar>
          {/* plan choose page2 375 */}
          <Step2 />
        </Container>
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
                circle_color="hsl(206, 94%, 87%)"
                numberColor="black"
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

            {/* step2 */}
            <Step2 />
          </Container>
        </Stack>
      )}
    </main>
  );
}

export default Page2;
