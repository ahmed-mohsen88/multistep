import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import page2 from "../mainUI/Page2";
import Page2 from "../mainUI/Page2";
import Step2 from "./Step2";

function Form() {
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
      spacing={2}
    >
      <Grid container color={"hsl(213, 96%, 18%)"}>
        <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
          Personal info
        </Typography>
        <Typography component={"span"}>
          Please provide your name, email address, and phone number.
        </Typography>
      </Grid>

      <Grid container rowSpacing={3}>
        <Grid item style={{ width: "100%" }}>
          <Typography item color={"hsl(213, 96%, 18%)"}>
            Name
          </Typography>
          <TextField
            item
            style={{ width: "100%", color: "hsl(231, 11%, 63%)" }}
            hiddenLabel
            helperText
            placeholder={"e.g. Stephen King"}
          />
        </Grid>

        <Grid item style={{ width: "100%" }}>
          <Typography item color={"hsl(213, 96%, 18%)"}>
            Email Address
          </Typography>
          <TextField
            item
            style={{ width: "100%" }}
            hiddenLabel
            helperText
            placeholder={"e.g. stephenking@lorem.com"}
          />
        </Grid>

        <Grid item style={{ width: "100%" }}>
          <Typography item color={"hsl(213, 96%, 18%)"}>
            Phone Number
          </Typography>
          <TextField
            item
            style={{ width: "100%" }}
            hiddenLabel
            helperText
            placeholder={"e.g. +1 234 567 890"}
          />
        </Grid>
      </Grid>

      <Grid
        container
        height={"100%"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <Link to={"/page2"} style={{ textDecoration: "none" }}>
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

export default Form;
