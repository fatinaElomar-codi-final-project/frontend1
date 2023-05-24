import React from 'react';
import './login.css';

export default function Login() {
  return (
    <div className="container-login">
      <div className="main-login">
        <input type="checkbox" id="chk-login" aria-hidden="true" />

        <div className="login-login">
          <form className="form-login">
            <label htmlFor="chk-login" aria-hidden="true">
              Log in
            </label>
            <input className="input-login" type="email" name="email" placeholder="Email" required="" />
            <input className="input-login" type="password" name="pswd" placeholder="Password" required="" />
            <button>Log in</button>
          </form>
        </div>

        <div className="register-login">
          <form className="form-login">
            <label htmlFor="chk-login" aria-hidden="true">
              Register
            </label>
            <input className="input-login" type="text" name="txt" placeholder="Username" required="" />
            <input className="input-login" type="email" name="email" placeholder="Email" required="" />
            <input className="input-login" type="password" name="pswd" placeholder="Password" required="" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
