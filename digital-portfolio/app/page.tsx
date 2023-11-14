'use client';
import Navbar from "./Components/Navbar"
import Initial from "./Components/Initial"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
   <>
    <Navbar></Navbar>
    <Initial></Initial>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </>
  )
}

