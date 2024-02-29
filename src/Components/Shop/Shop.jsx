import React from "react";
import "./Shop.css";
import "./ShopResponsive.css";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Shop() {
  return (
    <>
      {/* shop landing sec start */}
      <section className="shop2 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="shopText text-center" >
            <h1 className="mb-4">all products</h1>
            <p>
              Shop now, not later. Browse the best of our favorite sale styles
              and brands.
            </p>
          </div>
        </div>
      </section>
      {/* shop landing sec end */}

      {/* summer sec start */}
      <section className="summer m-80">
        <div className="container">
          <div className="summerSave">
            <div className="summertext d-xl-flex d-lg-flex flex-lg-row flex-sm-column justify-content-center align-items-center text-center">
              <h2 className="me-2">Summer Saving</h2>
              <p className="mx-4 pt-1">
                Save an additional 10% on all clearance items.
              </p>
              <Link to="/shop" className="shopNow">
                shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* summer sec end */}

      {/* api sec start */}
      <section className="api m-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="filter">
                <h3 className="text-capitalize">filter :</h3>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-capitalize"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        available
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
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
                            In stock (40)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Out of stock (1)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionExample1">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-capitalize"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Price
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body py-4">
                        ${" "}
                        <input
                          className="dolar"
                          type="text"
                          name=""
                          id=""
                          placeholder="0.00"
                        />
                        ${" "}
                        <input
                          className="dolar"
                          type="text"
                          name=""
                          id=""
                          placeholder="5000.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-capitalize"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThere"
                        aria-expanded="true"
                        aria-controls="collapseThere"
                      >
                        brand
                      </button>
                    </h2>
                    <div
                      id="collapseThere"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="accordion-body">
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault3"
                          >
                            Mapezio (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Cubiko (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Perkens (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Stockholm (1)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Willis (10)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionExample4">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-capitalize"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Material
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="accordion-body">
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault4"
                          >
                            Ceramic (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked4"
                          >
                            Gold (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            leather (9)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Silver (10)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Stone (19)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            wax (9)
                          </label>
                        </div>
                        <div className="form-check py-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked3"
                          >
                            Wood (9)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
