import "./styles/Home.css";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <Menu />
      <span className="choose-catergories">
        <p>
          Choose any of the catergories above and learn more about Rick and
          Morty characters
        </p>
      </span>
    </>
  );
}

export default Home;
