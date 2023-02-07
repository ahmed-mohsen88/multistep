import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import "../assets/Css/form.css";
import styled from "styled-components";

function Form({ formSubmit }) {
  // state
  const [profile, setprofile] = useState({
    name: "",
    email: "",
    phone: "",
    err: {
      name: false,
      email: false,
      phone: false,
      message: "",
    },
    loading: false,
  });
  // use media query
  const matches = useMediaQuery("(max-width:376px)");

  // update state
  const handelChange = (e, name) => {
    const newProfile = { ...profile };
    newProfile[name] = e.target.value;
    setprofile(newProfile);
  };

  // save to local storage &&&& validation
  const navigate = useNavigate();
  const saveProfile = (e) => {
    e.preventDefault();
    // validation
    if (!profile.name) {
      setprofile({
        ...profile,
        err: { name: true, message: "Please fill name field" },
      });
    } else if (profile.name.length < 10) {
      setprofile({
        ...profile,
        err: { email: true, message: "name should be at least 10 character" },
      });
    } else if (!profile.email) {
      setprofile({
        ...profile,
        err: { email: true, message: "Please fill Email field" },
      });
    } else if (!profile.email.includes("@")) {
      setprofile({
        ...profile,
        err: { email: true, message: "Email should contain @ character" },
      });
    } else if (!profile.phone) {
      setprofile({
        ...profile,
        err: { phone: true, message: "Please fill Phone field" },
      });
    } else if (isNaN(profile.phone)) {
      setprofile({
        ...profile,
        err: { phone: true, message: "phone must be a number" },
      });
    } else if (profile.phone.length < 10) {
      setprofile({
        ...profile,
        err: { email: true, message: "Phone should be at least 10 numbers" },
      });
    } else {
      localStorage.setItem(
        "profile",
        JSON.stringify({
          name: profile.name,
          email: profile.email,
          phone: profile.phone,
        })
      );
      setprofile({ ...profile, loading: true });
      setTimeout(() => {
        navigate("/page2");
      }, 3000);
    }
  };

  return (
    <>
      {matches ? (
        // width 375
        <Stack
          style={{
            minHeight: "395px",
            maxHeight: "450px",
            width: "93%%",
            background: "hsl(231, 100%, 99%)",
            top: "100px",
            left: "0px",
            boxShadow: "0px 0px 18px -4px",
            borderRadius: "9px",
          }}
          maxHeight={"620px"}
          direction={"column"}
          alignItems={"flex-start"}
          padding={"30px 20px"}
          justifyContent={"flex-start"}
          marginLeft={"15px"}
          marginRight={"15px"}
          position={"absolute"}
        >
          {/* heading */}
          <Grid container color={"hsl(213, 96%, 18%)"}>
            <Typography component={"h1"} fontWeight={700} fontSize={"1.7rem"}>
              Personal info
            </Typography>
            <Typography component={"span"}>
              Please provide your name, email address, and phone number.
            </Typography>
          </Grid>
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            id="mainForm"
            onSubmit={(e) => {
              saveProfile(e);
            }}
          >
            {/* if form submitted successfully */}
            {profile.loading && (
              <>
                <CircularProgress />
                <Snackbar
                  open={true}
                  autoHideDuration={6000}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Alert
                    severity="success"
                    sx={{ width: "100%", marginBottom: "130px" }}
                  >
                    {" "}
                    success !
                  </Alert>
                </Snackbar>
              </>
            )}
            <Grid container rowSpacing={2.5} marginTop={"5px"}>
              <Grid item style={{ width: "100%", paddingTop: "15px" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>Name</Typography>
                  {profile.err.name && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        {profile.err.message}{" "}
                      </Typography>
                      {/* <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Alert
                          severity="error"
                          sx={{ width: "100%", marginBottom: "130px" }}
                        >
                          {profile.err.message}
                        </Alert>
                      </Snackbar> */}
                    </>
                  )}
                </Grid>
                <AntSwitch
                  className="input"
                  style={{
                    width: "100%",
                    color: "hsl(231, 11%, 63%)",
                    padding: "0",
                  }}
                  hiddenLabel
                  placeholder={"e.g. Stephen King"}
                  onChange={(e) => {
                    handelChange(e, "name");
                  }}
                />
              </Grid>

              <Grid item style={{ width: "100%", paddingTop: "15px" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>
                    Email Address
                  </Typography>
                  {profile.err.email && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        {profile.err.message}{" "}
                      </Typography>
                      {/* <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Alert
                          severity="error"
                          sx={{ width: "100%", marginBottom: "130px" }}
                        >
                          {profile.err.message}
                        </Alert>
                      </Snackbar> */}
                    </>
                  )}
                </Grid>

                <AntSwitch
                  className="input"
                  style={{ width: "100%" }}
                  hiddenLabel
                  placeholder={"e.g. stephenking@lorem.com"}
                  onChange={(e) => {
                    handelChange(e, "email");
                  }}
                />
              </Grid>

              <Grid item style={{ width: "100%", paddingTop: "15px" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>
                    Phone Number
                  </Typography>
                  {profile.err.phone && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        {profile.err.message}{" "}
                      </Typography>
                      {/* <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Alert
                          severity="error"
                          sx={{
                            width: "100%",
                            marginBottom: "100px",
                          }}
                        >
                          {profile.err.message}
                        </Alert>
                      </Snackbar> */}
                    </>
                  )}
                </Grid>
                <AntSwitch
                  className="input"
                  style={{ width: "100%" }}
                  hiddenLabel
                  placeholder={"e.g. +1 234 567 890"}
                  onChange={(e) => {
                    handelChange(e, "phone");
                  }}
                />
              </Grid>
            </Grid>
            {/* buttons */}
            <Grid
              container
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
              sx={{
                position: "fixed",
                bottom: "0",
                zIndex: "2",
                background: "white",
                width: "375px",
                height: "75px",
              }}
            >
              <Link to={"/page2"} style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    backgroundColor: "hsl(213, 96%, 18%)",
                    color: "white",
                    alignSelf: "flex-end",
                    height: "49px",
                    width: "124px",
                    margin: "15px",
                  }}
                  variant="contained"
                  role={"button"}
                  type="submit"
                  onClick={(e) => {
                    saveProfile(e);
                  }}
                >
                  Next Step
                </Button>
              </Link>
            </Grid>
          </Box>
        </Stack>
      ) : (
        // width 1440
        <Stack
          style={{
            height: "570px",
            width: "50%",
          }}
          maxHeight={"570px"}
          direction={"column"}
          alignItems={"flex-start"}
          paddingTop={"22px"}
          justifyContent={"flex-start"}
          marginLeft={"100px"}
          spacing={1}
        >
          {/* heading */}
          <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"38px"}>
            <Typography component={"h1"} fontWeight={700} fontSize={"1.5rem"}>
              Personal info
            </Typography>
            <Typography component={"span"}>
              Please provide your name, email address, and phone number.
            </Typography>
          </Grid>
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            height={"100%"}
            onSubmit={(e) => {}}
          >
            {/* if submitted successfully */}
            {profile.loading && (
              <>
                <CircularProgress />
                <Snackbar
                  open={true}
                  autoHideDuration={3000}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Alert severity="success" sx={{ width: "100%" }}>
                    success !
                  </Alert>
                </Snackbar>
              </>
            )}
            <Grid container rowSpacing={2} marginTop={"15px"}>
              <Grid item style={{ width: "100%" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>Name</Typography>
                  {profile.err.name && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        This field is required
                      </Typography>
                      <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      >
                        <Alert severity="error" sx={{ width: "100%" }}>
                          {profile.err.message}
                        </Alert>
                      </Snackbar>
                    </>
                  )}
                </Grid>
                <TextField
                  style={{ width: "100%", color: "hsl(231, 11%, 63%)" }}
                  hiddenLabel
                  placeholder={"e.g. Stephen King"}
                  onChange={(e) => {
                    handelChange(e, "name");
                  }}
                />
              </Grid>

              <Grid item style={{ width: "100%" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>
                    Email Address
                  </Typography>
                  {profile.err.email && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        This field is required
                      </Typography>
                      <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      >
                        <Alert severity="error" sx={{ width: "100%" }}>
                          {profile.err.message}
                        </Alert>
                      </Snackbar>
                    </>
                  )}
                </Grid>

                <TextField
                  style={{ width: "100%" }}
                  hiddenLabel
                  placeholder={"e.g. stephenking@lorem.com"}
                  onChange={(e) => {
                    handelChange(e, "email");
                  }}
                />
              </Grid>

              <Grid item style={{ width: "100%" }}>
                <Grid container justifyContent={"space-between"}>
                  <Typography color={"hsl(213, 96%, 18%)"}>
                    Phone Number
                  </Typography>
                  {profile.err.phone && (
                    <>
                      <Typography
                        color={" hsl(354, 84%, 57%)"}
                        fontWeight={500}
                      >
                        This field is required
                      </Typography>
                      <Snackbar
                        open={true}
                        autoHideDuration={6000}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      >
                        <Alert severity="error" sx={{ width: "100%" }}>
                          {profile.err.message}
                        </Alert>
                      </Snackbar>
                    </>
                  )}
                </Grid>
                <TextField
                  style={{ width: "100%" }}
                  hiddenLabel
                  placeholder={"e.g. +1 234 567 890"}
                  onChange={(e) => {
                    handelChange(e, "phone");
                  }}
                />
              </Grid>
            </Grid>
            {/* buttons */}
            <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
              <Button
                sx={{
                  backgroundColor: "hsl(213, 96%, 18%)",
                  color: "white",
                  alignSelf: "flex-end",
                  height: "50px",
                  width: "130px",
                }}
                variant="contained"
                role={"button"}
                type="submit"
                onClick={(e) => {
                  saveProfile(e);
                }}
              >
                Next Step
              </Button>
            </Grid>
          </Box>
        </Stack>
      )}
    </>
  );
}

const AntSwitch = styled(TextField)(() => ({
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ": {
    padding: "10px",
  },
}));

export default Form;
