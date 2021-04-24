import React from "react";
import "./css/contact.css";
import { HashLink as Link } from "react-router-hash-link";

function Contact() {
  return (
    <div className="contacts" id="contact">
      <div className="title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contactBody">
        <div className="form">
          <form>
            <div>
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input required id="name" type="text" name="name" />
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input required type="email" id="email" name="email" />
            </div>
            <div>
              <label className="label" htmlFor="phone">
                Phone:
              </label>
              <input required type="tel" name="phone" id="phone" />
            </div>
            <div>
              <label className="label" htmlFor="textarea">
                Message:
              </label>
              <textarea id="textarea" type="text" rows="4" name="message"></textarea>
            </div>
            <div>
              <button type="submit" className="button active">
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="contactRightSide">
          <div className="address box">Address: Bangalore, INDIA</div>
          <div className="email box ">Email: sushankadayat60@gmail.com</div>
          <div className="socialLink box">
            <p> Get Social: </p>
            <span>Facebook </span> <span>instagram </span> <span>twitter</span>
          </div>
        </div>
      </div>
      <Link className="top" smooth to="#top">
        Top
      </Link>
    </div>
  );
}

export default Contact;
