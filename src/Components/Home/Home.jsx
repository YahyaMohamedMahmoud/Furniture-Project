import React, { useEffect, useState } from "react";
import img1 from "../../img/h2_s1.webp";
import img2 from "../../img/h2_s2.webp";
import img3 from "../../img/h2_s3.webp";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import collectImg1 from "../../img/New folder/collect-img1.jpg";
import collectImg2 from "../../img/collect-img2.webp";
import collectImg3 from "../../img/New folder/collect-img3.jpg";
import collectImg4 from "../../img/New folder/collect-img4.jpg";
import desginer from "../../img/designer.webp";
import blogimg1 from "../../img/Top_image_Hebe.webp";
import blogimg2 from "../../img/Top_image_Hebe2.webp";
import blogimg3 from "../../img/top_image_MTO.jpg";
import lastImg from "../../img/lastimg.webp";
import lastImg2 from "../../img/lastimg2.webp";
import "./Home.css";
import "./HomeResponsive.css";
import axios from "axios";
import "animate.css";
import AOS from "aos";

export default function Home() {
  let [products, setProducts] = useState([]);
  let [currentPage] = useState(4);
  let [recordsPerPage] = useState(4);
  let [pro, setpro] = useState(0);
  let indexOfLastRecord = currentPage * recordsPerPage;
  let indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);

  async function getApi() {
    let { data } = await axios.get("shop.json");
    setProducts(data.shop);
  }
  useEffect(() => {
    getApi();
    AOS.init();
  }, []);
  let toCart = JSON.parse(localStorage.getItem("car")) || [];

  function addToCart(index) {
    let product = currentRecords[index];
    let founded = toCart.find((pro) => pro.id === product.id);
    if (founded) {
      founded.count++;
    } else {
      toCart.push({ ...product, count: 1 });
    }
    window.location.reload();
    localStorage.setItem("car", JSON.stringify(toCart));
  }
  function view(product) {
    setpro(product);
  }

  return (
    <>
      {/* landing sec start */}
      <section className="landing">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="carousel-text">
                <p
                  className="parag1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Bestsellers
                </p>
                <h1
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Time to dress up <br />
                  your Home.
                </h1>
                <p
                  className="parag2 mt-3"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  Our new arrivals feature flower prints in bright colors that
                  bring a warm <br />
                  breeze from the tropics
                </p>
                <Link to="/shop" className="shopNow">
                  shop now
                </Link>
              </div>
              <img src={img1} className="d-block w-100" alt="landingImg1" />
            </div>
            <div className="carousel-item" data-bs-interval="9000">
              <div className="carousel-text carousel-text2">
                <p className="parag1">Holiday Home Sale</p>
                <h1>
                  Pierre Charpin’s <br />
                  refined lamp .
                </h1>
                <p className="parag2 mt-3">
                  When you move your body, you can move the world.
                </p>
                <Link to="/shop" className="shopNow">
                  shop sale
                </Link>
              </div>
              <img src={img2} className="d-block w-100" alt="landingImg2" />
            </div>
            <div className="carousel-item">
              <div className="carousel-text carousel-text3">
                <p className="parag1">Decoration</p>
                <h1>Refresh your living room.</h1>
                <p className="parag2 mt-3">
                  The latest drops from our Weekly Selection
                </p>
                <Link to="/shop" className="shopNow">
                  shop now
                </Link>
              </div>
              <img src={img3} className="d-block w-100" alt="landingImg3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* landing sec end */}

      {/* scrollsec sec start  */}
      <section className="scrollsec">
        <Marquee className="scroll" speed={100}>
          <span>Fresh & stylish lights </span>
          <span>Refresh your living room </span>
          <span>Aesthetic & functional pieces</span>
          <span>Fresh & stylish lights </span>
          <span>Refresh your living room </span>
          <span>Aesthetic & functional pieces</span>
        </Marquee>
      </section>
      {/* scrollsec sec end  */}

      {/* brand sec start  */}
      <section className="brand">
        <div className="container">
          <div
            className="brandText text-center"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <p>our brand</p>
            <h2 className="mb-4">
              We have always tried to focus on <br /> the people who were going
              to use <br /> the products, and we have <br /> always tried to
              design products <br /> for the life they live.
            </h2>
            <Link to="/shop" className="shopLink">
              shop our collection
            </Link>
          </div>
        </div>
      </section>
      {/* brand sec end  */}

      {/* collection sec start  */}
      <section className="collection m-80">
        <div className="container">
          <div className="collectText mb-5 text-center ">
            <h3 data-aos="fade-down" data-aos-duration="3000">
              Our collections
            </h3>
            <p className="py-2">
              The 2023 Collection is an answer to the real-world situation
            </p>
          </div>

          <div className="collectImages">
            <div className="row g-1 justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <Link to="/shop">
                  <div
                    className="card1"
                  >
                    <div className="cardtext">
                      <span>decoration</span>
                    </div>
                    <div className="cardimg">
                      <img
                        className="decoration"
                        src={collectImg1}
                        alt="decoration"
                      />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="row g-1">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <Link to="/shop">
                      <div
                        className="card1"
                        
                      >
                        <div className="cardtext">
                          <span>furniture</span>
                        </div>
                        <div className="cardimg">
                          <img src={collectImg2} alt="furniture" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row g-1">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <Link to="/shop">
                          <div
                            className="card1"
                            
                          >
                            <div className="cardtext">
                              <span>lighting</span>
                            </div>
                            <div className="cardimg">
                              <img src={collectImg3} alt="lighting" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <Link to="/shop">
                          <div
                            className="card1"
                          
                          >
                            <div className="cardtext">
                              <span>tableware</span>
                            </div>
                            <div className="cardimg">
                              <img src={collectImg4} alt="tableware" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* collection sec end  */}

      {/* last sec start  */}
      <section className="last m-80">
        <div className="container">
          <div className="collectText text-center ">
            <h3 data-aos="fade-down" data-aos-duration="3000">
              Latest arrivals
            </h3>
            <p className="py-2 mb-5">
              Resulting in a collection of relaxed silhouettes and a calm,
              soothing color palette.
            </p>
          </div>

          <div className="api">
            <div className="row">
              {currentRecords.map((sProduct, index) => (
                <div
                  key={index}
                  index={index}
                  className={`col-xl-3 col-lg-3 col-md-4 col-xs-6`}
                >
                  <div className="cardApi">
                    <div className="apiHover">
                      <div className="apiIcon">
                        <button className="wish">
                          <i className="fa-regular fa-heart"></i>
                        </button>
                        <button
                          type="button"
                          className="wish view"
                          onClick={() => view(sProduct)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </button>
                        <button
                          className="add"
                          onClick={() => addToCart(index)}
                        >
                          add to cart
                        </button>

                        {/* <button className="add">add to cart</button> */}
                      </div>
                      <img src={sProduct.img_hover} alt="" />
                    </div>
                    <div className="apiImg">
                      {sProduct.onsale ? (
                        <span className="offer">-29%</span>
                      ) : (
                        ""
                      )}
                      <img src={sProduct.img} alt="" />
                    </div>
                  </div>
                  <div className="apiText mb-4">
                    <p className="type mt-3 mb-2">{sProduct.type}</p>
                    <Link to={`/product/${sProduct.id}`}>
                      <h4>{sProduct.title}</h4>
                    </Link>

                    <span className="star">
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <span className="price">${sProduct.price}.00</span>
                    <span className="price discount">
                      {sProduct.onsale ? (
                        <del>${sProduct.discount}.00</del>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal For Api  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Product Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card2">
                <div className="row g-0 justify-content-center">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <img src={pro.img} alt="" />
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="cardtextInfo">
                      <h2 className="mb-xl-3 mb-lg-0 mb-md-0">{pro.title}</h2>
                      <p className="price">${pro.price}.00</p>
                      <p>
                        All materials in our products are recycled or renewable.
                      </p>
                      <p>
                        size : <span>20</span>
                      </p>
                      <p>
                        Color : <span>Green</span>{" "}
                      </p>
                      <p>
                        Material : <span>Wax</span>
                      </p>
                      <button className="add2 d-block">add to cart</button>
                      <p>
                        <span>
                          <i className="fa-solid fa-truck-fast"></i>
                        </span>
                        Spend $1,000.00 for Free Shipping
                      </p>
                      <p>SKU:</p>
                      <p>TYPE:</p>
                      <p>VENDOR : ${pro.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal For Api  */}
      {/* last sec end  */}

      {/* designer sec start  */}
      <section className="desginer m-80">
        <div className="container">
          <div className="from">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="cardfrom text-center">
                  <span>DESIGNERS</span>
                  <h5>
                    From all over the <br /> world
                  </h5>
                  <p>
                    HAY has always believed that good design is everyone’s
                    right. <br /> That’s why, from the very beginning,
                    co-founders and Creative <br /> Directors Mette and Rolf Hay
                    committed to working with their <br /> generation’s best
                    designers from all over the world to create <br />{" "}
                    high-quality products that would be available to a wide{" "}
                    <br /> audience.
                  </p>
                  <Link to="/about" className="viewLink">
                    view desginers
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="cardimg">
                  <img src={desginer} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* designer sec end  */}

      {/* story sec start  */}
      <section className="story m-80">
        <div className="container">
          <div className="collectText text-center ">
            <h3 data-aos="fade-down" data-aos-duration="3000">
              Stories
            </h3>
            <p className="py-2 mb-5">
              Latest news and blog updates from our editor.
            </p>
          </div>
          <div className="cards">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="blogCard"
                 
                >
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
                    <Link to="/blog" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="blogCard"
                 
                >
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
                    <Link to="/blog" className="more">
                      more details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="blogCard"
                 
                >
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
                    <Link to="/blog" className="more">
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
      {/* sign sec start  */}
      <section className="brand sign m-80">
        <div className="container">
          <div className="brandText signText text-center">
            <p className="new">NEWLETTERS</p>
            <h2 className="mb-4">
              Sign up for new stories <br /> and personal offers.
            </h2>
            <p className="sub">
              Subscribe to get notified about new stories, news and personal
              offers.
            </p>
            <label htmlFor="email">
              <input
                type="email"
                className="email"
                name="email"
                id="email"
                placeholder="email"
              />
              <button className="signUp">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </label>
          </div>
        </div>
      </section>
      {/* brand sec end  */}

      {/* shop sec start  */}
      <section className="shop m-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="shopCard"
                
              >
                <img src={lastImg} alt="" />
              </div>
              <div className="shopText text-center mt-5">
                <h6 className="pb-3">Sources of inspiration</h6>
                <p className="explore mb-3">
                  Explore our environments and inspire yourself to find the
                  right balance in your home.
                </p>
                <Link to="/shop" className="shopLink pb-1">
                  shop now
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="shopCard"
               
              >
                <img src={lastImg2} alt="" />
              </div>
              <div className="shopText text-center mt-5">
                <h6 className="pb-3">Join Modern.co rewards</h6>
                <p className="explore mb-3">
                  Explore our environments and inspire yourself to find the
                  right balance in your home.
                </p>
                <Link to="" className="shopLink pb-1">
                  join now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop sec end  */}
    </>
  );
}
