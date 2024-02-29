import React from "react";
import "./Contact.css";
import "./ContactResponsive.css";

export default function Contact() {
  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart contact">
        <div className="container">
          <div className="shopText detailsText blogText text-center">
            <p className="mt-5">contact us</p>
            <h1>
              Do you have any <br /> question?
            </h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* call sec start */}
      <section className="call m-80">
        <div className="container">
          <div className="callText">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="callOne d-flex">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <ul>
                    <li>
                      <h2>Adress</h2>
                    </li>
                    <li>
                      0 Washington Square South New York,
                      <br />
                      NY 10012, United States
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="callOne d-flex">
                  <span>
                    <i className="fa-solid fa-phone-volume"></i>
                  </span>
                  <ul>
                    <li>
                      <h2>Call Us</h2>
                    </li>
                    <li>(+877) 834-1434</li>
                    <li>(+877) 834-1255</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="callOne d-flex">
                  <span>
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                  <ul>
                    <li>
                      <h2>Open</h2>
                    </li>
                    <li>Monday - Friday: 8am - 4pm</li>
                    <li>Saturday - Sunday: 9am - 5pm</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="callOne d-flex">
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <ul>
                    <li>
                      <h2>Emails</h2>
                    </li>
                    <li>fashionstyle@example.com</li>
                    <li>info@example.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call sec end */}

      {/* got  sec start */}
      <section className="got text-center m-80">
        <div className="container">
          <div className="gotText">
            <h3>Got Any Questions?</h3>
            <p>Use the form below to get in touch with the sales team</p>
          </div>
          <div className="gotFrom mt-5">
            <input
              type="text"
              name="name"
              id="name"
              className="name"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="name"
              placeholder="Email"
            />
            <br />
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Phone"
              className="name tel"
            />
            <br />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="name tel mt-3"
              placeholder="Message"
            ></textarea>{" "}
            <br />
            <button className="send">Send</button>
          </div>
        </div>
      </section>
      {/* got  sec end */}
    </>
  );
}
