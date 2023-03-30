import { createHashRouter, RouterProvider } from "react-router-dom";
import CharactersList from "./CharactersList";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

const router = createHashRouter([
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
        urlInitial={"https://rickandmortyapi.com/api/character/?gender=Female"}
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
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
