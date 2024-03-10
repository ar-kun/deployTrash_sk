import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage.jsx';
import App from './pages/App.jsx';
import { LearnDetection } from './pages/LearnDetection.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
 },
 {
  path: '/learn',
  element: <LearnDetection />,
  errorElement: <ErrorPage />,
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  {/* <App /> */}
  <RouterProvider router={router} />
 </React.StrictMode>
);
