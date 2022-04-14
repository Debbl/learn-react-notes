import React from 'react';
import { useRoutes } from 'react-router';
import About, { Culture } from '../pages/about';
import Home from '../pages/home';

export default function AppRouters() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
      children: [
        {
          path: 'culture',
          element: <Culture />,
        },
      ],
    },
  ]);
}
