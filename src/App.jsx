import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import NavBar from './components/Navbar'

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
     <main>
      <NavBar />
      </main> 
    </>
  );
}
