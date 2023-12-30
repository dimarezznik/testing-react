import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <ul>
      <li><Link to="#com1">com1</Link></li>
      <li><Link to="com2">com2</Link></li>
      <li><Link to="com3">com3</Link></li>
    </ul>
    </>
  )
}

export default App
