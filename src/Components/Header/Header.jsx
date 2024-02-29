import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "./../../img/logo1_89b50841-dcae-4a1f-8bd9-ca00603706eb.png";
import Logo2 from "./../../img/logo_a53034bc-9a8b-45e3-bfcc-59f19bc266c7.png";
import "./Header.css";
import "./HeaderResponsive.css";
import { useState } from "react";
import Modal from "../CartModal/Modal";

let toCart = JSON.parse(localStorage.getItem("car")) || [];
let toWish = JSON.parse(localStorage.getItem("car2")) || [];

export default function Header() {
  const [fix, setFix] = useState(false);
  const [up, setUp] = useState(false);

  function headerFixed() {
    if (window.scrollY > 100) {
      setFix(true);
      setUp(true);
    } else {
      setFix(false);
      setUp(false);
    }
  }
  window.addEventListener("scroll", headerFixed);

  function upPage() {
    window.scroll({
      top: 0,
    });
  }

  return (
    <>
      <header className={`${fix ? "headerFixed" : "header"}`}>
        <Navbar expand="lg" className="py-4">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Link
                  className={`nav-link ${fix ? "linkFixed" : "nav-link "}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`nav-link ${fix ? "linkFixed" : "nav-link "}`}
                  to="shop"
                >
                  Shop
                </Link>
                <Link
                  className={`nav-link ${fix ? "linkFixed" : "nav-link "}`}
                  to="about"
                >
                  About Us
                </Link>
                <Link
                  className={`nav-link ${fix ? "linkFixed" : "nav-link "}`}
                  to="blog"
                >
                  Blog
                </Link>
                <Link
                  className={`nav-link ${fix ? "linkFixed" : "nav-link "}`}
                  to="contact"
                >
                  Contact
                </Link>
                <div className="div">
          <Link
            to="login"
            className={`now links ${fix ? "linksFixed" : "links"}`}
          >
            <i className="fa-regular fa-user"></i>
          </Link>
          <Link
            to="/wishlist"
            className={`now links position-relative ${
              fix ? "linksFixed" : "links"
            }`}
          >
            <i className="fa-regular fa-heart"></i>
            <span className="position-absolute mx-2 top-0 start-100 translate-middle badge rounded-pill bg-black">
              {toWish.length}
            </span>
          </Link>
          <button
            className={`now links position-relative border-0 bg-transparent ${
              fix ? "linksFixed" : "links"
            }`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute my-1 top-0 start-100 translate-middle badge rounded-pill bg-black">
              {toCart.length}
            </span>
          </button>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="div div2">
          <Link
            to="login"
            className={`links ${fix ? "linksFixed" : "links"}`}
          >
            <i className="fa-regular fa-user"></i>
          </Link>
          <Link
            to="/wishlist"
            className={`links position-relative ${
              fix ? "linksFixed" : "links"
            }`}
          >
            <i className="fa-regular fa-heart"></i>
            <span className="position-absolute mx-2 top-0 start-100 translate-middle badge rounded-pill bg-black">
              {toWish.length}
            </span>
          </Link>
          <button
            className={`links position-relative border-0 bg-transparent ${
              fix ? "linksFixed" : "links"
            }`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute my-1 top-0 start-100 translate-middle badge rounded-pill bg-black">
              {toCart.length}
            </span>
          </button>
        </div>
        <Link to="/" className="me-auto">
          <img
            src={Logo}
            alt=""
            className={`logo ${fix ? "d-none" : "d-block "}`}
          />
          <img
            src={Logo2}
            alt=""
            className={`logo ${fix ? "logo d-block" : "d-none "}`}
          />
        </Link>
      </header>
      {/* btn to make page up */}
      <button className={`top ${up ? "showBtn" : "top"}`} onClick={upPage}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
      {/* btn to make page up */}
      <Modal />
    </>
  );
}
