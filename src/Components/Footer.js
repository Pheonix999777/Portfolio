import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className="footerLinks">
        <a href="https://github.com/Pheonix999777" target="_blank">
          <FaGithub />
        </a>
        <a href="https://t.me/pheonix4777" target="_blank">
          <FaTelegram />
        </a>
        <a href="mailTo:usmonjon969@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
