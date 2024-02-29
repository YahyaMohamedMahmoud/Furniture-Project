import React from "react";
let toWish = JSON.parse(localStorage.getItem("car2")) || [];

export default function Wishlist() {
  function deleteCart(index) {
    toWish.splice(index , 1);
    localStorage.setItem("car2", JSON.stringify(toWish));
    window.location.reload()
  }
  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart">
        <div className="container">
          <div className="shopText detailsText text-center">
            <h1 className="mb-4">your wishlist</h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* pay sec start */}
      <section className="pay m-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <table className="table">
                <thead className="border-bottom">
                  <tr>
                    <th className="p-3">product</th>
                    <th className="py-3 px-1">price</th>
                  </tr>
                </thead>
                <tbody>
                  {toWish.map((product, index) => (
                    <tr index={index} key={index}>
                      <td>
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
                      <td>${product.price}.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
