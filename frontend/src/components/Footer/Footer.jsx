import React from "react"

import dino from "../../resources/logo.png"

import "./Footer.css"

export default function Footer(){


    return (
        <footer className="footer">
        <img src={dino} className = "logo" alt="Logo"/>
        <div className="copyright">
          <b>&copy; 2024 RateMyStudents</b>
        </div>
      </footer>
      );
}