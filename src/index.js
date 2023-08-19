import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/Home/HomePage';
import CreatePage from './pages/Create/CreatePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function adjustZoom() {
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const zoomLevel = (viewportWidth) / 1920;

  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = "top left"
}

// Initial adjustment and on window resize
adjustZoom();
window.addEventListener('resize', adjustZoom);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/create",
    element: <CreatePage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
