import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Root from './pages/Root';
import ErrorPage from './pages/error-page';
import Home from './pages/Home';
import Projects from './pages/projects/Projects'
import Groups from './pages/groups/Groups'
import Events from './pages/Events'
import Companies from './pages/Companies'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/user/Login';

// These routes are the ones that appear on the header
export const primaryRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Projects",
    path: "/projects/",
    element: <Projects />,
  },
  {
    name: "Groups",
    path: "/groups/",
    element: <Groups />,
  },
  {
    name: "Events",
    path: "/events/",
    element: <Events />,
  },
  {
    name: "Companies",
    path: "/companies/",
    element: <Companies />,
  },
  {
    name: "About",
    path: "/about/",
    element: <About />,
  },
  {
    name: "Contact",
    path: "/contact/",
    element: <Contact />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: 
      [...primaryRoutes,
        {
          name: "Login",
          path: "/login/",
          element: <Login />,
        },
      ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider forceRefresh={true} router={router} />
  </React.StrictMode>
);
