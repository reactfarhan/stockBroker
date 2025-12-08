// src/components/ProductScroll/ProductSection.jsx
import ProductScrollDesktop from "./ProductScrollDesktop";
import ProductScrollSwiper from "./ProductScrollSwiper";
import "./ProductScroll.css";

export default function ProductSection() {
  return (
    <section className="product-section">
      {/* Desktop only GSAP pinned horizontal */}
      <div className="desktop-only">
        <ProductScrollDesktop />
      </div>

      {/* Mobile / Tablet only Swiper slider */}
      <div className="mobile-only">
        <ProductScrollSwiper />
      </div>
    </section>
  );
}
