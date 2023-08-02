import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import BcAsset from "../assets/BcAsset.png"
import asasayLogo from "../assets/asasayLogo.png"

function SignupForm(props) {
  const primaryColor = "#79C750"
  return (
    <div className="container-fluid " style={{ minHeight: "100vh" }}>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="rounded col-md-6 p-2"
          style={{ backgroundColor: primaryColor }}
        >
          <h1 className="p-3" style={{ color: "#ffffff" }}>
            Experience First Ever Decentralized Asset Management and It’s
            Marketplace
          </h1>
          <img
            className="img-fluid mx-auto d-block"
            src={BcAsset}
            alt="file"
          ></img>
          <div></div>
          <div className="col-md-6 text-white"></div>
        </div>
        <div className="rounded col-md-1"></div>
        <div className="rounded col-md-4 p-2">
          <img
            className="img-fluid mx-auto d-block"
            style={{ width: "65%" }}
            src={asasayLogo}
            alt="file"
          ></img>
          <form className="mt-4">
            <h1 className="p-3 text-center">Sign up to Continue</h1>
            <div className="form-floating mx-5 my-2">
              <input
                type="text"
                className="form-control "
                id="cnic"
                placeholder="xxxxx-xxxxxxxx-x"
              ></input>
              <label htmlFor="cnic">Enter your Cnic</label>
            </div>
            <div className="form-floating mx-5 my-2">
              <input
                type="email"
                className="form-control "
                id="email"
                placeholder="name@example.com"
              ></input>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-floating mx-5 my-2">
              <input
                type="text"
                className="form-control "
                id="name"
                placeholder="John Doe"
              ></input>
              <label htmlFor="name">Enter your name</label>
            </div>
            <div className="form-floating mx-5 my-2">
              <input
                type="password"
                className="form-control "
                id="password"
                placeholder="password"
              ></input>
              <label htmlFor="password">Password</label>
            </div>
            <div className="text-center my-2">
              <button
                className="btn btn-primary center mx-auto w-75 py-2"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
          <div>
            <p className="mx-5 my-5">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
          <div></div>
          <div className="col-md-6 text-white"></div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
