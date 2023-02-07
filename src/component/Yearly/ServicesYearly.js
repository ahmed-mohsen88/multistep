import { Checkbox, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function ServicesYearly({ service_text, service_desc, price }) {
  // state  to set active service
  const [active, setactive] = useState({
    checked: false,
    serviceName: "",
    ServicePrice: "",
  });
  // store values in local storage
  useEffect(() => {
    if (active.checked) {
      localStorage.setItem(
        `${active.serviceName}`,
        JSON.stringify({
          name: active.serviceName,
          price: active.ServicePrice,
        })
      );
    } else {
      localStorage.setItem(
        `${active.serviceName}`,
        JSON.stringify({
          name: "",
          price: "",
        })
      );
    }
  }, [active]);

  // handel service click
  const handelChange = (e) => {
    let newActive = { ...active };
    newActive = {
      checked: e.target.checked,
      serviceName: service_text,
      ServicePrice: price,
    };
    setactive(newActive);
  };
  // use media query
  const matches = useMediaQuery("(max-width:376px)");

  return (
    <>
      {matches ? (
        // 375 width
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            backgroundColor: `${
              !active.checked ? "white" : "hsl(217, 100%, 97%)"
            }`,
            border: `2px solid ${
              !active.checked ? "hsl(229, 24%, 87%)" : "hsl(243, 100%, 62%)"
            }`,
            padding: "10px",
            borderRadius: "9px",
          }}
          height={"60px"}
          width={"100%"}
        >
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Checkbox
                checked={active.checked}
                onChange={(e) => handelChange(e)}
              />
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"flex-start"}
              direction={"column"}
            >
              <Typography
                component={"h2"}
                color={"hsl(213, 96%, 18%)"}
                fontWeight={700}
                fontSize={".77rem"}
              >
                {service_text}
              </Typography>
              <Typography
                component={"p"}
                color={"hsl(231, 11%, 63%)"}
                fontWeight={400}
                fontSize={".64rem"}
              >
                {service_desc}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Typography
              color={"hsl(243, 100%, 62%)"}
              component={"span"}
              fontSize={".7rem"}
              fontWeight={"500"}
            >
              {price}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        // 1440 width
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            backgroundColor: `${
              !active.checked ? "white" : "hsl(217, 100%, 97%)"
            }`,
            border: `2px solid ${
              !active.checked ? "hsl(229, 24%, 87%)" : "hsl(243, 100%, 62%)"
            }`,
            padding: "10px",
            borderRadius: "9px",
          }}
          height={"80px"}
        >
          <Grid display={"flex"} justifyContent={"space-between"} gap={2}>
            <Grid
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Checkbox
                checked={active.checked}
                onChange={(e) => handelChange(e)}
              />
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"flex-start"}
              direction={"column"}
            >
              <Typography
                component={"h2"}
                color={"hsl(213, 96%, 18%)"}
                fontWeight={700}
                fontSize={"1rem"}
              >
                {service_text}
              </Typography>
              <Typography
                component={"p"}
                color={"hsl(231, 11%, 63%)"}
                fontWeight={500}
                fontSize={"1rem"}
              >
                {service_desc}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Typography color={"hsl(243, 100%, 62%)"} component={"span"}>
              {price}
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ServicesYearly;
