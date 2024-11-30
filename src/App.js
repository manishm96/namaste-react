import react from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Cart from "./components/Cart";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import "./App.css";

/*
Design - FOOD DELIVERY APP
Components:
1. Header
    * Logo
    * Navigation items
2. Body
    * Search bar
    * Cards container
        * Card
            * Image
            * Name
            * Price
            * Rating
3. Footer
    * Social media links
    * CC info
 */

// Swiggy mock data

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

/**
 * Key Points:
 * 1. Created Header, Body and RestaurantCard components
 * 2. Used mock data to display restaurant cards in the app.
 * 3. Used props to pass data to RestaurantCard component. Props are just like function arguments that are used to pass data from parent to child components in React.
 * 4. Made App.js as a module type file.
 */
