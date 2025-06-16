import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

// Global style
import './scss/manifest.css'

// Components
import { PageWrapper, Main } from './App_Wrapper.jsx'
import Projects from './components/Projects.jsx'
import {
  Projects_Sunstop,
  Sunstop_Main_Section1,
  Sunstop_Main_Section2,
} from './components/Projects/Sunstop.jsx'
import { Projects_Biodiversity, Biodiversity_Main_Temp } from './components/Projects/Biodiversity.jsx'
import { Projects_Convey, Convey_Main_Temp } from './components/Projects/Convey.jsx'
import { Projects_Studbud, Studbud_Main_Temp } from './components/Projects/Studbud.jsx'

const router = createBrowserRouter(
  [
    {
      element: <PageWrapper />,
      children: [
        {
          element: <Main />,
          children: [
            { path: '/', element: <Projects /> },
            {
              element: <Projects_Sunstop />,
              children: [
                {
                  path: '/projects/sunstop/',
                  element: <Sunstop_Main_Section1 />,
                },
                {
                  path: '/projects/sunstop/research',
                  element: <Sunstop_Main_Section2 />,
                },
                {
                  path: '/projects/sunstop/testing',
                  element: <Sunstop_Main_Section2 />,
                },
              ],
            },
            {
              element: <Projects_Biodiversity />,
              children: [
                {
                  path: '/projects/biodiversity/',
                  element: <Biodiversity_Main_Temp />,
                },
              ],
            },
            {
              element: <Projects_Convey />,
              children: [{ path: '/projects/convey/', element: <Convey_Main_Temp /> }],
            },
            {
              element: <Projects_Studbud />,
              children: [{ path: '/projects/studbud/', element: <Studbud_Main_Temp /> }],
            },
          ],
        },
      ],
    },
  ],
  { basename: '/portfolio' }
)

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
