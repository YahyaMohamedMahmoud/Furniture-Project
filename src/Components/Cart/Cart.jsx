import React from "react";
import "./Cart.css";
import "./CartResponsive.css";
import img2 from "../../img/buy.jpg";
let toCart = JSON.parse(localStorage.getItem("car")) || [];

export default function Cart() {
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
      {/* cart sec start */}
      <section className="shop2 details cart">
        <div className="container">
          <div className="shopText detailsText text-center">
            <h1 className="mb-4">your cart</h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* pay sec start */}
      <section className="pay m-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <table className="table">
                <thead className="border-bottom">
                  <tr>
                    <th className="p-3">product</th>
                    <th className="py-3 px-1">count</th>
                    <th className="py-3 px-1">total</th>
                  </tr>
                </thead>
                <tbody>
                  {toCart.map((product, index) => (
                    <tr index={index} key={index}>
                      <td className="also">
                        <div className="tableImg">
                          <div className="d-flex">
                            <div className="flex-shrink-0">
                              <img src={product.img} alt="" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h2>{product.title}</h2>
                              <p className="py-2">{`20 / Green / ${product.type}`}</p>
                              <button
                                className="delete"
                                onClick={() => deleteCart(index)}
                              >
                                remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{product.count}</td>
                      <td>${product.count * product.price}.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="getShip mt-5">
                <h3>Get Shipping Estimates</h3>
                <div className="formlist text-capitalize d-xl-flex d-lg-flex d-md-flex flex-column flex-md-row  justify-content-between my-4">
                  <label htmlFor="select">
                    country <br />
                    <select
                      className="form-control mt-2"
                      name="select"
                      id="select"
                    >
                      <option defaultValue={"choose.."}>Choose..</option>
                      <option defaultValue={"USA"}>USA</option>
                      <option defaultValue={"KSA"}>KSA</option>
                      <option defaultValue={"UAE"}>UAE</option>
                    </select>
                  </label>
                  <label htmlFor="select">
                    Province <br />
                    <select
                      className="form-control mt-2"
                      name="select"
                      id="select"
                    >
                      <option defaultValue={"choose.."}>Choose..</option>
                      <option defaultValue={"Texes"}>Texes</option>
                      <option defaultValue={"Hawii"}>Hawii</option>
                      <option defaultValue={"ohio"}>ohio</option>
                    </select>
                  </label>
                  <label htmlFor="code">
                    Zip/Postal Code <br />
                    <input
                      className="form-control mt-2"
                      type="text"
                      name="code"
                      id="code"
                    />
                  </label>
                </div>
                <button className="calcu mt-3">check out</button>
              </div>
            </div>
            <div className="col-xl-5">
              <img src={img2} className="mt-4" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
