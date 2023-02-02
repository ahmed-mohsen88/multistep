import React from "react";
import Services from "./ServicesMonthly";
import { Button, Grid, Stack, Typography } from "@mui/material";
import ServicesMonthly from "./ServicesMonthly";

function Step3Monthly() {
  return (
    <Stack
      style={{
        height: "570px",
        width: "50%",
      }}
      maxHeight={"570"}
      direction={"column"}
      alignItems={"flex-start"}
      paddingTop={"22px"}
      justifyContent={"flex-start"}
      marginLeft={"100px"}
      spacing={4}
    >
      <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"40px"}>
        <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
          Pick add-ons
        </Typography>
        <Typography component={"p"}>
          Add-ons help enhance your gaming experience.
        </Typography>
      </Grid>

      <Grid container gap={2}>
        <ServicesMonthly />
        <ServicesMonthly />
        <ServicesMonthly />
      </Grid>

      <Grid container height={"100%"} justifyContent={"space-between"}>
        <Button
          sx={{
            backgroundColor: "hsl(213, 96%, 18%)",
            color: "white",
            alignSelf: "flex-end",
            height: "49px",
            width: "124px",
          }}
        >
          Go Back
        </Button>
        <Button
          sx={{
            backgroundColor: "hsl(213, 96%, 18%)",
            color: "white",
            alignSelf: "flex-end",
            height: "49px",
            width: "124px",
          }}
        >
          Next Step
        </Button>
      </Grid>
    </Stack>
  );
}

export default Step3Monthly;
