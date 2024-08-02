
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.svg";
import login from "../../assets/login.svg";
import cart from "../../assets/cart.svg";
import  seller from "../../assets/seller.svg";
import  dots from "../../assets/dots.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="search-bar">
        <svg
          width="24"
          height="24"
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Search Icon</title>
          <path
            d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
            stroke="#717478"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M16 16L21 21"
            stroke="#717478"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <input type="text" placeholder="Search For Products, Brands and More" />
      </div>
      <div className="nav-items">
        <p className="nav-icon"><img src={login} alt="Login Icon" /></p>
        <p>Login</p>
        <p className="nav-icon"><img src={cart} alt="Cart Icon" /></p>
        <p>Cart</p>
        <p className="nav-icon"><img src={seller} alt="Become a Seller Icon" /></p>
        <p>Become a Seller</p>
        <p className="nav-icon"><img src={dots} alt="More Options Icon" /></p>
      </div>
    </nav>
  );
};

export default Navbar;
