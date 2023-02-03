import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Step3Monthly(props) {
  return (
    // container
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
      {/* heading */}
      <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"40px"}>
        <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
          Pick add-ons
        </Typography>
        <Typography component={"p"} style={{ color: "hsl(231, 11%, 63%)" }}>
          Add-ons help enhance your gaming experience.
        </Typography>
      </Grid>

      {/* serveries */}
      <Grid container gap={2}>
        {props.children}
      </Grid>

      {/* button */}
      <Grid container height={"100%"} justifyContent={"space-between"}>
        <Link
          to={"/page2"}
          style={{
            display: "flex",
            textDecoration: "none",
            alignSelf: "flex-end",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              color: "hsl(231, 11%, 63%)",
              height: "38px",
              width: "124px",
            }}
          >
            Go back
          </Typography>
        </Link>
        <Link
          to="/page4"
          style={{
            display: "flex",
            textDecoration: "none",
            alignSelf: "flex-end",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: "hsl(213, 96%, 18%)",
              color: "white",
              alignSelf: "flex-end",
              height: "49px",
              width: "124px",
            }}
            variant="contained"
          >
            Next Step
          </Button>
        </Link>
      </Grid>
    </Stack>
  );
}

export default Step3Monthly;
