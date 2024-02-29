import React from 'react';

const ContactPage = () => {
  return (
  <>
 
  <div className="as_main_wrapper">
     
    <section className="as_breadcrum_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Contact</h1>
            <ul className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="as_contact_section as_padderTop80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="as_contact_info">
              <h1 className="as_heading">Contact Information</h1>
              <p className="as_font14 as_margin0">
                Consectetur adipiscing elit sed do eiusmod tr incididunt
                <br /> ut labore et dolore magna aliquauis ipsum.
              </p>
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6 col-xs-12">
                  <div className="as_info_box">
                    <span className="as_icon">
                      <img src="assets/images/svg/call1.svg" alt="" />
                    </span>
                    <div className="as_info">
                      <h5>Call Us</h5>
                      <p className="as_margin0 as_font14">
                        <a href="tel:7011989169">+91-7011989169</a>
                      </p>
                      {/*<p class="as_margin0 as_font14">+ (91) 1800-326-324</p>*/}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-6 col-xs-12">
                  <div className="as_info_box">
                    <span className="as_icon">
                      <img src="assets/images/svg/mail.svg" alt="" />
                    </span>
                    <div className="as_info">
                      <h5>Mail Us</h5>
                      <p className="as_margin0 as_font14">
                        <a href="mailto:info@myastrowalk.com">
                          info@myastrowalk.com
                        </a>
                      </p>
                      {/*<p class="as_margin0 as_font14"><a href="javascript:;"></a>astro@example.com</a></p>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="as_contact_form">
              <h4 className="as_subheading">Have A Question?</h4>
              <form
                className="contact-form"
                id="contactForm"
                name="contactForm"
                method="post"
                noValidate="novalidate"
              >
                <input type="hidden" name="submitForm" defaultValue="Yes" />
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your name*"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email*"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    minLength={10}
                    maxLength={12}
                    className="form-control"
                    placeholder="Your Mobile*"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button type="button" onclick="saveForm()" className="as_btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  {/* Modal */}
  <div
    id="as_login"
    className="modal fade"
    tabIndex={-1}
    aria-labelledby="as_login"
    role="dialog"
  >
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            ×
          </button>
          <h4 className="modal-title">Login</h4>
        </div>
        <div className="modal-body">
          <div className="as_login_box active">
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter email"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter password here"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <div className="as_login_data">
                  <label>
                    Remember me
                    <input
                      type="checkbox"
                      name="as_remember_me"
                      defaultValue=""
                    />
                    <span className="checkmark" />
                  </label>
                  <a href="#">Forgot password ?</a>
                </div>
              </div>
              <div className="text-center">
                <a href="javascript:;" className="as_btn">
                  login
                </a>
              </div>
            </form>
            <p className="text-center as_margin0 as_padderTop20">
              Create An Account ?{" "}
              <a href="javascript:;" className="as_orange as_signup">
                SignUp
              </a>
            </p>
          </div>
          <div className="as_signup_box">
            <form action="#">
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter name"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter email"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter password here"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  placeholder="Enter mobile number"
                  className="form-control"
                  id=""
                />
              </div>
              <div className="form-group">
                <select name="" className="form-control" id="">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="text-center">
                <a href="javascript:;" className="as_btn">
                  Sign Up
                </a>
              </div>
            </form>
            <p className="text-center as_margin0 as_padderTop20">
              Have An Account ?{" "}
              <a href="javascript:;" className="as_orange as_login">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* javascript */}
  <div id="myEnqModal" className="modal fade" tabIndex={-1} role="dialog">
    <div
      className="modal-dialog"
      style={{ maxWidth: 450 }}
      id="modal_content_enq"
    ></div>
  </div>
  <div id="successs" className="successs" style={{ display: "none" }}>
    <div
      className="customalert ale-success"
      role="alert"
      style={{ position: "relative" }}
    >
      <button type="button" className="cclose" onclick="return hideMSG()">
        X
      </button>
      <span id="alertmsg" />
    </div>
  </div>
  <div id="myModal32" className="modal fade" role="dialog">
    <div className="modal-dialog modal-lg">
      {/* Modal content*/}
      <div
        id="modalcontent"
        style={{ maxHeight: 520, minHeight: 520, maxWidth: 860, minWidth: 860 }}
        className="overflow-auto"
      ></div>
    </div>
  </div>
  </>

);
};
export default ContactPage;
