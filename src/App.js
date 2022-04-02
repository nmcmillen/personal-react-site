import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";




function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;