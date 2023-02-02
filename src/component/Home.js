import React from "react";
import sidebarLogo from "../assets/images/bg-sidebar-desktop.svg";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Radio,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Step from "./Step";
import { Stack } from "@mui/system";
import Form from "./Form";
import Step2 from "./Step2";
import Plan from "./Plan";
import Services from "./Monthly/ServicesMonthly";
import Step3Monthly from "./Monthly/Step3Monthly";
import Step3Yearly from "./Yearly/Step3Yearly";
import Finishing from "./Finishing";
import Thank from "./Thank";
import SideBar from "./SideBar";

function Home() {
  return (
    <Stack
      sx={{ height: "100vh", background: " hsl(206, 94%, 87%)" }}
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
        }}
      >
        {/* side bar */}
        <SideBar />

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

export default Home;
