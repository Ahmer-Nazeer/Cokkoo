import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.style.css";
import Logo from "../../assets/Cokkoo.png";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div>
        <nav className="navigation">
          <a href="/" className="brand-name">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
