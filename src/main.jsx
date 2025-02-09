import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import PersonDetails from './components/PersonDetails/PersonDetails.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
   {
    path:"/about",
    element:<About></About>
   },
   {
    path:"/contact",
    element:<Contact></Contact>
   },
   {
    path:"/users",
    loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
    element:<Users></Users>
   },
   {
    path: '/user/:userId',
    loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
   element: <PersonDetails></PersonDetails>
   }  
   
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
