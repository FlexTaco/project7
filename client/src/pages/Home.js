import "./Home.css";
import minionFactory from "/Users/junior/Desktop/randos/web102_unit7lab-main/client/src/components/assets/minionsFactory.jpeg";

const Home = () => {
  return (
    <div className="App">
      <div className="header">
        <img alt="Factory " id="factory" src={minionFactory} />
        <h1 style={{ color: "yellow" }}>Join Us In Creating Your Own Minion</h1>
      </div>
    </div>
  );
};

export default Home;
