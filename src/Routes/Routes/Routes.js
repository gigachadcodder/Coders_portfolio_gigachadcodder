import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PathName } from "../PathName/PathName";
import { Home, AboutMe, ContactMe, Projects } from "../../Pages/Home";

const router = createBrowserRouter([
  {
    path: PathName.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: PathName.ABOUTME_ROUTE,
    element: <AboutMe />,
  },
  {
    path: PathName.CONTACTME_ROUTE,
    element: <ContactMe />,
  },
  {
    path: PathName.PROJECTS_ROUTE,
    element: <Projects />,
  },
]);

export default router;

