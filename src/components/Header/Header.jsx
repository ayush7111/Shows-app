import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">TV Shows</Link>
    </div>
  );
};

export default Header;
