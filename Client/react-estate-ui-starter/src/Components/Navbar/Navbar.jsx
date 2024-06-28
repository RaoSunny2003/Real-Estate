import { useState } from "react";
import "./Navbar.scss";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Nothing Is Here" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="">SignIn</a>
        <a href="" className="register">
          SignUp
        </a>
        <img
          src="/menu.png"
          className="menuIcon"
          onClick={() => setOpen(!open)}
        />

        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
