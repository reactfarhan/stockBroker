// src/components/ProductScroll/ProductScrollSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  {Autoplay}  from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/swiper-bundle.css';

const products = [
  { title: "Equity Trading", desc: "Trade stocks with real-time market data." },
  { title: "Mutual Funds", desc: "Long-term investment with expert funds." },
  { title: "PMS", desc: "Portfolio managed by professionals." },
  { title: "Commodity", desc: "Trade gold, silver, crude & more." },
  { title: "Currency", desc: "Forex trading with smart tools." },
  { title: "IPO", desc: "Apply to upcoming IPOs instantly." },
  { title: "Insurance", desc: "Life & general insurance plans." },
];

export default function ProductScrollSwiper() {
  return (
    <section className="product-scroll-swiper container">
      <h2 className="product-scroll-title">Our Investment Products</h2>
      <p className="product-scroll-sub">
        Diversify your portfolio with multiple market instruments.
      </p>

      <div className="swiper-wrap">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            // phone
            0: {
              slidesPerView: 1,
            },
            // tablet
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <article className="product-card">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <button>Explore</button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
