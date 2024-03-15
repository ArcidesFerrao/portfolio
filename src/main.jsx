import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css'

import App from './App.jsx';

import ErrorPage from './Components/ErrorPage.jsx';
import BlogPage from './Components/BlogPage.jsx';
import Home from './Components/Home.jsx';


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
        // element: <About />
      },
      {
        path: '/projects',
        // element: <Projects />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
