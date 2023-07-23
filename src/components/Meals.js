import React from "react";

// PHOTOS

import mealOne from "../img/meals/meal-1.jpg";
import mealTwo from "../img/meals/meal-2.jpg";
// ICONS

import LocalFireDepartmentOutlined from "@mui/icons-material/LocalFireDepartmentOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import DoneIcon from "@mui/icons-material/Done";

// MATERIAL ICON
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export const Meals = () => {
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
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="meal">
          <img src={mealOne} alt="Japanese Gyozas" className="meal-img"></img>

          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>

            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <LocalFireDepartmentOutlined
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  <strong>650</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <RestaurantMenuOutlinedIcon
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <StarBorderPurple500OutlinedIcon
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="meal">
          <img src={mealTwo} alt="Avocado Salad" className="meal-img"></img>

          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>

            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <LocalFireDepartmentOutlined
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  <strong>400</strong> Calories
                </span>
              </li>
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <RestaurantMenuOutlinedIcon
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ThemeProvider theme={theme}>
                  <StarBorderPurple500OutlinedIcon
                    className="meal-icon"
                    fontSize="large"
                    color="secondary"
                  />
                </ThemeProvider>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet</h3>
          <ul className="list">
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  sx={{ fontSize: "3rem" }}
                  color="secondary"
                />
              </ThemeProvider>
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <ThemeProvider theme={theme}>
                <DoneIcon
                  className="list-icon"
                  // fontSize="large"
                  color="secondary"
                  sx={{ fontSize: "3rem" }}
                />
              </ThemeProvider>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="/" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};
