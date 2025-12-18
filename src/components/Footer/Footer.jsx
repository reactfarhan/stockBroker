import "./Footer.css";
import FooterContact from "./FooterContact";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Terms And Conditions</li>
            <li>Disclaimer</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Login</h4>
          <ul>
            <li>IGSL AERO</li>
            <li>Client Back-Office</li>
            <li>Client eKYC</li>
            <li>Partner Back-Office</li>
            <li>Partner eKYC</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Products & Services</h4>
          <ul>
            <li>Equity Trading</li>
            <li>Currency Trading</li>
            <li>Commodity Trading</li>
            <li>Mutual Funds</li>
            <li>CDSL e-voting</li>
            <li>NSDL eVoting</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Quick Link</h4>
          <ul>
            <li>6 Attributes</li>
            <li>Regulation 30</li>
            <li>Subsidiaries Financials</li>
            <li>Offer Documents</li>
            <li>E-IPO</li>
            <li>E-voting</li>
            <li>Re-KYC</li>
          </ul>
        </div>

      </div>

      {/* INVESTOR NOTICE */}
<div className="footer-investor-notice">
  <span className="investor-label">
    Attention Investors:
  </span>

  <div className="investor-marquee">
    <div className="investor-marquee-track">
      <span>
        Investment in securities market are subject to market risks, read all the
        related documents carefully before investing. Past performance is not
        indicative of future results. Brokerage services are subject to
        regulatory approvals and compliance requirements.
      </span>

      <span>
        Investment in securities market are subject to market risks, read all the
        related documents carefully before investing. Past performance is not
        indicative of future results. Brokerage services are subject to
        regulatory approvals and compliance requirements.
      </span>
    </div>
  </div>
</div>
<FooterContact/>
    </footer>
  );
}
