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
    element: (
      <CharactersList
        urlInitial={"https://rickandmortyapi.com/api/character"}
      />
    ),
  },
  {
    path: "/characters/females",
    element: (
      <CharactersList
        urlInitial={"https://rickandmortyapi.com/api/character/?gener=Female"}
      />
    ),
  },
  {
    path: "/characters/males",
    element: (
      <CharactersList
        urlInitial={"https://rickandmortyapi.com/api/character/?gender=Male"}
      />
    ),
  },
  {
    path: "/characters/alive",
    element: (
      <CharactersList
        urlInitial={"https://rickandmortyapi.com/api/character/?status=Alive"}
      />
    ),
  },
  {
    path: "/characters/dead",
    element: (
      <CharactersList
        urlInitial={"https://rickandmortyapi.com/api/character/?status=Dead"}
      />
    ),
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
