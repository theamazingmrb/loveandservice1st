import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { HendersonText } from "./components/Container.styled";
function App() {
  return (
    <div className="App">
      {/* <div style={{display: 'flex', justifyContent: 'space-evenly', width: '50%'}}> */}
      <Link
        to="/"
        style={{
          margin: "15px",
          // margin: "5px 0px",
          color: "#000000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          margin: "15px",
          // margin: "5px 0px",
          color: "#000000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        About
      </Link>
      {/* </div> */}
      <Outlet />
    </div>
  );
}

export default App;
