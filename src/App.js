import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroCard from "./components/HeroCard";




function App() {
  return (
    <div>
      <NavBar />
      <HeroCard />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;