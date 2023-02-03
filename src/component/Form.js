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
import { useNavigate } from "react-router-dom";

function Form() {
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

  // update state
  const handelChange = (e, name) => {
    const newProfile = { ...profile };
    newProfile[name] = e.target.value;
    setprofile(newProfile);
    console.log(profile);
  };

  // save to local storage &&&& validation
  const navigate = useNavigate();
  const saveProfile = (e) => {
    e.preventDefault();
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

  // validation

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
      <Box
        component={"form"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100%"}
        onSubmit={(e) => {
          saveProfile(e);
        }}
      >
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
        <Grid container rowSpacing={3} marginTop={"15px"}>
          <Grid item style={{ width: "100%" }}>
            <Grid container justifyContent={"space-between"}>
              <Typography color={"hsl(213, 96%, 18%)"}>Name</Typography>
              {profile.err.name && (
                <>
                  <Typography color={" hsl(354, 84%, 57%)"} fontWeight={500}>
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
              // required={true}
            />
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <Grid container justifyContent={"space-between"}>
              <Typography color={"hsl(213, 96%, 18%)"}>
                Email Address
              </Typography>
              {profile.err.email && (
                <>
                  <Typography color={" hsl(354, 84%, 57%)"} fontWeight={500}>
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
              // required={true}
            />
          </Grid>

          <Grid item style={{ width: "100%" }}>
            <Grid container justifyContent={"space-between"}>
              <Typography color={"hsl(213, 96%, 18%)"}>Phone Number</Typography>
              {profile.err.phone && (
                <>
                  <Typography color={" hsl(354, 84%, 57%)"} fontWeight={500}>
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
              // required={true}
            />
          </Grid>
        </Grid>

        <Grid container alignItems={"flex-end"} justifyContent={"flex-end"}>
          {/* <Link to={"/page2"} style={{ textDecoration: "none" }}> */}
          <Button
            // onSubmit={saveProfile}
            // onClick={(e) => {
            //   e.preventDefault();
            // }}
            sx={{
              backgroundColor: "hsl(213, 96%, 18%)",
              color: "white",
              alignSelf: "flex-end",
              height: "49px",
              width: "124px",
            }}
            variant="contained"
            role={"button"}
            type="submit"
          >
            Next Step
          </Button>
          {/* </Link> */}
        </Grid>
      </Box>
    </Stack>
  );
}

export default Form;
