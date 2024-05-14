import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <main className='flex-col'>
      <Home/>
      <About/>
    </main>
  );
}
