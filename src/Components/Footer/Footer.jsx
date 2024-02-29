import React from "react";
import "./Footer.css";
import "./FooterResponsive.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="m-80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="about">
                <h6 className="mb-4">about us</h6>
                <p>
                  Thanks to Article London for allowing us to use their products
                  in this demo store and HAY for the photography.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="about">
                <h6 className="mb-4">Shop</h6>
                <ul>
                  <li>
                    <Link to="/shop">shop all</Link>
                  </li>
                  <li>
                    <Link to="/blog">Subscribe & Save</Link>
                  </li>
                  <li>
                    <Link to="/about">Store Locator</Link>
                  </li>
                  <li>
                    <Link to="/shop">Live Shopping</Link>
                  </li>
                  <li>
                    <Link to="/shop">Offers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <div className="about">
                <h6 className="mb-4">Explore</h6>
                <ul>
                  <li>
                    <Link to="/shop">Our Story</Link>
                  </li>
                  <li>
                    <Link to="/blog">In The Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">Our Ingredients</Link>
                  </li>
                  <li>
                    <Link to="/shop">Refer a Friend</Link>
                  </li>
                  <li>
                    <Link to="/about">Program</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="about">
                <h6 className="mb-4">Sign Up & Save 15%</h6>
                <p className="get">Get a 15% discount on your first order.</p>
                <input type="email" name="" id="" placeholder=" Your Email" />
                <button className="bttn">subscribe</button>
                <div className="social">
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
