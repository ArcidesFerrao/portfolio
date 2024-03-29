import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css'

import App from './App.jsx';

import ErrorPage from './Components/ErrorPage.jsx';

import Home from './Components/Home.jsx';

import AboutPage from './Components/AboutPage.jsx';

import ProjectsPage from './Components/ProComp/ProjectsPage.jsx';
import ProjectPage from './Components/ProComp/ProjectPage.jsx';
import AllProjects from './Components/ProComp/Projects.jsx';

import BlogPage from './Components/BlogComp/BlogPage.jsx';
import AllPosts from './Components/BlogComp/AllPosts.jsx';
import BlogPost from './Components/BlogComp/BlogPost.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
        children: [
          {
            path: '/projects/',
            element: <AllProjects />,
          },
          {
            path: '/projects/:id',
            element: <ProjectPage />
          }
        ]

      },
      {
        path: '/blog',
        element: <BlogPage />,
        children: [
          {
            path: '/blog/',
            element: <AllPosts />,
          },
          {
            path: '/blog/:slug',
            element: <BlogPost />,
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
