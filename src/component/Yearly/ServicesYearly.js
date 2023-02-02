import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";

function ServicesYearly() {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{
        background: "hsl(217, 100%, 97%)",
        border: "2px solid hsl(213, 96%, 18%)",
        padding: "10px",
        borderRadius: "9px",
      }}
      height={"80px"}
    >
      <Grid
        item
        display={"flex"}
        justifyContent={"space-between"}
        direction={"row"}
        gap={2}
      >
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Checkbox defaultChecked />
        </Grid>
        <Grid
          justifyContent={"center"}
          alignItems={"flex-start"}
          direction={"column"}
        >
          <Typography item component={"h2"} color={"hsl(213, 96%, 18%)"}>
            Online service
          </Typography>
          <Typography item component={"p"} color={"hsl(231, 11%, 63%)"}>
            Access to multiplayer games
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Typography color={"hsl(243, 100%, 62%)"} item component={"span"}>
          +$10/yr
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ServicesYearly;
