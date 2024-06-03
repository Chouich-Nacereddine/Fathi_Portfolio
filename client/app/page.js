import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className='flex-col'>
      <Home/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
    </main>
  );
}
