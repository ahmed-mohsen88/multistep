import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function Plan({
  planName,
  planImage,
  backgroundPlan,
  planBorder,
  price,
  free,
  handelClick,
}) {
  const matches = useMediaQuery("(max-width:376px)");

  return (
    <>
      {matches ? (
        // width 375
        <Grid
          container
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          width={"100%"}
          minHeight={"85px"}
          maxHeight={"88px"}
          borderRadius={"9px"}
          backgroundColor={backgroundPlan}
          border={"2px solid"}
          borderColor={planBorder}
          className="plan"
          onClick={(e) => handelClick(planName, price, e)}
        >
          <Grid margin={"15px"}>
            <img src={planImage} alt="arcade" />
          </Grid>
          <Grid margin={"15px 0"}>
            <Typography
              color={"hsl(213, 96%, 18%)"}
              fontWeight={"500"}
              component={"h3"}
            >
              {planName}
            </Typography>
            <Typography
              component={"p"}
              color="hsl(231, 11%, 63%)"
              fontSize={".8rem"}
            >
              {price}
            </Typography>
            <Typography
              color={"hsl(213, 96%, 18%)"}
              fontWeight={"400"}
              fontSize=".7rem"
              component={"p"}
            >
              {free}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        // width 1440
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
          onClick={(e) => handelClick(planName, price, e)}
        >
          <Grid margin={"15px"}>
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
      )}
    </>
  );
}

export default Plan;
