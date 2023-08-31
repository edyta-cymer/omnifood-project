import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Features from "../components/Features";

const Pricing = () => {
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
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">per month. That's just 13$ per meal!</p>
          </header>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>1 meal per day</span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>Order from 11am and 9pm</span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>Delivery is free</span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <CloseIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span></span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="/#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>Delivery is free</span>
            </li>
            <li className="meal-attribute">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="meal-icon"
                  fontSize="large"
                  color="secondary"
                />
              </ThemeProvider>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="/#" className="btn btn--full">
              Start eating well
            </a>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Pricing;
