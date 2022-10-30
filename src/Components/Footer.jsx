import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>TOCUL</h4>
            <h2 className="list-unstyled">
              <li>+123-345-678</li>
              <li>Banglore, India</li>
              {/* <li>123 Streeet South North</li> */}
            </h2>
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>Need Help</h3>
            <ui className="list-unstyled">
              <li><a href="#">Services</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#">Issues</a></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>About Us</h4>
            <ui className="list-unstyled">
              <li><a href="#">Our Aim</a></li>
              <li><a href="#">Carrer</a></li>
              <li><a href="#">Work Life</a></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" align="center">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Tocul | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;