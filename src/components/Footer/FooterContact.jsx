import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  // FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { MdSupportAgent } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

import "./FooterContact.css";

export default function FooterContact() {
  return (
    <div className="footer-contact-wrap">

      {/* COLUMN 1 */}
      <div className="footer-contact-col">
        <h4>Registered Office</h4>
        <p>
          <FaMapMarkerAlt />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>

        <h4>Head Office</h4>
        <p>
          <FaMapMarkerAlt />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>
      </div>

      {/* COLUMN 2 */}
      <div className="footer-contact-col">
        <h4>Customer Desk No</h4>
        <p>
          <MdSupportAgent />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>

        <h4>Call & Trade No</h4>
        <p>
          <IoCallOutline />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>
      </div>

      {/* COLUMN 3 */}
      <div className="footer-contact-col">
        <h4>Telephone</h4>
        <p>
          <FaPhoneAlt />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>

        <h4>Fax</h4>
        <p>
          <FaFax />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>

        <h4>WhatsApp No</h4>
        <p>
          <FaWhatsapp />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, voluptatem.
        </p>
      </div>

      {/* COLUMN 4 */}
      <div className="footer-contact-col">
        <h4>Follow Us On</h4>
        <div className="footer-socials">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

    </div>
  );
}
