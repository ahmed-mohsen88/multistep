import React, { useState } from "react";
import { Button, Grid, Switch, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Plan from "./Plan";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "../assets/Css/step2.css";

function Step2() {
  // state to switch between month and year
  const [activeState, setActiveState] = useState({
    activeColor: "hsl(213, 96%, 18%)",
    inActiveColor: "hsl(231, 11%, 63%)",
    checked: false,
  });
  // state to set active plan
  const [plans, setplan] = useState({
    backgroundPlan: "white",
    planBorder: "hsl(231, 11%, 63%)",
    eventTarget: "",
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
    let h = { ...activeState };
    if (event.target.checked) {
      h = {
        inActiveColor: "hsl(213, 96%, 18%)",
        activeColor: "hsl(231, 11%, 63%)",
        checked: event.target.checked,
      };
      setActiveState(h);
    } else {
      h = {
        activeColor: "hsl(213, 96%, 18%)",
        inActiveColor: "hsl(231, 11%, 63%)",
        checked: event.target.checked,
      };
      setActiveState(h);
    }
  };

  // handel choose
  const handelClick = (planName, e) => {
    let newPlan = { ...plans };
    newPlan = {
      backgroundPlan: "hsl(231, 100%, 99%)",
      planBorder: "hsl(213, 96%, 33%)",
      eventTarget: planName,
    };
    setplan(newPlan);
  };
  return (
    // container
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
        <Typography component={"p"}>
          You have the option of monthly or yearly billing.
        </Typography>
      </Grid>

      {/* plan */}
      <Grid container justifyContent={"space-between"}>
        <Plan
          planName="Arcade"
          planImage={arcade}
          backgroundPlan={
            "Arcade" === plans.eventTarget ? plans.backgroundPlan : "none"
          }
          planBorder={
            "Arcade" === plans.eventTarget ? plans.planBorder : "none"
          }
          price={!activeState.checked ? "$9/mo" : "$90/yr"}
          free={!activeState.checked ? "" : "2 months free"}
          handelClick={(planName, e) => handelClick(planName, e)}
        />
        <Plan
          planName="Advanced"
          planImage={advanced}
          backgroundPlan={
            "Advanced" === plans.eventTarget ? plans.backgroundPlan : "none"
          }
          planBorder={
            "Advanced" === plans.eventTarget ? plans.planBorder : "none"
          }
          price={!activeState.checked ? "$12/mo" : "$120/yr"}
          free={!activeState.checked ? "" : "2 months free"}
          handelClick={(planName, e) => handelClick(planName, e)}
        />
        <Plan
          planName="Pro"
          planImage={pro}
          backgroundPlan={
            "Pro" === plans.eventTarget ? plans.backgroundPlan : "none"
          }
          planBorder={"Pro" === plans.eventTarget ? plans.planBorder : "none"}
          price={!activeState.checked ? "$15/mo" : "$150/yr"}
          free={!activeState.checked ? "" : "2 months free"}
          handelClick={(planName, e) => handelClick(planName, e)}
        />
      </Grid>

      {/* switch */}
      <Grid container width={"100%"} backgroundColor={" hsl(217, 100%, 97%)"}>
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

export default Step2;
