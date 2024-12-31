import "./sign-up-page.scss";

const SignUpPage = () => {
  return (
    <>
      <div className="sign-up">
        <div className="sign-up__container">
          <h2 className="logo">Harmonia</h2>
          <ul className="sign-up__options">
            <li className="sign-up__option active">Sign up</li>
            <li className="sign-up__option">Register</li>
          </ul>
          <form action="" className="registration">
            <div className="input-container">
              <p>Email address</p>
              <input type="text" placeholder="Your email" />
            </div>
            <div className="input-container">
              <p>Password</p>
              <input type="text" placeholder="Password" />
            </div>
            <a href="#" className="forgot_password">
              Forgot password?
            </a>
          </form>
          <button className="sign-up__button">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
