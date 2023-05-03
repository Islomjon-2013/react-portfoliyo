import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2 className="text-center title">Contact me</h2>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
            <h2 className="subtitle">Let's discuss your project </h2>
            <div className="phone">
              <i className="bi bi-telephone-inbound icon "></i>
              <span>+1(929)-363-6008</span>
            </div>
            <div className="phone">
              <i className="bi bi-envelope-at icon"></i>
              <span>hulkarsiddiqova747@gmail.com</span>
            </div>
            <div className="phone">
              <i class="bi bi-geo-alt-fill icon"></i>
              <span>Brooklyn New York 11223 USA</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 login-box">
            <p>
              What's story? Get in touch Always available for freelancing if the
              right project comes along me
            </p>
            <form>
              <div class="user-box">
                <input type="text" name="username" required id="text" />
                <label>Username</label>
                <span className="span" id="error"></span>
              </div>
              <div class="user-box">
                <input type="password" name="password" required id="password" />
                <label>Password</label>
                <span className="span" id="error2"></span>
              </div>
              <button type="submit" id="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
