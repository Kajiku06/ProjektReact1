import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navigation/NavBar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/home',
    element:<Home/>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>,
)
