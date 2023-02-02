import Logo from "../../assets/Cokkoo.png";
import "./footer.style.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-image">
          <img src={Logo} alt="Logo Cokkoo" />
        </div>
        <div className="footer-text">
          <p>© Cokkoo.com, All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
