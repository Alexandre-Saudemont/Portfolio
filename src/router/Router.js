import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.js";
import AboutMe from "../Components/AboutMe/AboutMe.js";
import Projects from "../Components/Projects/Projects.js"
import Header from "../Components/Header/Header.js"
// Creation du routeur pour gérer les différentes pages du site
const router = createBrowserRouter([
    {
        // La page d'acceuil qui a pour enfant les pages Projects et AboutMe
        path: "/",
        element: <App />,

        children: [
            {
                path: "Projects",
                element: <Projects />
            },

        ]
    },
    {
        path: "AboutMe",
        element:
            <>
                <Header />
                <AboutMe />

            </>

    }

])

export default router;