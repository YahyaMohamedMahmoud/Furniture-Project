import React from "react";
import "./Blog.css";
import "./BlogResponsive.css";
import blogimg1 from "../../img/Top_image_Hebe.webp";
import blogimg2 from "../../img/Top_image_Hebe2.webp";
import blogimg3 from "../../img/top_image_MTO.jpg";
import blogimg4 from "../../img/blog4.webp";
import blogimg5 from "../../img/blog5.webp";
import blogimg6 from "../../img/blog6.webp";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart blog">
        <div className="container">
          <div className="shopText detailsText blogText text-center">
            <p className="mt-5">our blog</p>
            <h1 className="mb-3">
              Get a Fresh Start to <br /> the New Year.
            </h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* story sec start  */}
      <section className="story m-80">
        <div className="container">
          <div className="collectText text-center ">
            <h3>All Blog</h3>
            <p className="py-2 mb-5">
              Latest news and blog updates from our editor.
            </p>
          </div>
          <div className="cards">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard">
                  <div className="cardimg">
                    <img src={blogimg1} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>lighting |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">
                      The Making of the Sculptural Oyster Lamps
                    </h5>
                    <p className="mb-5">
                      Inspiration and the Creative Process Inspired by an
                      earring belonging to ferm LIVING’s founder Trine...
                    </p>
                    <Link to="" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard">
                  <div className="cardimg">
                    <img src={blogimg2} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>living |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">Get a Fresh Start to the New Year</h5>
                    <p className="mb-5">
                      Luise’s Top Tip I usually make larger amounts of juice at
                      once. I pour the...
                    </p>
                    <Link to="" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard">
                  <div className="cardimg">
                    <img src={blogimg3} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>lighting |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">
                      Living furniture to create your ideal design
                    </h5>
                    <p className="mb-5">
                      One size doesn’t fit all Our homes are distinct, personal
                      spaces that uniquely reflect the...
                    </p>
                    <Link to="" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard mt-5">
                  <div className="cardimg">
                    <img src={blogimg4} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>lighting |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">Match your Bouquet to your Vase</h5>
                    <p className="mb-5">
                      To many, the garden represents an almost sacred sanctuary;
                      a designated place where you instantly feel grounded and
                      reconnect with...
                    </p>
                    <Link to="" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard mt-5">
                  <div className="cardimg">
                    <img src={blogimg5} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>lighting |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">Small-scale Creativity</h5>
                    <p className="mb-5">
                      With our Miniature Funkis House, you are presented with
                      the opportunity to create a personalised doll's house
                      filled with bespoke...
                    </p>
                    <Link to="" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogCard mt-5">
                  <div className="cardimg">
                    <img src={blogimg6} alt="" />
                  </div>
                  <div className="cardsText">
                    <span>lighting |</span>
                    <span>
                      <i className="fa-regular fa-message pe-1"></i>0 comments
                    </span>
                    <h5 className="py-4">The Art of Balance</h5>
                    <p className="mb-5">
                      At ferm LIVING, we have the relatively unique pleasure of
                      having our own design studio. A team of different
                      personalities...
                    </p>
                    <Link to="blog" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* story sec end  */}
    </>
  );
}
