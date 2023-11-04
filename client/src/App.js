import "./App.css";

import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import { Link } from "react-router-dom";

const App = () => {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home/edit/:id",
      element: <EditPost />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
    {
      path: "/home",
      element: <ReadPosts />,
    },
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>⚠️Minion Factory⚠️</h1>
        <Link to="/">
          <button className="headerBtn"> Home</button>
        </Link>
        <Link to="/home">
          <button className="headerBtn"> View Minions</button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create A Minion </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
