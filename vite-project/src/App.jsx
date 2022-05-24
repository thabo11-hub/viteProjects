import { Component, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./components/add.component";
import Dashbourd from "./components/dashboard.component";
import List from "./components/list.component";
import logo from './logo.svg'
import './App.css'

class App extends Component {
  // const [count, setCount] = useState(0)
  render(){
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div> */}

        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/dashboard" className="navbar-brand">
            Thabo
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">
                dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
    </>
  )
}
}

export default App;
