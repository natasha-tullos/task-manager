import React, { useState } from "react";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="col s12 m6">
        <div className="card xx-large darken-1">
          <div className="card-content center-align">
            <h1 className="card-title center-align">Trackster</h1>
            <p className="card-body center-align">
              Login to start tracking your todo items
            </p>
            <div className="row">
              <form
                className="col s12"
                onSubmit={(e) => login(e, email, password)}
              >
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <button className="waves-effect waves-light btn" type="submit">
                  Login
                </button>
                <div>
                  <div className="card-action">
                    <a href="/signup">Create an Account</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
