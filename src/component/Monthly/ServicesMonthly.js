import { Checkbox, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function ServicesMonthly({ service_text, service_desc, price }) {
  const [active, setactive] = useState({
    checked: false,
    serviceName: "",
    ServicePrice: "",
    selected: false,
  });

  useEffect(() => {
    if (active.checked) {
      localStorage.setItem(
        `${active.serviceName}`,
        JSON.stringify({
          name: active.serviceName,
          price: active.ServicePrice,
          checked: active.checked,
        })
      );
    } else {
      localStorage.setItem(
        `${active.serviceName}`,
        JSON.stringify({
          name: "",
          price: "",
          checked: active.checked,
        })
      );
    }
  }, [active]);

  const handelChange = (e) => {
    let newActive = { ...active };
    newActive = {
      checked: e.target.checked,
      serviceName: service_text,
      ServicePrice: price,
      selected: true,
    };
    setactive(newActive);
  };

  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{
        backgroundColor: `${!active.checked ? "white" : "hsl(217, 100%, 97%)"}`,
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
      <Grid display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
        <Typography color={"hsl(243, 100%, 62%)"} component={"span"}>
          {price}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ServicesMonthly;
