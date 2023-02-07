import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  Switch,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Plan from "./Plan";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import "../assets/Css/step2.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function Step2() {
  const matches = useMediaQuery("(max-width:376px)");
  // state to switch between month and year
  const [activeState, setActiveState] = useState({
    activeColor: "hsl(213, 96%, 18%)",
    inActiveColor: "hsl(231, 11%, 63%)",
    checked: false,
    month_year: "Monthly",
  });
  // state to set active plan
  const [plans, setplan] = useState({
    backgroundPlan: "white",
    planBorder: "hsl(231, 11%, 63%)",
    eventTarget: "",
    price: "",
    err: "",
  });
  // custom switch button
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 35,
    height: 19,
    padding: 0,
    display: "flex",
    "& .MuiSwitch-switchBase.Mui-checked": {
      right: 10,
    },
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
        padding: "3.5px",
        position: {
          right: 0,
        },
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 3.5,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "hsl(213, 96%, 18%)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      color: "white",
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "hsl(213, 96%, 18%)",
      boxSizing: "border-box",
    },
  }));

  // change month / year
  const handelSwitch = (event) => {
    let newActiveState = { ...activeState };
    if (event.target.checked) {
      newActiveState = {
        inActiveColor: "hsl(213, 96%, 18%)",
        activeColor: "hsl(231, 11%, 63%)",
        checked: event.target.checked,
        month_year: "Yearly",
      };
      setActiveState(newActiveState);
      handelClick();
    } else {
      newActiveState = {
        activeColor: "hsl(213, 96%, 18%)",
        inActiveColor: "hsl(231, 11%, 63%)",
        checked: event.target.checked,
        month_year: "Monthly",
      };
      setActiveState(newActiveState);
      handelClick();
    }
  };

  // handel choose
  const handelClick = (planName, price, e) => {
    let newPlan = { ...plans };
    newPlan = {
      backgroundPlan: "hsl(231, 100%, 99%)",
      planBorder: "hsl(213, 96%, 33%)",
      eventTarget: planName,
      price: price,
    };
    setplan(newPlan);
  };
  // save data to local storage
  useEffect(() => {
    localStorage.setItem(
      "plan name",
      JSON.stringify({
        name: plans.eventTarget,
        per: activeState.month_year,
        price: plans.price,
      })
    );
  }, [plans.eventTarget, activeState.month_year, plans.price]);

  // use navigation
  const navigate = useNavigate();
  const checkSelected = (e) => {
    e.preventDefault();
    if (!plans.eventTarget) {
      setplan({ ...plans, err: "please select one plan" });
    } else {
      activeState.checked ? navigate("/page3year") : navigate("/page3month");
    }
  };
  return (
    <>
      {matches ? (
        // width 375
        <>
          <Stack
            style={{
              minHeight: "468",
              maxHeight: "530px",
              width: "345px",
            }}
            direction={"column"}
            alignItems={"flex-start"}
            padding={"15px 25px"}
            justifyContent={"flex-start"}
            margin={"15px"}
            marginTop={"0"}
            borderRadius={"9px"}
            position={"absolute"}
            backgroundColor="white"
            top={"100px"}
          >
            {/* heading */}
            <Grid
              container
              color={"hsl(213, 96%, 18%)"}
              paddingTop={"0"}
              paddingBottom={"25px"}
              borderRadius={"9px"}
            >
              <Typography component={"h1"} fontWeight={700} fontSize={"1.5rem"}>
                Select your plan
              </Typography>
              <Typography
                component={"p"}
                style={{ color: "hsl(231, 11%, 63%)" }}
              >
                You have the option of monthly or yearly billing.
              </Typography>
            </Grid>

            {/* error message if not select plan */}
            <Grid
              container
              justifyContent={"space-between"}
              direction={"column"}
              gap={activeState.checked ? "10px" : "15px"}
              marginBottom={"20px"}
            >
              {plans.err && (
                <Snackbar
                  open={true}
                  autoHideDuration={6000}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Alert severity="error" sx={{ width: "100%" }}>
                    {plans.err}
                  </Alert>
                </Snackbar>
              )}
              {/* plan */}
              <Plan
                planName="Arcade"
                planImage={arcade}
                backgroundPlan={
                  "Arcade" === plans.eventTarget ? plans.backgroundPlan : "none"
                }
                planBorder={
                  "Arcade" === plans.eventTarget
                    ? plans.planBorder
                    : "hsl(231, 11%, 63%)"
                }
                price={!activeState.checked ? "$9/mo" : "$90/yr"}
                free={!activeState.checked ? "" : "2 months free"}
                handelClick={(planName, price, e) =>
                  handelClick(planName, price, e)
                }
              />
              <Plan
                planName="Advanced"
                planImage={advanced}
                backgroundPlan={
                  "Advanced" === plans.eventTarget
                    ? plans.backgroundPlan
                    : "none"
                }
                planBorder={
                  "Advanced" === plans.eventTarget
                    ? plans.planBorder
                    : "hsl(231, 11%, 63%)"
                }
                price={!activeState.checked ? "$12/mo" : "$120/yr"}
                free={!activeState.checked ? "" : "2 months free"}
                handelClick={(planName, price, e) =>
                  handelClick(planName, price, e)
                }
              />
              <Plan
                planName="Pro"
                planImage={pro}
                backgroundPlan={
                  "Pro" === plans.eventTarget ? plans.backgroundPlan : "none"
                }
                planBorder={
                  "Pro" === plans.eventTarget
                    ? plans.planBorder
                    : "hsl(231, 11%, 63%)"
                }
                price={!activeState.checked ? "$15/mo" : "$150/yr"}
                free={!activeState.checked ? "" : "2 months free"}
                handelClick={(planName, price, e) =>
                  handelClick(planName, price, e)
                }
              />
            </Grid>

            {/* switch */}
            <Grid
              container
              width={"100%"}
              backgroundColor={" hsl(217, 100%, 97%)"}
            >
              <Stack
                height="50px"
                direction="row"
                spacing={5}
                alignItems="center"
                justifyContent="center"
                width="96%"
                borderRadius="9px"
              >
                <Typography color={activeState.activeColor} fontWeight="500">
                  Monthly
                </Typography>
                <AntSwitch
                  checked={activeState.checked}
                  onChange={(e) => handelSwitch(e)}
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography color={activeState.inActiveColor}>
                  Yearly
                </Typography>
              </Stack>
            </Grid>
            {/* button */}
          </Stack>
          <Grid
            container
            justifyContent={"space-between"}
            backgroundColor={"white"}
            position={"absolute"}
            bottom={0}
            padding={"15px"}
          >
            <Link
              to={"/"}
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
              to={activeState.checked ? "/page3year" : "/page3month"}
              style={{
                display: "flex",
                textDecoration: "none",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
              onClick={(e) => {
                checkSelected(e);
              }}
            >
              <Button
                sx={{
                  backgroundColor: "hsl(213, 96%, 18%)",
                  color: "white",
                  alignSelf: "flex-end",
                  height: "40px",
                  width: "100px",
                  textAlign: "center",
                  fontSize: ".75rem",
                  fontWeight: "400",
                }}
                variant="contained"
              >
                Next Step
              </Button>
            </Link>
          </Grid>
        </>
      ) : (
        // width 1440
        <Stack
          style={{
            height: "570px",
            width: "54%",
          }}
          maxHeight={"570"}
          direction={"column"}
          alignItems={"flex-start"}
          paddingTop={"22px"}
          justifyContent={"flex-start"}
          marginLeft={"82px"}
          spacing={4}
        >
          {/* heading */}
          <Grid container color={"hsl(213, 96%, 18%)"}>
            <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
              Select your plan
            </Typography>
            <Typography component={"p"} style={{ color: "hsl(231, 11%, 63%)" }}>
              You have the option of monthly or yearly billing.
            </Typography>
          </Grid>

          {/* error message if not select plan */}
          <Grid container justifyContent={"space-between"}>
            {plans.err && (
              <Snackbar
                open={true}
                autoHideDuration={6000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity="error" sx={{ width: "100%" }}>
                  {plans.err}
                </Alert>
              </Snackbar>
            )}
            {/* plan */}
            <Plan
              planName="Arcade"
              planImage={arcade}
              backgroundPlan={
                "Arcade" === plans.eventTarget ? plans.backgroundPlan : "none"
              }
              planBorder={
                "Arcade" === plans.eventTarget
                  ? plans.planBorder
                  : "hsl(231, 11%, 63%)"
              }
              price={!activeState.checked ? "$9/mo" : "$90/yr"}
              free={!activeState.checked ? "" : "2 months free"}
              handelClick={(planName, price, e) =>
                handelClick(planName, price, e)
              }
            />
            <Plan
              planName="Advanced"
              planImage={advanced}
              backgroundPlan={
                "Advanced" === plans.eventTarget ? plans.backgroundPlan : "none"
              }
              planBorder={
                "Advanced" === plans.eventTarget
                  ? plans.planBorder
                  : "hsl(231, 11%, 63%)"
              }
              price={!activeState.checked ? "$12/mo" : "$120/yr"}
              free={!activeState.checked ? "" : "2 months free"}
              handelClick={(planName, price, e) =>
                handelClick(planName, price, e)
              }
            />
            <Plan
              planName="Pro"
              planImage={pro}
              backgroundPlan={
                "Pro" === plans.eventTarget ? plans.backgroundPlan : "none"
              }
              planBorder={
                "Pro" === plans.eventTarget
                  ? plans.planBorder
                  : "hsl(231, 11%, 63%)"
              }
              price={!activeState.checked ? "$15/mo" : "$150/yr"}
              free={!activeState.checked ? "" : "2 months free"}
              handelClick={(planName, price, e) =>
                handelClick(planName, price, e)
              }
            />
          </Grid>

          {/* switch */}
          <Grid
            container
            width={"100%"}
            backgroundColor={" hsl(217, 100%, 97%)"}
          >
            <Stack
              height="50px"
              direction="row"
              spacing={5}
              alignItems="center"
              justifyContent="center"
              width="96%"
              borderRadius="9px"
            >
              <Typography color={activeState.activeColor} fontWeight="500">
                Monthly
              </Typography>
              <AntSwitch
                checked={activeState.checked}
                onChange={(e) => handelSwitch(e)}
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography color={activeState.inActiveColor}>Yearly</Typography>
            </Stack>
          </Grid>
          {/* button */}
          <Grid container height={"100%"} justifyContent={"space-between"}>
            <Link
              to={"/"}
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
              to={activeState.checked ? "/page3year" : "/page3month"}
              style={{
                display: "flex",
                textDecoration: "none",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
              onClick={(e) => {
                checkSelected(e);
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

export default Step2;
