import React, { useContext } from "react";

import whiteLogo from "../../../imgs/WhiteLogo.png";

import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../Context/Context";

import Cookies from "js-cookie";

const UpperHeader = () => {
  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();

  const MyAccount = () => {
    navigate(`/MyAccount/${user.id}`);
  };

  const logOut = () => {
    Cookies.remove("authentificatedUser");
    navigate("/LogIn");
  };

  return (
    <div className="upperHeader">
      <div className="logo">
        <Link className="logoLink" to={"/"}>
          <img src={whiteLogo}></img>
        </Link>

        <h2>Online education and Learning</h2>
      </div>

      <div className="content">
        <div className="contact">
          <div className="contactBox">
            <i className="fa-solid fa-clock"></i>
            <div className="contactText">
              <p>Monday-Friday</p>
              <p>8:00Am - 8:00PM</p>
            </div>
          </div>

          <div className="contactBox">
            <i className="fa-solid fa-phone"></i>
            <div className="contactText">
              <p>Call Us</p>
              <p>+2 392 3929 210</p>
            </div>
          </div>
        </div>

        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

        {user !== "undefined" && user != "" ? (
          <>
            <div className="sign">
              <h2 onClick={MyAccount}>My account</h2>
              <i
                className="fa-solid fa-arrow-right-from-bracket big"
                onClick={logOut}
              ></i>
            </div>
          </>
        ) : (
          <div className="sign">
            <Link className="link" to={"/LogIn"}>
              Log in
            </Link>

            <Link className="link" to={"/SignUp"}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpperHeader;
