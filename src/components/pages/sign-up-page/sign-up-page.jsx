import { useState } from "react";
import { Link } from "react-router-dom";

import google from "../../../assets/img/google.png";
import apple from "../../../assets/img/apple.png";
import facebook from "../../../assets/img/facebook.png";
import eyeIcon from "../../../assets/img/eye.svg";

import "./sign-up-page.scss";

const SignUpPage = () => {
  const [activeOption, setActiveOption] = useState(0);

  const options = ["Sign in", "Sign up"];

  const handleClick = (index) => {
    setActiveOption(index);
    console.log("Changing activeOption to:", index);
  };

  return (
    <>
      <nav className="sign-up__nav">
        <Link className="link" to={"/"}>
          Выходlllll
        </Link>
      </nav>
      <div className="sign-up">
        <div className="sign-up__container">
          <h2 className="logo">Harmonia</h2>
          <ul className="sign-up__options">
            {options.map((option) => (
              <li
                key={option}
                className={`sign-up__option ${
                  activeOption === options.indexOf(option) ? "active" : ""
                }`}
                onClick={() => handleClick(options.indexOf(option))}>
                {option}
              </li>
            ))}
          </ul>
          {activeOption === 0 ? (
            <form onSubmit={(e) => e.preventDefault()} className="login">
              <div className="input-container">
                <p>Email address</p>
                <div className="sign-up__input-wrapper">
                  <input type="text" placeholder="Your email" />
                  <img src={eyeIcon} alt="eye" />
                </div>
              </div>

              <div className="input-container">
                <p>Password</p>
                <div className="sign-up__input-wrapper">
                  <input type="password" placeholder="Password" />
                  <img src={eyeIcon} alt="eye" />
                </div>
              </div>

              <a href="#" className="forgot_password">
                Forgot password?
              </a>
              <button className="sign-up__button">Sign in</button>
            </form>
          ) : (
            <form onSubmit={(e) => e.preventDefault()} className="registration">
              <div className="input-container">
                <p>Email address</p>
                <div className="sign-up__input-wrapper">
                  <input type="text" placeholder="Your email" />
                  <img src={eyeIcon} alt="eye" />
                </div>
              </div>

              <div className="input-container">
                <p>Password</p>
                <div className="sign-up__input-wrapper">
                  <input type="password" placeholder="Password" />
                  <img src={eyeIcon} alt="eye" />
                </div>
              </div>

              <button className="sign-up__button">Sign up</button>
            </form>
          )}
          <p className="other">Other sign in options</p>
          <div className="other-registration">
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={google} alt="google" />
              </a>
            </div>
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={apple} alt="apple" />
              </a>
            </div>
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
