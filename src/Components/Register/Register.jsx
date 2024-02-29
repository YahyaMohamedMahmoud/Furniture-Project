import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  let [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleUser(event) {
    let userData = { ...user };
    userData[event.target.name] = event.target.value;
    setUser(userData);
  }
  function submit(event) {
    event.preventDefault();
    if (
      user.firstname === "" ||
      user.lastname === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      alert("Please Complete Your Data");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/login";
    }
  }

  return (
    <>
      {/* cart sec start */}
      <section className="shop2 details cart login">
        <div className="container">
          <div className="shopText detailsText loginText text-center">
            <h1 className="mb-3">register</h1>
          </div>
        </div>
      </section>
      {/* cart sec end */}

      {/* login sec start */}
      <section className="log m-80">
        <div className="container">
          <div className="logForm text-center">
            <h2 className="text-capitalize">Register</h2>
            <p>Please fill in the fields below</p>
            <form onSubmit={submit}>
              <div className="form-floating mb-4">
                <input
                  onChange={handleUser}
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="form-floating">
                <input
                  onChange={handleUser}
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  onChange={handleUser}
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
                  onChange={handleUser}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <button className="logbtn" type="submit" onSubmit={submit}>
                create
              </button>
            </form>
            <p className="mt-3">
              Already a member ?{" "}
              <Link to="/login" className="text-decoration-underline ">
                log in
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* login sec end */}
    </>
  );
}
