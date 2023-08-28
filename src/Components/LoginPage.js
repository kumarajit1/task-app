import React from "react";
import { useNavigate } from "react-router-dom";
import "../../src/Login.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div >
        <h2>Please Login - Manage Your Task</h2>
      <form className="container-form">
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="name" placeholder="Enter your username" className="form-control w-25"  />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" placeholder="Enter your password" className="form-control w-25"  />
        </div>
          <div className="button-container">
          <button
            onClick={() => {
              navigate("/homepage");
            }}
            className="btn btn-secondary mx-2"
          >
            LOGIN
          </button>
          </div>

      </form>
    </div>
  );
}
export default LoginPage;
