import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src="/images/vinko.png" alt="Logo" />
      </div>
      <p>&copy; {new Date().getFullYear()} Vinko. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
