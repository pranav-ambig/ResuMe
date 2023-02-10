import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import CreatePage from './pages/Create/CreatePage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/create",
    element: <CreatePage/>,
  },
]);

function App() {
  <RouterProvider router={router}/>
}

export default App;
