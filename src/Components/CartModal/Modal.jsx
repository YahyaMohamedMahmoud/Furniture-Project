import React, { useEffect, useState } from "react";
import "./CartModal.css";
import { Link } from "react-router-dom";
let toCart = JSON.parse(localStorage.getItem("car")) || [];

export default function Modal() {
  function deleteCart(index) {
    let minusCount = toCart[index].count * toCart[index].price;
    toCart[index].count = toCart[index].count - 1;
    minusCount = toCart[index].price - minusCount;
    if (toCart[index].count < 1) {
      toCart.splice(index, 1);
    }
    window.location.reload();
    localStorage.setItem("car", JSON.stringify(toCart));
  }

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            In My Cart : {toCart.length}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {toCart.length == 0 ? (
            <h6 className="text-center py-5">"No Products In Your Cart."</h6>
          ) : (
            toCart.map((product, index) => (
              <div key={index} className="row">
                <div index={index} className="col-xl-3 col-lg-3 col-md-3">
                  <div className="cart-img">
                    <img src={product.img} alt="" />
                  </div>
                </div>
                <div index={index} className="col-xl-9 col-lg-9 col-md-9">
                  <div className="cart-text mb-4">
                    Armchair Morgen - 20 / Green / wax
                    <h6 className="mb-2">{`${product.title} / count : ${product.count} / Green / ${product.type}`}</h6>
                    <p className="mb-2">${product.price}.00</p>
                    <button
                      className="delete me-5"
                      onClick={() => deleteCart(index)}
                    >
                      remove
                    </button>
                    <Link className="delete" to="cart">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
