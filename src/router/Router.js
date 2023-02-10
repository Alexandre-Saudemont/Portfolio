import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Projects from "../Components/Projects/Projects.js"
import Contact from "../Components/Contact/Contact.js";
import Home from "../Components/Home/Home.js";
import CV from "../Components/CV/CV.js";
// Creation du routeur pour gérer les différentes pages du site
const router = createBrowserRouter([
    {

        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "Projects",
                element: <Projects />
            },
            {
                path: "AboutMe",
                element: <AboutMe />
            },
            {
                path: "Contact",
                element: <Contact />
            },
            {
                path: "CV",
                element: <CV />
            }
        ]
    },
])

export default router;