import { useState } from "react";
import google from "../../../assets/img/google.png";
import apple from "../../../assets/img/apple.png";
import facebook from "../../../assets/img/facebook.png";
import "./sign-up-page.scss";

const SignUpPage = () => {
  const [activeOption, setActiveOption] = useState(0);

  const options = ["Sign in", "Sign up"];

  const handleClick = (index) => {
    setActiveOption(index);
  };

  return (
    <>
      <div className="sign-up">
        <div className="sign-up__container">
          <h2 className="logo">Harmonia</h2>
          <ul className="sign-up__options">
            {options.map((option, index) => (
              <li
                key={index}
                className={`raport__option ${
                  activeOption === index ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {activeOption === 0 ? (
            <form action="" className="login">
              <div className="input-container">
                <p>Email address</p>
                <input type="text" placeholder="Your email" />
              </div>
              <div className="input-container">
                <p>Password</p>
                <input type="password" placeholder="Password" />
              </div>
              <a href="#" className="forgot_password">
                Forgot password?
              </a>
              <button className="sign-up__button">Sign in</button>
            </form>
          ) : (
            <form action="" className="registration">
              <div className="input-container">
                <p>Email address</p>
                <input type="text" placeholder="Your email" />
              </div>
              <div className="input-container">
                <p>Password</p>
                <input type="password" placeholder="Password" />
              </div>
              <button className="sign-up__button">Sign up</button>
            </form>
          )}
          <p className="other">Other sign in options</p>
          <div className="other-registration">
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={google} alt="" />
              </a>
            </div>
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={apple} alt="" />
              </a>
            </div>
            <div className="other-registration__item">
              <a href="#" className="item-link">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
