import { NavLink } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container"></div>
      <AppRouter />
    </div>
  );
};

export default App;
