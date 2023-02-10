import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import CharactersInfo from "./CharactersInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/characters",
    element: <CharactersInfo />,
    children: [
      {
        path: "females",
        element: <CharactersInfo />,
      },
      {
        path: "males",
        element: <CharactersInfo />,
      },
      {
        path: "alive",
        element: <CharactersInfo />,
      },
      {
        path: "dead",
        element: <CharactersInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
