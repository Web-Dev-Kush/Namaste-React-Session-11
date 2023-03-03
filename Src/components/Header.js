import { useState, useContext } from "react";
import Logo from "../assets/img/Logo1.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="Logo" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("Happy Tummy");

  const { user } = useContext(userContext);

  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="text-2xl px-4" key="H1">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-2xl px-4" key="H2">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-2xl px-4" key="H3">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li className="text-2xl px-4" key="H4">
              Cart
            </li>
          </Link>
          <Link to="/instamart">
            <li className="text-2xl px-4" key="H4">
              Instamart
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>

      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
