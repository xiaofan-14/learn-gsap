import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <>
      <section className="flex-center h-[100vh]">
        <div className="text-3xl text-indigo-300">the app.jsx</div>
      </section>
    </>
  );
}
