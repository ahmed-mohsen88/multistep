import React from "react";
import { Grid, Stack, Typography } from "@mui/material";

function Plan({
  planName,
  planImage,
  backgroundPlan,
  planBorder,
  price,
  free,
  handelClick,
}) {
  return (
    <Stack
      justifyContent={"space-between"}
      width={"30%"}
      minHeight={"180px"}
      maxHeight={"200px"}
      borderRadius={"9px"}
      backgroundColor={backgroundPlan}
      border={"2px solid"}
      borderColor={planBorder}
      className="plan"
      onClick={(e) => handelClick(planName , e)}
    >
      <Grid margin={"20px"}>
        <img src={planImage} alt="arcade" />
      </Grid>
      <Grid margin={"20px"}>
        <Typography
          color={"hsl(213, 96%, 18%)"}
          fontWeight={"500"}
          component={"h3"}
        >
          {planName}
        </Typography>
        <Typography component={"p"} color="hsl(231, 11%, 63%)">
          {price}
        </Typography>
        <Typography
          color={"hsl(213, 96%, 18%)"}
          fontWeight={"400"}
          fontSize="1rem"
          component={"p"}
        >
          {free}
        </Typography>
      </Grid>
    </Stack>
  );
}

export default Plan;
