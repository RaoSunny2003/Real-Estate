import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Routes/Home/Home";
import ListPage from "./Routes/ListPage/ListPage";
import Layout from "./Routes/Layout/Layout";
import Login from "./Routes/Login/Login";
import SinglePage from "./Routes/SInglePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
