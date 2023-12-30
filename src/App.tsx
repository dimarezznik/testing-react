import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <ul>
        <li>
          <Link to="#com1">com1</Link>
        </li>
        <li>
          <Link to="#com2">com2</Link>
        </li>
        <li>
          <a href="#com3">com3</a>
        </li>
      </ul>
      <div id="com1">com1</div>
      <div id="com2">com2</div>
      <div id="com3">com3</div>
    </main>
  );
}

export default App;
