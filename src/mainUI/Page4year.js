import React, { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import SideBar from "../component/SideBar";
import Step from "../component/Step";
import { Container } from "@mui/system";
import FinishingYear from "../component/FinishingYear";
import useMediaQuery from "@mui/material/useMediaQuery";

function Page4year() {
  const matches = useMediaQuery("(max-width:376px)");

  return (
    <>
      {matches ? (
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
              // width: "100%",
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
                  circle_color="inherit"
                  numberColor="white"
                />
              </Grid>
              <Grid>
                <Step
                  stepNumber="4"
                  circle_color="hsl(206, 94%, 87%)"
                  numberColor="black"
                />
              </Grid>
            </SideBar>
            {/* page 4 */}
            <FinishingYear />
          </Container>
        </Stack>
      ) : (
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
      )}
    </>
  );
}

export default Page4year;
