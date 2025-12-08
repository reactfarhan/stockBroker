import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <section className="why-section pb-5">
      <h1 className="whyus-title">
        Why <span> Choose </span> Us
      </h1>
      <div className="row g-4">
        <div className="col-lg-8">
          {/* CARD 1 */}
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="why-card">
                <div className="why-icon">⚡</div>
                <h4>Fast Trade Execution</h4>
                <p>
                  Experience lightning-fast order execution with real-time
                  market access, zero delays, and high-performance trading
                  systems.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-6 col-md-6">
              <div className="why-card">
                <div className="why-icon">🔐</div>
                <h4>Bank-Grade Security</h4>
                <p>
                  Your data & funds are protected using enterprise-level
                  encryption, secure login methods, and strict compliance
                  standards.
                </p>
              </div>
            </div>

            {/* LONG CARD BOTTOM */}
            <div className="col-lg-12">
              <div className="why-card long">
                <div className="why-icon">📈</div>
                <h4>100+ Market Instruments</h4>
                <p>
                  Trade across equities, commodities, futures, options, IPOs,
                  and more — all from a single unified trading dashboard with
                  deep market analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* RIGHT BIG CARD */}
          <div className="col-lg-12">
            <div className="why-card-dark">
              <div className="why-icon dark">📊</div>
              <h3>Smart Trading Experience</h3>
              <p>
                Track live markets, analyze charts, execute orders, and manage
                your investments in one powerful trading platform.
              </p>
              <p>
                Whether you're a beginner or a pro trader, StockBroker gives you
                complete control with advanced tools and real-time insights.
              </p>
              <p>
                Invest confidently with real-time insights, advanced charting
                tools, and seamless order execution across stocks, mutual funds,
                ETFs, and derivatives.
              </p>
              <button className="why-cta-btn">Start Trading Now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
