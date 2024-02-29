import React from "react";
import "./Aboutus.css";
import "./AboutResponsive.css";
import img1 from "../../img/aboutImg.jpg";
import img2 from "../../img/aboutImg2.jpg";
import img3 from "../../img/chair.webp";
import img4 from "../../img/collect-img3.webp";
import person1 from "../../img/team1.webp";
import person2 from "../../img/designer.webp";
import person3 from "../../img/team2.webp";
import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart aboutus">
        <div className="container">
          <div className="shopText detailsText abouthead text-center">
            <p className="mt-5">about us</p>
            <h1 className="mb-3">
              We do high-quality <br />
              products.
            </h1>
            <p className="dialog">
              We have always paid close attention to and been inspired by our
              surroundings, and putting our finger on the pulse of contemporary
              culture is how we keep pace with the world around us.
            </p>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* brand sec start  */}
      <section className="brand">
        <div className="container">
          <div className="brandText brandabout text-center">
            <p className="m-3">our brand</p>
            <h2 className="mb-4">
              We have always tried to focus on <br /> the people who were going
              to use <br /> the products, and we have <br /> always tried to
              design products <br /> for the life they live.
            </h2>
            <p className="hay">
              HAY has always believed that good design is everyone’s right.
              That’s why, from the very beginning, co-founders and <br />{" "}
              Creative Directors Mette and Rolf Hay committed to working with
              their generation’s best designers from all over the <br /> world
              to create high-quality products that would be available to a wide
              audience.
            </p>
          </div>
        </div>
      </section>
      {/* brand sec end  */}

      {/*inspration sec start */}
      <section className="inspration m-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 ">
              <div className="descImg1 mt-5">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 ">
              <div className="descImg">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 ">
              <div className="we px-5 py-4">
                <p className="mb-4">SUSTAINABLE</p>
                <h5 className="mb-5">
                  Sustainable trends you'll love forever.
                </h5>
                <p className="the mt-2 mb-5">
                  The elasticity and excellent shape memory of Stretch laminates
                  allow the garments to be more comfortable
                </p>
                <Link to="/shop" className="shop">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*inspration sec end */}

      {/*servies sec start */}
      <section className="servies serviesUS text-center m-80">
        <div className="container">
          <div className="servies2 serviesUs2">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-solid fa-truck"></i>
                  </span>
                  <h3 className="my-3">Free Shipping</h3>
                  <p>Get free shipping on orders of $100 or more</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-brands fa-pagelines"></i>
                  </span>
                  <h3 className="my-3">Customer service</h3>
                  <p>A question? Please contact us at 123-456-7890</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-solid fa-box-open"></i>
                  </span>
                  <h3 className="my-3">Refer a friend</h3>
                  <p>Refer a friend and get 15% off each other</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-solid fa-shield-halved"></i>
                  </span>
                  <h3 className="my-3">Secure payment</h3>
                  <p>Your payment information is processed securely</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*servies sec end */}

      {/*awesome sec start */}
      <section className="awesome ourbrand m-80">
        <div className="container">
          <div className="awesome2">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="awesomeText mb-4">
                      <p className="awe mb-4">OUR BRAND.</p>
                      <h5 className="mt-4">30 Brilliant new items for home.</h5>
                      <p className="name mt-5">
                        Update with ease, from a quick refresh to a
                        fullrenovation. We make it easy to find everything you
                        need online,and your order is conveniently shipped to
                        your home.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-7">
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="awesomeImg">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*awesome sec end */}

      {/*team sec start */}
      <section className="team m-80">
        <div className="container">
          <div className="teamText text-center mb-5">
            <h5>Team Of Highly Skilled</h5>
          </div>
          <div className="teamImg">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="teamcard">
                  <img src={person1} alt="" />
                </div>
                <div className="personText text-center mt-4">
                  <h6>Vera Duncan</h6>
                  <p className="mt-2">CEO & Founder</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="teamcard">
                  <img src={person2} alt="" />
                </div>
                <div className="personText text-center mt-4">
                  <h6>Abdul Khalek</h6>
                  <p className="mt-2">Producer</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="teamcard">
                  <img src={person3} alt="" />
                </div>
                <div className="personText text-center mt-4">
                  <h6>Michella Ore</h6>
                  <p className="mt-2">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
