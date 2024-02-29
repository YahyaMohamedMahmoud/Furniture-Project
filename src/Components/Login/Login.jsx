import React, { useState } from "react";
import "./Login.css";
import "./LogResponsive.css";
import { Link } from "react-router-dom";

export default function Login() {
  let [getUser, setgetUser] = useState({
    email: "",
    password: "",
  });
  let useremail = JSON.parse(localStorage.getItem("user"));
  let userPassword = JSON.parse(localStorage.getItem("user"));
  let mail = useremail.email;
  let pass = userPassword.password;
  console.log(mail);

  function getuserData(event) {
    let getdata = { ...getUser };
    getdata[event.target.name] = event.target.value;
    setgetUser(getdata);
  }
  function submit(event) {
    event.preventDefault();
    if (
      mail === getUser.email &&
      pass === getUser.password   
    ) {
      window.location.href = "/shop";
    } else if(getUser.password === "" ||
    getUser.email === "") {
     alert("Please Enter Your Email And Password Correct")
    } else if(mail != getUser.email){
      alert("Your Email is Not Correct,Please Check Your Email")
         
    } else if(pass != getUser.password){
      alert("Your Password is Not Correct , Please Check Your Password")
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
                id="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input
                onChange={getuserData}
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
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
