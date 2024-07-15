import React, { useEffect, useState } from "react";
import "./Product_Details.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import designer from "../../img/designer.webp";
import img1 from "../../img/16be267143978209.62843fe01d7e7.webp";
import img2 from "../../img/a11b29a143978209.62843fe0a7773.webp";
import awesomeImg from "../../img/244a4a168667819.645a6eee04e0e.webp";

export default function Product_Details() {
  const params = useParams();
  let [x, setx] = useState([]);
  async function getApi() {
    let { data } = await axios.get("/shop.json");
    let api = data.shop.find((pro) => pro.id == params.id);
    setx(api);
  }
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {/* details sec start */}
      <section className="shop2 details">
        <div className="container">
          <div className="shopText detailsText text-center">
            <h1 className="mb-4">product details</h1>
          </div>
        </div>
      </section>
      {/* details sec end */}

      {/*product details sec start */}
      <section className="product m-80">
        <div className="container">
          <div className="row justify-content-center g-xl-5">
            <div className="col-xl-5">
              <div
                id="carouselExample"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={`/${x.img}`}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={`/${x.img_hover}`}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev prev2"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon icon2"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next next2"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon icon3"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="productImg"></div>
            </div>
            <div className="col-xl-5">
              <div className="productText">
                <h1 className="mb-2">{x.title}</h1>
                <span>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </span>
                <span className="text-capitalize">no review</span>
                <p className=" price1 mt-3 mb-3">${x.price}</p>
                <p className="all my-3">
                  All materials in our products are recycled or renewable.
                </p>
                <p className="mb-3">
                  Size : <span>20</span>
                </p>
                <button className="size">20</button>
                <p className="my-3">
                  color : <span>red</span>
                </p>
                <button className="color me-2">
                  <i className="fa-solid fa-circle"></i>
                </button>
                <button className="color color2">
                  <i className="fa-solid fa-circle"></i>
                </button>
                <p className="my-3">
                  Material : <span>{x.type}</span>
                </p>
                <button className="size me-2 ">wax</button>
                <button className="size">leather</button>
                <br />
                <input
                  type="number"
                  name=""
                  id=""
                  defaultValue={1}
                  className="input"
                />
                <button className="add2">add to cart</button>
                <div className="form-check my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I agree with the terms and conditions
                  </label>
                </div>
                <p>
                  <span className="true me-2">
                    <i className="fa-solid fa-check"></i>
                  </span>
                  Pickup available at Shop location
                </p>
                <span className="mx-4 ready">Usually ready in 24 hours</span>
                <div className="div mt-5 mb-3 d-flex">
                  <p className="me-5">
                    Vendor : <span>Perkens</span>
                  </p>
                  <p className="me-5">
                    Type : <span>N/a</span>
                  </p>
                  <p>
                    Sku : <span>N/a</span>
                  </p>
                </div>
                <div className="reward">
                  <h3>
                    <span>
                      <i className="fa-solid fa-percent"></i>
                    </span>
                    Rewards
                  </h3>
                  <p className="ms-5">Join to earn 84 points from this item</p>
                </div>
                <div className="free py-4 text-center my-5 d-flex justify-content-between">
                  <div className="freeship">
                    <span className="d-block">
                      <i className="fa-solid fa-truck"></i>
                    </span>
                    <p>Free shipping</p>
                  </div>
                  <div className="freeship">
                    <span className="d-block">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <p>Secure payment</p>
                  </div>
                  <div className="freeship">
                    <span className="d-block">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <p>2 Year Warranty</p>
                  </div>
                </div>
                <div className="order">
                  Order in the next 8 hours 11 minutes to get it by Friday, 08
                  March 2024. Delivery information
                  <span className="mx-2">
                    <i className="fa-solid fa-truck-fast"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*product details sec end */}

      {/*tabs sec start */}
      <section className="tabs m-80">
        <div className="container">
          <ul className="nav mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-description-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-description"
                type="button"
                role="tab"
                aria-controls="pills-description"
                aria-selected="true"
              >
                description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-material-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-material"
                type="button"
                role="tab"
                aria-controls="pills-material"
                aria-selected="false"
              >
                Material
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-sizing-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-sizing"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Sizing
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-care-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-care"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Care
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-description"
              role="tabpanel"
              aria-labelledby="pills-description-tab"
              tabIndex="0"
            >
              <p>
                This Vase Seashell is a unique and beautiful addition to any
                home decor. Crafted from high quality materials, this vase
                boasts a stunning seashell design, adding a touch of elegance to
                any room. Perfect for displaying your favorite flowers or as a
                standalone piece, this vase is a must-have for any interior
                design enthusiast.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-material"
              role="tabpanel"
              aria-labelledby="pills-material-tab"
              tabIndex="0"
            >
              <p>12 oz canvas made of 65% recycled polyester / 35% cotton</p>
              <p>
                Collar & inside lining made of 100% recycled polyester sherpa
                fleece
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-sizing"
              role="tabpanel"
              aria-labelledby="pills-sizing-tab"
              tabIndex="0"
            >
              <ul>
                <li>We recommend sizing up.</li>
                <li>Model is wearing size M.</li>
                <li>Height: 180cm / 5’9”</li>
                <li>Bra size: EU 75, US/UK: 34</li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-care"
              role="tabpanel"
              aria-labelledby="pills-care-tab"
              tabIndex="0"
            >
              <p>
                We use the highest quality technical fabrics available on the
                market and are passionate about creating timeless, lasting
                items. To keep your Mordern in great shape, wash it on cold and
                gentle cycle, do not tumble dry and hang dry immediately after
                washing. Do not bleach.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*tabs sec end*/}

      {/*servies sec start */}
      <section className="servies text-center m-80">
        <div className="container">
          <div className="servies2">
            <div className="row">
              <div className="col-xl-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-solid fa-truck"></i>
                  </span>
                  <h3 className="my-3">Free Shipping</h3>
                  <p>Get free shipping on orders of $100 or more</p>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-regular fa-life-ring"></i>
                  </span>
                  <h3 className="my-3">Customer service</h3>
                  <p>A question? Please contact us at 123-456-7890</p>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="freeGet">
                  <span className="icon">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <h3 className="my-3">Refer a friend</h3>
                  <p>Refer a friend and get 15% off each other</p>
                </div>
              </div>
              <div className="col-xl-3">
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

      {/*catalog sec start */}
      <section className="catalog m-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="designerImg">
                <img src={designer} alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="designerText">
                <div className="row g-0">
                  <div className="col-xl-6">
                    <div className="designerText2 border-top-0">
                      <div className="direct py-5 px-4">
                        <h4>Direct customer relationship</h4>
                        <p className="mt-3 mb-1">
                          By doing everything ourselves — and selling directly
                          to people — we can run a more nimble & efficient
                          business.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="designerText2 border-top-0 border-end-0">
                      <div className="direct py-5 px-4">
                        <h4>Curated catalog</h4>
                        <p className="mt-3 mb-3">
                          We strip away a lot of needless decisions and let
                          people create their perfect piece without an
                          overwhelming sea of choices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="designerText2">
                      <div className="direct py-5 px-4">
                        <h4>Support and service</h4>
                        <p className="mt-3">
                          Our team of experts is always standing by to go above
                          and beyond to lend a hand, take feedback, or mail out
                          a replacement part.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="designerText2 text2 border-end-0">
                      <div className="direct py-5 px-4">
                        <h4>Caring for our community</h4>
                        <p className="mt-3">
                          Whether it’s a sustainability initiative, standing up
                          for social justice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*catalog sec end */}

      {/*hero-video sec start */}
      <section className="hero-video m-80">
        <video
          className="video"
          loop
          autoPlay
          muted
          src="https://cdn.shopify.com/videos/c/o/v/39dd3d7f787742ac8c563910a77ede32.mp4"
        ></video>
        <div className="container">
          <div className="videoText text-center">
            <p className="mb-3">TRENDS</p>
            <h4>
              Furniture Trends <br /> AW/21
            </h4>
            <p className="mt-4">Sale ends on September 30th, 2023</p>
          </div>
        </div>
      </section>
      {/*hero-video sec end */}

      {/*inspration sec start */}
      <section className="inspration m-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="descImg1 mt-5">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="col-xl-3">
              <div className="descImg">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="we px-5 py-4">
                <p className="mb-4">inspration</p>
                <h5 className="mb-5">
                  We are inspired by <br /> the realities of life <br /> today.
                </h5>
                <Link to="/shop" className="shop">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*inspration sec end */}

      {/*awesome sec start */}
      <section className="awesome m-80">
        <div className="container">
          <div className="awesome2">
            <div className="row">
              <div className="col-xl-6">
                <div className="awesomeText">
                  <p className="awe mb-4">awesome</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <h5 className="mt-4">
                    " We do furniture and design for many different
                    environments. At home, public spaces, professional spaces,
                    and all the spaces in between. "
                  </h5>
                  <p className="name mt-5">— Susan P.</p>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="awesomeImg">
                  <img src={awesomeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*awesome sec end */}
    </>
  );
}
