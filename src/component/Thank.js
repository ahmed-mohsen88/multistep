import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import thank from "../assets/images/icon-thank-you.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

function Thank() {
  const matches = useMediaQuery("(max-width:376px)");
  return (
    <>
      {matches ? (
        <Stack
          style={{
            // minHeight: "440px",
            // maxHeight: "500px",
            width: "340px",
            backgroundColor: "white",
            position: "absolute",
            top: "11.5%",
            margin: "20px",
            left: "0",
          }}
          maxHeight={"570"}
          direction={"column"}
          alignItems={"center"}
          padding={"30px"}
          justifyContent={"flex-start"}
          spacing={4}
        >
          <img src={thank} alt="thank you" style={{ paddingTop: "60px" }} />
          <Typography
            fontSize={"2rem"}
            fontWeight={700}
            color={"hsl(213, 96%, 18%)"}
            component={"h1"}
            style={{ paddingTop: "30px" }}
          >
            Thank you!
          </Typography>
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "1.05rem",
              fontWeight: "400",
              color: "hsl(231, 11%, 63%)",
            }}
          >
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </Stack>
      ) : (
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
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Typography>
        </Stack>
      )}
    </>
  );
}

export default Thank;
