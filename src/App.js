import logo from './logo.svg';
import './App.css';
import Contact from './views/Contact';
import Login from './views/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Login />
        </div>

      </div>
    </Router>
  );
}

export default App;
