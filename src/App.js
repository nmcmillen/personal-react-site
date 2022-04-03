import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroCard from "./components/HeroCard";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <NavBar />
      <HeroCard />
      <AboutMe />
      <Blog />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;