import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
  { title: "Equity Trading", desc: "Trade stocks with real-time market data." },
  { title: "Mutual Funds", desc: "Long-term investment with expert funds." },
  { title: "PMS", desc: "Portfolio managed by professionals." },
  { title: "Commodity", desc: "Trade gold, silver, crude & more." },
  { title: "Currency", desc: "Forex trading with smart tools." },
  { title: "IPO", desc: "Apply to upcoming IPOs instantly." },
  { title: "Insurance", desc: "Life & general insurance plans." },
  

];

gsap.registerPlugin(ScrollTrigger);

export default function ProductScrollDesktop() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
const SPEED_MULTIPLIER = 1.6;
  useEffect(() => {
  const el = sectionRef.current;
  const track = trackRef.current;

  let scrollDistance = 0;

  const ctx = gsap.context(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const calc = () => {
          scrollDistance =
            track.scrollWidth - window.innerWidth + window.innerWidth * 0.25;
        };

        calc();

        gsap.to(track, {
          x: () => -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "center center",
           end: () => `+=${scrollDistance * SPEED_MULTIPLIER}`,
            scrub: 1.0, // ✅ smoother & more responsive
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: calc,
          },
        });
      },
    });
  }, el);

  return () => ctx.revert();
}, []);


  return (
    <section className="product-scroll-desktop desktop-only" ref={sectionRef}>
      <div id="product-scroll_title" className="desktop-inner container">
        <h2  className="product-scroll-title">Our Investment Products</h2>
        <p className="product-scroll-sub">
          Diversify your portfolio with multiple market instruments.
        </p>
      </div>

      <div className="product-scroll-wrapper">
        <div className="product-scroll-track" ref={trackRef}>
          {products.map((p, i) => (
            <article key={i} className="product-card">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <button>Explore</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
