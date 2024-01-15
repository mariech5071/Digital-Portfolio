'use client'
import Link from 'next/link'
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
      <>
        <Navbar></Navbar>
        <Initial></Initial>
        <About1></About1>
        <Projects></Projects>
        <Experience1></Experience1>
        <Contact></Contact>
        <Footer></Footer>
        <Link href="/About"></Link>
        <Link href="/Projects"></Link>
        <Link href="/Experience"></Link>
        <Link href="/Contact"></Link>
        <Link href="/"></Link>
      </>
    
  )
}

