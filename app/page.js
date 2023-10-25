"use client";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
