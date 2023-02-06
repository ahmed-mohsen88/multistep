import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

function Finishing() {
  const matches = useMediaQuery("(max-width:376px)");
  const [data, setdata] = useState({
    planName: "",
    per: "",
    planPrice: "",
    online: "",
    onlinePrice: "",
    larger: "",
    largerPrice: "",
    custom: "",
    customPrice: "",
    total: "",
  });

  useEffect(() => {
    const plan = JSON.parse(localStorage.getItem("plan name"));
    const service1 = JSON.parse(localStorage.getItem("Online service"));
    const service2 = JSON.parse(localStorage.getItem("Larger storage"));
    const service3 = JSON.parse(localStorage.getItem("Customizable Profile"));

    setdata({
      planName: plan?.name ? plan?.name : "",
      per: plan?.per ? plan?.per : "",
      planPrice: plan?.price ? plan?.price : "",
      online: service1?.name ? service1?.name : "",
      onlinePrice: service1?.price ? service1?.price : "",
      larger: service2?.name ? service2?.name : "",
      largerPrice: service2?.price ? service2?.price : "",
      custom: service3?.name ? service3?.name : "",
      customPrice: service3?.price ? service3?.price : "",
      total:
        serviceExists(data.planPrice) +
        serviceExists(data.onlinePrice) +
        serviceExists(data.largerPrice) +
        serviceExists(data.customPrice),
    });
  }, [
    data.planName,
    data.per,
    data.planPrice,
    data.online,
    data.onlinePrice,
    data.larger,
    data.largerPrice,
    data.custom,
    data.customPrice,
    data.total,
  ]);

  //   remove items from local storage on step back
  function removeStorage() {
    localStorage.removeItem("Online service");
    localStorage.removeItem("Larger storage");
    localStorage.removeItem("Customizable Profile");
  }
  const handelRemoveStorage = () => {
    removeStorage();
  };

  // function convert string price to number to get total
  function priceConvert(priceString) {
    const arr = [];
    let finalPrice;
    if (priceString) {
      const splitPrice = priceString.split("");
      splitPrice.forEach((el) => {
        if (!isNaN(el)) {
          arr.push(el);
          finalPrice = arr.join("");
        }
      });
    }
    return finalPrice;
  }
  // check if service exists
  function serviceExists(price) {
    if (price) {
      return Number(priceConvert(price));
    } else {
      return 0;
    }
  }

  return (
    <>
      {matches ? (
        <>
          <Stack
            style={{
              // minHeight: "440px",
              // maxHeight: "500px",
              width: "340px",
              backgroundColor: "white",
              position: "absolute",
              top: "11%",
              margin: "20px",
              left: "0",
            }}
            maxHeight={"570"}
            direction={"column"}
            alignItems={"flex-start"}
            padding={"30px"}
            justifyContent={"flex-start"}
            spacing={4}
          >
            <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"10px"}>
              <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
                Finishing up
              </Typography>
              <Typography component={"p"} color={" hsl(231, 11%, 63%)"}>
                Double-check everything looks OK before confirming.
              </Typography>
            </Grid>

            <Grid
              container
              sx={{
                background: "hsl(217, 100%, 97%)",
                padding: "25px",
                borderRadius: "9px",
              }}
            >
              <Grid container justifyContent={"space-between"} display={"flex"}>
                <Stack>
                  <Typography
                    color={"hsl(213, 96%, 18%)"}
                    component={"h2"}
                    fontWeight={"700"}
                  >
                    {data.planName ? data.planName : ""}
                    {data.per ? ` (${data.per})` : ""}
                  </Typography>
                  {data.planName && (
                    <Link onClick={handelRemoveStorage} to={"/page2"}>
                      <Typography
                        color={"hsl(231, 11%, 63%)"}
                        style={{
                          textDecorationColor: "hsl(231, 11%, 63%)",
                          textDecoration: "underline",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = "hsl(243, 100%, 62%)";
                          e.target.style.textDecorationColor =
                            "hsl(243, 100%, 62%)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = "hsl(231, 11%, 63%)";
                          e.target.style.textDecorationColor =
                            "hsl(231, 11%, 63%)";
                        }}
                      >
                        Change
                      </Typography>
                    </Link>
                  )}
                </Stack>
                <Grid alignItems={"center"} display={"flex"}>
                  <Typography
                    color={"hsl(213, 96%, 18%)"}
                    component={"span"}
                    fontWeight={"500"}
                  >
                    {data.planPrice ? data.planPrice : ""}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={2}
                borderTop={"1px solid gray"}
                paddingTop={"15px"}
                marginTop={"15px"}
              >
                {data.online && (
                  <Grid
                    container
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography color={" hsl(231, 11%, 63%)"}>
                      {data.online}
                    </Typography>
                    <Typography component={"span"} color={"hsl(213, 96%, 18%)"}>
                      {data.onlinePrice}
                    </Typography>
                  </Grid>
                )}
                {data.larger && (
                  <Grid
                    container
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography color={" hsl(231, 11%, 63%)"}>
                      {data.larger}
                    </Typography>
                    <Typography component={"span"} color={"hsl(213, 96%, 18%)"}>
                      {data.largerPrice}
                    </Typography>
                  </Grid>
                )}
                {data.custom && (
                  <Grid
                    container
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography color={" hsl(231, 11%, 63%)"}>
                      {data.custom}
                    </Typography>
                    <Typography
                      component={"span"}
                      color={" hsl(213, 96%, 18%)"}
                    >
                      {data.customPrice}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>

            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={"25px"}
              paddingBottom={"0"}
              paddingTop={"0px"}
            >
              <Typography color={" hsl(231, 11%, 63%)"}>
                Total {data.per ? `(${data.per})` : ""}
              </Typography>
              <Typography
                color={"hsl(243, 100%, 62%)"}
                fontSize={"1.2rem"}
                component={"span"}
                fontWeight={700}
              >
                {data.total ? `+${data.total}$/mo` : ""}
              </Typography>
            </Grid>
          </Stack>
          {/* button */}
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
              to={"/page3month"}
              onClick={handelRemoveStorage}
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
              to="/thank"
              style={{
                display: "flex",
                textDecoration: "none",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "hsl(243, 100%, 62%)",
                  color: "white",
                  alignSelf: "flex-end",
                  height: "49px",
                  width: "124px",
                }}
                variant="contained"
              >
                Confirm
              </Button>
            </Link>
          </Grid>
        </>
      ) : (
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
          gap={3}
        >
          <Grid container color={"hsl(213, 96%, 18%)"} marginTop={"40px"}>
            <Typography component={"h1"} fontWeight={700} fontSize={"2rem"}>
              Finishing up
            </Typography>
            <Typography component={"p"} color={" hsl(231, 11%, 63%)"}>
              Double-check everything looks OK before confirming.
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              background: "hsl(217, 100%, 97%)",
              padding: "25px",
              borderRadius: "9px",
            }}
          >
            <Grid container justifyContent={"space-between"} display={"flex"}>
              <Stack>
                <Typography
                  color={"hsl(213, 96%, 18%)"}
                  component={"h2"}
                  fontWeight={"700"}
                >
                  {data.planName ? data.planName : ""}
                  {data.per ? ` (${data.per})` : ""}
                </Typography>
                {data.planName && (
                  <Link onClick={handelRemoveStorage} to={"/page2"}>
                    <Typography
                      color={"hsl(231, 11%, 63%)"}
                      style={{
                        textDecorationColor: "hsl(231, 11%, 63%)",
                        textDecoration: "underline",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "hsl(243, 100%, 62%)";
                        e.target.style.textDecorationColor =
                          "hsl(243, 100%, 62%)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "hsl(231, 11%, 63%)";
                        e.target.style.textDecorationColor =
                          "hsl(231, 11%, 63%)";
                      }}
                    >
                      Change
                    </Typography>
                  </Link>
                )}
              </Stack>
              <Grid alignItems={"center"} display={"flex"}>
                <Typography
                  color={"hsl(213, 96%, 18%)"}
                  component={"span"}
                  fontWeight={"500"}
                >
                  {data.planPrice ? data.planPrice : ""}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              gap={2}
              borderTop={"1px solid gray"}
              paddingTop={"20px"}
              marginTop={"20px"}
            >
              {data.online && (
                <Grid
                  container
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography color={" hsl(231, 11%, 63%)"}>
                    {data.online}
                  </Typography>
                  <Typography component={"span"} color={"hsl(213, 96%, 18%)"}>
                    {data.onlinePrice}
                  </Typography>
                </Grid>
              )}
              {data.larger && (
                <Grid
                  container
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography color={" hsl(231, 11%, 63%)"}>
                    {data.larger}
                  </Typography>
                  <Typography component={"span"} color={"hsl(213, 96%, 18%)"}>
                    {data.largerPrice}
                  </Typography>
                </Grid>
              )}
              {data.custom && (
                <Grid
                  container
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography color={" hsl(231, 11%, 63%)"}>
                    {data.custom}
                  </Typography>
                  <Typography component={"span"} color={" hsl(213, 96%, 18%)"}>
                    {data.customPrice}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            padding={"25px"}
            paddingTop={"0px"}
          >
            <Typography color={" hsl(231, 11%, 63%)"}>
              Total {data.per ? `(${data.per})` : ""}
            </Typography>
            <Typography
              color={"hsl(243, 100%, 62%)"}
              fontSize={"1.2rem"}
              component={"span"}
              fontWeight={700}
            >
              {data.total ? `+${data.total}$/mo` : ""}
            </Typography>
          </Grid>

          {/* button */}
          <Grid container height={"100%"} justifyContent={"space-between"}>
            <Link
              to={"/page3month"}
              onClick={handelRemoveStorage}
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
              to="/thank"
              style={{
                display: "flex",
                textDecoration: "none",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "hsl(243, 100%, 62%)",
                  color: "white",
                  alignSelf: "flex-end",
                  height: "49px",
                  width: "124px",
                }}
                variant="contained"
              >
                Confirm
              </Button>
            </Link>
          </Grid>
        </Stack>
      )}
    </>
  );
}

export default Finishing;
