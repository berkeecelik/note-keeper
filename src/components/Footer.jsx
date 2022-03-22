import React from "react";

const date = new Date();
let year = date.getFullYear();

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
