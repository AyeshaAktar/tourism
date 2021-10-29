import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer mt-5 py-5">
      <div className="d-flex justify-content-center ">
        <p className="mx-2">About Us</p>
        <p className="mx-2">Admission</p>
        <p className="mx-2">Events</p>
        <p className="mx-2">Contacts</p>
      </div>
      <div className="social-icon d-flex gap-2 justify-content-center mb-3">
        <button className="btn btn-light rounded-circle">
          <FaFacebookF />
        </button>
        <button className="btn btn-light rounded-circle">
          <AiOutlineTwitter />
        </button>
        <button className="btn btn-light rounded-circle">
          <BsYoutube />
        </button>
      </div>

      <p>copyright &copy; 2021</p>
    </div>
  );
};

export default Footer;
