import { useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // 初始化平滑滚动
  useGSAP(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }, []);

  // 蒙版扩散 + 文字动画
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    // 扩散 clip-path
    timeline.to(".masked-img", {
      clipPath: "circle(75% at 50% 50%)",
      ease: "power2.inOut",
    });

    // 文字浮现
    timeline.fromTo(
      ".card-content p",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<+0.5"
    );
  }, []);

  return (
    <>
      <section className="hero_f">
        <video
          ref={videoRef}
          className="hero-bg-video"
          src="/images/video.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
        />
        <h1 className="hero-title">还不知道这里放什么</h1>
      </section>

      <section className="sticky-cards" ref={sectionRef}>
        <div className="card">
          <div className="masked-img">
            <img src="/images/bg.jpg" width={800} height={500} />
            <div className="clip-overlay" />
          </div>

          <div className="card-content">
            <p>
              夜发清溪向三峡 <br />
              思君不见下渝州
            </p>
          </div>
        </div>
      </section>

      <section className="outro">
        <h1>Tomorrow, tailored.</h1>
      </section>
    </>
  );
}

export default App;
