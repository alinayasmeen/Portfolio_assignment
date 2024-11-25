import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home"; // Fixed import name
import { About } from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
export default function Home() {
  return (
    <div className="w-full bg-background2 h-[350vh]">
      <Navbar/>
      <HomePage /> 
      <About/>
      <Skills />
      <Projects />
       <Footer/>
    </div>
  );
}
