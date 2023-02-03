import { Grid, Typography } from "@mui/material";
import React from "react";

function Step({ stepNumber, circle_color, numberColor, stepText }) {
  return (
    <Grid
      container
      className="step"
      spacing={2}
      display={"flex"}
      alignItems={"center"}
    >
      <Grid item xs={2.5} columns={16} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: `${circle_color}`,
            color: `${numberColor}`,
            margin: "auto",
            marginLeft: "10px",
            border: "1px solid white",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          component={"span"}
          display={"flex"}
        >
          {stepNumber}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component={"p"}>{`STEP ${stepNumber}`}</Typography>
        <Typography component={"h2"} fontWeight={700}>
          {stepText}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Step;
