import /*React,*/ { useState } from "react";
import "./style.css";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <button className="back-button">←</button>
          <h2>ĐĂNG NHẬP</h2>
          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Mật khẩu"
                className="input-field"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              ></button>
            </div>
            <button className="login-button" type="submit">
              ĐĂNG NHẬP
            </button>
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Ghi nhớ mật khẩu</label>
            </div>
          </form>
        </div>
        <div className="logo-section">
          <img
            src="https://pakdd.org/archive/pakdd2015/images/543px-Logo-hcmut.svg.png"
            alt="BK Logo"
            className="logo"
          />
          <h1>SMART PRINTING SYSTEM</h1>
        </div>
      </div>
      <footer>Secured by HCMUT - SPSO system</footer>
    </>
  );
};

export default Signin;
