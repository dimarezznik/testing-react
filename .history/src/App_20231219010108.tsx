import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="#com1">com1</Link>
        </li>
        <li>
          <Link to="#com2">com2</Link>
        </li>
        <li>
          <Link
            to="#com3"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            com3
          </Link>
        </li>
      </ul>
      <div id="com1">com1</div>
      <div id="com2">com2</div>
      <div id="com3">com3</div>
    </>
  );
}

export default App;
