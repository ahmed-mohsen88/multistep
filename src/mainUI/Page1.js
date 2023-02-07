import React, { useState } from "react";
import SideBar from "../component/SideBar";
import Form from "../component/Form";
import { Container, Grid, Stack, Button } from "@mui/material";
import Step from "../component/Step";
import useMediaQuery from "@mui/material/useMediaQuery";

function Page1() {
  // state
  const [submit, setsubmit] = useState(false);
  // use media query
  const matches = useMediaQuery("(max-width:376px)");

  return (
    <>
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
            overflow:"hidden"
          }}
        >
          {/* sidebar */}
          <SideBar>
            <Grid>
              <Step
                stepNumber="1"
                circle_color="hsl(206, 94%, 87%)"
                numberColor="black"
              />
            </Grid>
            <Grid>
              <Step stepNumber="2" circle_color="inherit" numberColor="white" />
            </Grid>
            <Grid>
              <Step stepNumber="3" circle_color="inherit" numberColor="white" />
            </Grid>
            <Grid>
              <Step stepNumber="4" circle_color="inherit" numberColor="white" />
            </Grid>
          </SideBar>
          {/* form */}
          <Form formSubmit={submit} />
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
            {/*  sidebar */}
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
          </Container>
        </Stack>
      )}
    </>
  );
}

export default Page1;
