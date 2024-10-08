import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/add',
    element: <AddCoffee/>
  },
  {
    path: 'update/:id',
    element: <UpdateCoffee/>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
