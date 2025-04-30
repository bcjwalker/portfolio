import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

// Global style
import "./scss/manifest.css";

// Components
import { PageWrapper, Main } from "./App_Wrapper.jsx";
import Projects from "./components/Projects.jsx";
  import Projects_Sunstop from "./components/Projects/Sunstop.jsx";
  import Projects_Biodiversity from "./components/Projects/Biodiversity.jsx";
  import Projects_Convey from "./components/Projects/Convey.jsx";
  import Projects_Studbud from "./components/Projects/Studbud.jsx";

const router = createBrowserRouter([
  { element: <PageWrapper/>,
    children: [
      { element: <Main/>,
        children: [
          { path: "/", element: <Projects/> },
          { path: "/projects/biodiversity", element: <Projects_Biodiversity/> },
          { path: "/projects/sunstop", element: <Projects_Sunstop/> },
          { path: "/projects/convey", element: <Projects_Convey/> },
          { path: "/projects/studbud", element: <Projects_Studbud/> },
        ]
      }
    ]
  }],
  { basename: "/portfolio" }
);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);