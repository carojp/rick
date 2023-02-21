import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharactersList from "./CharactersList";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters",
    element: <CharactersList />,
    children: [
      {
        path: "females",
        element: <CharactersList />,
      },
      {
        path: "males",
        element: <CharactersList />,
      },
      {
        path: "alive",
        element: <CharactersList />,
      },
      {
        path: "dead",
        element: <CharactersList />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
