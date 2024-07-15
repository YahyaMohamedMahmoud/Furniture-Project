import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Shop.css";

export default function Card() {
  let [products, setProducts] = useState([]);
  let [col, setcol] = useState(4);
  let [pro, setpro] = useState(0);
  // pagination
  let [currentPage, setCurrentPage] = useState(1);
  let [recordsPerPage] = useState(9);

  let indexOfLastRecord = currentPage * recordsPerPage;
  let indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  let nPages = Math.ceil(products.length / recordsPerPage);
  let pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  let goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  let goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  // pagination

  function filterCol4() {
    setcol(4);
  }
  function filterCol3() {
    setcol(3);
  }
  // fetch api
  async function getApi() {
    let { data } = await axios.get("shop.json");
    setProducts(data.shop);
  }
  // to set,get and delete data from localstorage
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

  let toWish = JSON.parse(localStorage.getItem("car2")) || [];
  function addToWish(index) {
    let product = currentRecords[index];
    toWish.push(product);
    localStorage.setItem("car2", JSON.stringify(toWish));
    window.location.reload();
  }

  // fetch api
  useEffect(() => {
    getApi();
  }, []);
  function view(product) {
    setpro(product);
  }
  return (
    <>
      <div className="col-xl-9 col-lg-9 col-md-9">
        <div className="filterCard mb-4 d-flex justify-content-between">
          <div className="filterPro">
            <button className="bttn me-2" onClick={() => filterCol4()}>
              <i className="fa-solid fa-bars fa-rotate-90"></i>
            </button>
            <button className="bttn" onClick={() => filterCol3()}>
              <i className="fa-solid fa-barcode"></i>
            </button>
          </div>
          <div className="cartlength">{products.length + 1} Products</div>
        </div>
        <div className="row">
          {currentRecords.map((sProduct, index) => (
            <div
              key={index}
              index={index}
              className={`col-xl-${col} col-lg-${col} col-md-6 col-xs-6`}
            >
              <div className="cardApi">
                <div className="apiHover">
                  <div className="apiIcon">
                    <button className="wish" onClick={() => addToWish(index)}>
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
                    <button className="add" onClick={() => addToCart(index)}>
                      add to cart
                    </button>

                    {/* <button className="add">add to cart</button> */}
                  </div>
                  <img src={sProduct.img_hover} alt="" />
                </div>
                <div className="apiImg">
                  {sProduct.onsale ? <span className="offer">-29%</span> : ""}
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
                  {sProduct.onsale ? <del>${sProduct.discount}.00</del> : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination m-auto text-center w-25 mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link
                  className="page-link"
                  aria-label="Previous"
                  onClick={goToPrevPage}
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>

              {pageNumbers.map((pgNumber) => (
                <li
                  key={pgNumber}
                  className={`page-item ${
                    currentPage == pgNumber ? "active" : ""
                  } `}
                >
                  <Link
                    onClick={() => setCurrentPage(pgNumber)}
                    className="page-link"
                  >
                    {pgNumber}
                  </Link>
                </li>
              ))}

              <li className="page-item">
                <Link
                  className="page-link"
                  aria-label="Next"
                  onClick={goToNextPage}
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Modal to view Products */}
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
      {/* Modal to view Products */}
    </>
  );
}
