import React, { useState } from "react";
import "./Login.css";
import "./LogResponsive.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [getUser, setGetUser] = useState({
    userEmail: "",
    userPassword: "",
  });

  const userData = JSON.parse(localStorage.getItem('user'));

const mail = userData ? userData.email : '';
const pass = userData ? userData.password : '';

  function getuserData(event) {
    const { name, value } = event.target;
    setGetUser((prevState) => ({ ...prevState, [name]: value }));
  }
  function submit(event) {
    event.preventDefault();
    if (
        mail === getUser.userEmail &&
        pass === getUser.userPassword   
      ) {
        window.location.href = "/shop";
      }
}

  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart login">
        <div className="container">
          <div className="shopText detailsText loginText text-center">
            <h1 className="mb-3">log in</h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* login sec start */}
      <section className="log m-80">
        <div className="container">
          <div className="logForm text-center">
            <h2 className="text-capitalize">login</h2>
            <p>Please enter your e-mail and password:</p>
            <div className="form-floating mb-4">
              <input
                onChange={getuserData}
                type="email"
                className="form-control"
                id="userEmail"
                name="userEmail"
                placeholder="Email"
              />
              <label htmlFor="userEmail">Email</label>
            </div>
            <div className="form-floating">
              <input
                onChange={getuserData}
                type="password"
                className="form-control"
                id="userPassword"
                name="userPassword"
                placeholder="Password"
              />
              <label htmlFor="userPassword">Password</label>
            </div>
            <Link to="/shop" className="logbtn" onClick={submit}>
              log in
            </Link>
            <p className="mt-3">
              new customer ?{" "}
              <Link to="/register" className="text-decoration-underline ">
                register
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* login sec end */}
    </>
  );
}
