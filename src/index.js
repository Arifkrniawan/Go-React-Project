import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './component/Error';
import Home from "./component/Home";
import Movies from './component/Movies';
import Genre from './component/Genre';
import AddMovie from './component/AddMovie';
import ManageCatalogue from './component/ManageCatalogue';
import Graphql from './component/Graphql';
import Login from './component/Login';
import Movie from './component/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        index: true, element: <Home/>
      },
      {
        path:"/movies",
        element:<Movies/>,
      },
      {
        path:"/movie/:id",
        element:<Movie/>,
      },
      {
        path:"/genre",
        element:<Genre/>,
      },
      {
        path:"/admin/movie/0",
        element:<AddMovie/>,
      },
      {
        path:"/admin",
        element:<ManageCatalogue/>,
      },
      {
        path:"/graphql",
        element:<Graphql/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


