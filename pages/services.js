import React from 'react';

const Services = () => {
  return (

<>
  
  <div className="as_main_wrapper">
   
    <section className="as_breadcrum_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Services</h1>
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="as_service_wrapper serv_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center summary">
            <h1 className="as_heading as_heading_center">
              our astrology services
            </h1>
            <p className="as_font14 as_padderBottom5">
              MyAstroWalk is personalised horoscope readings, we also provide
              astrological consultations,
              <br /> birth chart analysis, and spiritual direction based on your
              unique astrological profile.
              <br /> Insightful and precise readings and guidance tailored to
              each client's distinct astrological <br />
              profile are provided by our team of astrologers.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/gemstones.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">GEMSTONES</h4>
                <p>
                  WHAT ARE&nbsp;GEMSTONES? Gemstones are a very important part
                  of ast...
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/palm-reading.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">PALM READING</h4>
                <p>LET'S TALK ABOUT PALM READING The art of palm reading, sometime... </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/numerology.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">NUMEROLOGY</h4>
                <p>
                  NUMEROLOGY It is an age-old science that examines the
                  significance ...
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/tarot-reading.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">TAROT READING</h4>
                <p>
                  There is a deck of cards called the Tarot that helps us make
                  sense of ...
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/manglik-dosha.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">MANGLIK DOSHA</h4>
                <p>
                  In Hindu astrology, the Manglik Dosha is a school of thought
                  that is p...
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/birth-journal.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image"/>
                </span>
                <h4 className="as_subheading">BIRTH JOURNAL</h4>
                <p>
                  Astrology, the ancient belief that the positions and movements
                  of cele...
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="service/vastu-shastra.html" className="as_links">
              <div className="as_service_box serv_top text-center">
                <span className="as_icon">
                  <img src="assets/images/svg/service1.svg" alt="service-image" className="responsive-image" />
                </span>
                <h4 className="as_subheading">VASTU SHASTRA</h4>
                <p>
                  The Vastu Shastra is one of these. Vastu Shastra, as its name
                  suggests...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  
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

export default Services;