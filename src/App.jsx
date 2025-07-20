import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Cocktails />
        <About />
      </main>
    </>
  );
}
