import "../Footer/Footer.css";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";
import yt from "../../assets/yt.svg";
import paymentMethod from "../../assets/payment-method.svg";
import advertise from "../../assets/advertise-img.svg";
import giftCards from "../../assets/gift-cards-img.svg";
import helpCenter from "../../assets/help-centre-img.svg";
import sellImg from "../../assets/sell-img.svg";


const Footer = () => {
  return (
    <section>
      <footer>
        <div className="footer-content">
          <div className="content">
            <h2>ABOUT US</h2>
            <ul>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="content">
            <h2>GROUP COMPANIES</h2>
            <ul>
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
          <div className="content">
            <h2>HELP</h2>
            <ul>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
              <li>Report Infringement</li>
            </ul>
          </div>
          <div className="content">
            <h2>CONSUMER POLICY</h2>
            <ul>
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div className="content">
            <h2>Mail Us:</h2>
            <ul>
              <li>Flipkart Internet Private Limited</li>
              <li>Building Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeesanahalli Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
            </ul>
            <div>
              <h2>Social:</h2>
              <div className="icons">
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={x} alt="X" /></li>
                <li><img src={yt} alt="YouTube" /></li>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>Registered Office Address:</h2>
            <ul>
              <li>Flipkart Internet Private Limited,</li>
              <li>Building Alyssa, Begonia &</li>
              <li>Clove Embassy Tech Village,</li>
              <li>Outer Ring Road, Devarabeesanahalli Village,</li>
              <li>Bengaluru, 560103,</li>
              <li>Karnataka, India</li>
              <li>CIN: U51109KA2012PTC066107</li>
              <li>Telephone: 044-45614700/044-67415800</li>
            </ul>
          </div>
        </div>
        <hr />
        
          <div className="content-last">
          <ul>
            <li><img src={sellImg} alt="" /> Become a Seller</li>
            <li><img src={advertise} alt="" />Advertise</li>
            <li><img src={giftCards} alt="" />Gift Cards</li>
            <li><img src={helpCenter} alt="" />Help Center</li>
            <li>&copy;2007-2024 Flipkart.com</li>
            <li><img src={paymentMethod} alt=""  /></li>
          </ul>
          </div>
       
        
      </footer>
    </section>
  );
};

export default Footer;
