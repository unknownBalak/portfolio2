import React from "react";
import "./css/contact.css";
import { HashLink as Link } from "react-router-hash-link";

function Contact() {
  return (
    <div className="contacts" id="contact">
      <h1>Hii greeting from Contact page</h1>

      <Link className="top" smooth to="#top">
        Top
      </Link>
    </div>
  );
}

export default Contact;
