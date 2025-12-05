import { useState } from "react";
import "./Navbar.css";

const NAV_ITEMS = [
  { name: "Products", submenu: ["Investor", "Associates", "Login Portal", "Investment Process", "Disclosure Document", "FAQs"] },
  { name: "Services", submenu: ["Equity", "Mutual Funds", "Portfolio Review", "Trading Support"] },
  { name: "TradeStar", submenu: ["Trade App", "Web Terminal"] },
  { name: "SME IPO", submenu: ["Upcoming", "Past Issues"] },
  { name: "PMS", submenu: ["Plans", "Charges", "Performance"] },
  
  { name: "IB", submenu: ["Investment Banking", "Consulting"] },
  { name: "EIPO", submenu: ["Apply", "Procedure"] },
  { name: "Login", submenu: ["Client Login", "Admin Login"] },
];

 function Navbar() {
  const [active, setActive] = useState("Products"); // Default open

  return (
    <>
      {/* TOP NAV */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-items">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.name}
              className={`nav-item ${active === item.name ? "active" : ""}`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </div>
          ))}

         
        </div>

         <button className="open-account-btn">Open An Account</button>
        </div>
      </nav>

      {/* SUBMENU */}
      <div className="submenu-container">
        {NAV_ITEMS.find((n) => n.name === active)?.submenu?.map((sub, index, arr) => (
          <div className="submenu-row" key={sub}>
            <span className="submenu-item">{sub}</span>
            {index !== arr.length - 1 && <span className="divider">|</span>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;