import React from "react";
import About from "../views/pages/about/About";
import Contact from "../views/pages/contact/Contact";
import Home from "../views/pages/home/Home";

const publicRoute = [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    path: "/about",
    name: "About",
    component: <About />,
  },
  {
    path: "/contact",
    name: "Contact",
    component: <Contact />,
  },
];

export default publicRoute;
