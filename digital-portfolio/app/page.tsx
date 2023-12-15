'use client'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navbar from "../Components/Navbar"
import Initial from "../Components/Initial"
import About1 from "../Components/About1"
import Projects from "../Components/Projects1"
import Contact from "../Components/Contact1"
import Experience1 from "../Components/Experience1";
import Footer from "../Components/Footer";
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <Router>
      <>
        <Navbar></Navbar>
        <Initial></Initial>
        <About1></About1>
        <Projects></Projects>
        <Experience1></Experience1>
        <Contact></Contact>
        <Footer></Footer>
        <Link to="/About"></Link>
        <Link to="/Projects"></Link>
        <Link to="/Experience"></Link>
        <Link to="/Contact"></Link>
        <Link to="/"></Link>
      </>
    </Router>
  )
}

