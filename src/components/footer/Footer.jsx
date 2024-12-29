import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="footeritem">
        <div className="footerlink">
          <a
            href="https://www.linkedin.com/in/tabish-javed/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LINKEDIN</p>
          </a>
          <a href="https://github.com/tabish-27" target="_blank" rel="noreferrer">
            <p>GITHUB</p>
          </a>
          
        </div>
        {/* <div className="bar1-f"></div> */}
        <p> © 2024 Tabish Javed | Crafted with 💖. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
