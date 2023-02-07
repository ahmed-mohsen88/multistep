import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

function Step3Monthly(props) {
  const matches = useMediaQuery("(max-width:376px)");
  return (
    <>
      {matches ? (
        // container 375 width
        <>
          <Stack
            style={{
              minHeight: "380px",
              maxHeight: "400px",
              width: "340px",
              backgroundColor: "white",
              position: "absolute",
              top: "11%",
              margin: "20px",
              left: "0",
              borderRadius: "9px",
            }}
            maxHeight={"570"}
            direction={"column"}
            alignItems={"flex-start"}
            padding={"30px"}
            justifyContent={"flex-start"}
            spacing={4}
          >
            {/* heading */}
            <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"10px"}>
              <Typography component={"h1"} fontWeight={700} fontSize={"1.5rem"}>
                Pick add-ons
              </Typography>
              <Typography
                component={"p"}
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                Add-ons help enhance your gaming experience.
              </Typography>
            </Grid>

            {/* serveries */}
            <Grid container gap={2}>
              {props.children}
            </Grid>

            {/* button */}
          </Stack>
          <Grid
            container
            height={"100%"}
            justifyContent={"space-between"}
            padding={"20px"}
            sx={{
              backgroundColor: "white",
              height: "80px",
              position: "absolute",
              bottom: "0",
            }}
          >
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
        </>
      ) : (
        // container 1440 width
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
      )}
    </>
  );
}

export default Step3Monthly;
