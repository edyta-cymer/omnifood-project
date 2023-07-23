import React from "react";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import EggOutlinedIcon from "@mui/icons-material/EggOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const Features = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is orange as hex.
        main: "#cf711f",
      },
    },
  });
  return (
    <>
      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        <div className="feature">
          <ThemeProvider theme={theme}>
            <AllInclusiveOutlinedIcon
              className="feature-icon"
              name="infinite icon"
              // fontSize="large"
              color="secondary"
              sx={{ fontSize: "6.4rem" }}
            />
          </ThemeProvider>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <ThemeProvider theme={theme}>
            <EggOutlinedIcon
              className="feature-icon"
              name="organic egg icon"
              // fontSize="large"
              color="secondary"
              sx={{ fontSize: "6.4rem" }}
            />
          </ThemeProvider>
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <ThemeProvider theme={theme}>
            <EnergySavingsLeafOutlinedIcon
              name="no waste icon"
              className="feature-icon"
              // fontSize="large"
              color="secondary"
              sx={{ fontSize: "6.4rem" }}
            />
          </ThemeProvider>
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <ThemeProvider theme={theme}>
            <PauseOutlinedIcon
              name="pause icon"
              className="feature-icon"
              // fontSize="large"
              color="secondary"
              sx={{ fontSize: "6.4rem" }}
            />
          </ThemeProvider>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
