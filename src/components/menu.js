import React from "react"
import { Link } from "gatsby"
import "../components/menu.css"
const MenuPage = () => (
  <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
    <ul className="Menu">
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/blog">Blog</Link>{" "}
      </li>
      <li>
        <Link to="/services">Services</Link>{" "}
      </li>
      <li>
        <Link to="/about">About</Link>{" "}
      </li>
    </ul>
  </div>
)

export default MenuPage
