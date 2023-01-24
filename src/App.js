
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllUser from './components/AllUser';
import CreateUser from './components/CreateUser';
import Details from './components/Details';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllUser></AllUser>,
    },
    {
      path: "/users/create",
      element: <CreateUser></CreateUser>,
    },

    {
      path: "/users/:id",
      loader: ({params}) =>
        fetch(
          `https://asif-sever.vercel.app/users/${params.id}`
        ),
      element: <Details></Details>,
    },
  ]);
  return (

    <div className='App'>
     <RouterProvider router={router}></RouterProvider>
    </div>



   
  );
}

export default App;
