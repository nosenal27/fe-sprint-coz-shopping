import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav-body">
      <hgroup id="title">
        <img id="logo" src="../logo.png" alt="logo" />
        <span id="name">COZ Shopping</span>
      </hgroup>
      <div id="menu">
        <Link to="/">상품리스트</Link>
      </div>
    </nav>
  );
}

export default Nav;
