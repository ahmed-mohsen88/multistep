import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import thank from "../assets/images/icon-thank-you.svg";

function Finishing() {
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
      gap={3}
    >
      <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"40px"}>
        <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
          Finishing up
        </Typography>
        <Typography component={"p"}>
          Double-check everything looks OK before confirming.
        </Typography>
      </Grid>

      <Grid
        container
        sx={{
          background: "hsl(217, 100%, 97%)",
          padding: "25px",
          borderRadius: "9px",
        }}
      >
        <Grid container justifyContent={"space-between"} display={"flex"}>
          <Stack item>
            <Typography color={"hsl(213, 96%, 18%)"} component={"h2"}>
              Arcade (Monthly)
            </Typography>
            <Link>Change</Link>
          </Stack>
          <Grid item alignItems={"center"} display={"flex"}>
            <Typography color={"hsl(213, 96%, 18%)"} component={"span"}>
              $9/mo
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          gap={2}
          borderTop={"1px solid gray"}
          paddingTop={"20px"}
          marginTop={"20px"}
        >
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Online Services</Typography>
            <Typography component={"span"}>+$1/mo</Typography>
          </Grid>
          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Larger Storage</Typography>
            <Typography component={"span"}>+2$/mo</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"25px"}
        paddingTop={"0px"}
      >
        <Typography>Total (per month)</Typography>
        <Typography
          color={"hsl(243, 100%, 62%)"}
          fontSize={"1.2rem"}
          component={"span"}
          fontWeight={700}
        >
          +2$/mo
        </Typography>
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

export default Finishing;
