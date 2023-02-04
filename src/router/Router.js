import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Projects from "../Components/Projects/Projects.js"
import Header from "../Components/Header/Header.js"
// Creation du routeur pour gérer les différentes pages du site
const router = createBrowserRouter([
    {

        path: "/",
        element: <App />,

    },
    {
        path: "Projects",
        element:
            <>
                <Header />
                <Projects />
            </>
    },
    {
        path: "AboutMe",
        element:
            <>
                <Header />
                <AboutMe />

            </>
    },

])

export default router;