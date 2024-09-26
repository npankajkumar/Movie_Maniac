import React from "react";
import "./Navbar.css";
import fire from "../../assets/fire.png";
import party from "../../assets/party.png";
import glow from "../../assets/glowingstar.png";
import nflix from "../../assets/Netflix.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        The Box Office
        <img className="nflixx" src={nflix} alt="" />{" "}
      </h1>
      <div className="navbar_links">
        <a href="#popular">
          Popular <img className="navbar_emoji" src={fire} alt="" />{" "}
        </a>
        <a href="#upcoming">
          Latest <img className="navbar_emoji" src={glow} alt="" />{" "}
        </a>
        <a href="#toprated">
          TopRated <img className="navbar_emoji" src={party} alt="" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
