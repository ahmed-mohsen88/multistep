import { Stack, Typography } from "@mui/material";
import React from "react";
import thank from "../assets/images/icon-thank-you.svg";

function Thank() {
  return (
    <Stack
      style={{
        height: "570px",
        width: "50%",
      }}
      maxHeight={"570"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      marginLeft={"100px"}
      gap={2}
      marginTop={"50px"}
    >
      <img src={thank} alt="thank you" />
      <Typography
        fontSize={"2rem"}
        fontWeight={700}
        color={"hsl(213, 96%, 18%)"}
        component={"h1"}
      >
        Thank you!
      </Typography>
      <Typography textAlign={"center"} color={"hsl(231, 11%, 63%)"}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </Stack>
  );
}

export default Thank;
