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

  useEffect(() => {
    const el = sectionRef.current;
    const track = trackRef.current;

  const calcScroll = () => {
  const extraSpace = window.innerWidth * 0.25; // ✅ 25% extra breathing space
  return track.scrollWidth - window.innerWidth + extraSpace;
};

    const ctx = gsap.context(() => {
    gsap.to(track, {
  x: () => `-${calcScroll()}px`,
  ease: "none",
  scrollTrigger: {
    trigger: el,
    start: "center center",
    end: () => `+=${calcScroll()}`,
    scrub: 1.5,

    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,

    pinSpacing: true,
    fastScrollEnd: true,
    preventOverlaps: true,

    onUpdate: (self) => {
      // ✅ prevents micro-jumps during momentum scroll
      if (self.progress >= 0.99) {
        track.style.willChange = "auto";
      } else {
        track.style.willChange = "transform";
      }
    },
  },
});


      ScrollTrigger.refresh(); // ✅ FORCE REFRESH AFTER LOAD
    }, el);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", onResize); // ✅ FIXED
    };
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
