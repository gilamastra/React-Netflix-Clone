import React from "react";
import "./signUpScreen.css";

const SignUpScreen = () => {
  return (
    <div className="signUpScreen">
      <form action="">
        <h1>Sign In</h1>
        <input type="email" name="" placeholder="Email" id="" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signUpScreen__gray"> New To Netflix?</span>{" "}
          <span className="signUpScreen__link">Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
