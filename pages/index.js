import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

<>
 
  <div className="as_main_wrapper">
    
    <section className="as_service_wrapper top_astro as_padderTop809 as_padderBottom809">
      <div className="container">
        <div className="as_top_box row col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
            <img src="assets/images/myastro.png"  alt="service-image"  className="service-image"
            />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 text-center">
            <h3 style={{ paddingTop: 30 }}>
              <b>
                Explore the horoscope created by our leading astrologers, review
                the predictions, and align your plans accordingly.
              </b>
            </h3>
            <a href="javascript:;" className="as_btn text-center">
              Chat Now
            </a>
          </div>
        </div>
        <section className="as_service_wrapper as_padderTop809 as_padderBottom809">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <a href="javascript:void(0)">
                  <div className="as_topastro_box text-center">
                    <span className="as_infoicon_top">
                      <img src="assets/images/icon/message-icon.png" alt="" />
                    </span>
                    <h5>Chat with Astrologer</h5>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <a target="_blank" href="https://wa.me/+91-7011989169">
                  <div className="as_topastro_box text-center">
                    <span className="as_infoicon_top">
                      <img src="assets/images/icon/call-icon.png" alt="" />
                    </span>
                    <h5>Talk to Astrologer</h5>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <a href="myastroshop.html">
                  <div className="as_topastro_box text-center">
                    <span className="as_infoicon_top">
                      <img src="assets/images/icon/myastro-mall.png" alt="" />
                    </span>
                    <h5>Myastro Shop</h5>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <a href="javascript:void(0)">
                  <div className="as_topastro_box text-center">
                    <span className="as_infoicon_top">
                      <img src="assets/images/icon/puja-kalash.png" alt="" />
                    </span>
                    <h5>Book a Pooja</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section className="as_banner_wrapper">
      <div className="container-fluid">
        <div className="row as_verticle_center">
          <div className="slick_banner col-lg-4 order-lg-1 col-md-4 order-md-1 col-sm-12 order-sm-1 col-12 order-2">
            <div className="as_banner_slider banner_content ">
              <div className="as_banner_detail">
                <h5>What's Your Sign ?</h5>
                <h2>Read Your Horoscope</h2>
                <p>
                  Explore the horoscope created by our leading astrologers,
                  review the predictions, and align your plans accordingly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-2 col-md-4 order-md-2 col-sm-12 order-sm-2 col-12 order-1">
            <div className="as_banner_img banner_circle text-center">
              <img src="images/circle-banners.png"
                alt=""
                className="lozad"
              />
            </div>
          </div>
          <div className="col-lg-4 order-lg-2 col-md-4 order-md-2 col-sm-12 order-sm-2 col-12 order-1">
            <div className="as_contact_forms">
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
                    placeholder="Your Name"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    minLength={10}
                    maxLength={12}
                    className="form-control"
                    placeholder="Your Mobile"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    row={2}
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
    <section className="as_service_wrapper blog_padderTop80 as_padderBottom80">
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
          <div className="row as_product_slider text-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/gemstones.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad"
                    />
                  </span>
                  <h4 className="as_subheading">GEMSTONES</h4>
                  <p>
                    WHAT ARE&nbsp;GEMSTONES? Gemstones are a very important p...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/palm-reading.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad" />
                  </span>
                  <h4 className="as_subheading">PALM READING</h4>
                  <p>
                    LET'S TALK ABOUT PALM READING The art of palm reading...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/numerology.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad" />
                  </span>
                  <h4 className="as_subheading">NUMEROLOGY</h4>
                  <p>
                    NUMEROLOGY It is an age-old science that examines the sig...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/tarot-reading.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad" />
                  </span>
                  <h4 className="as_subheading">TAROT READING</h4>
                  <p>
                    There is a deck of cards called the Tarot that helps us
                    make...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/manglik-dosha.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad" />
                  </span>
                  <h4 className="as_subheading">MANGLIK DOSHA</h4>
                  <p>
                    In Hindu astrology, the Manglik Dosha is a school of
                    thought...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/birth-journal.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg" alt="service-image" className="lozad" />
                  </span>
                  <h4 className="as_subheading">BIRTH JOURNAL</h4>
                  <p>
                    Astrology, the ancient belief that the positions and
                    movemen...
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center">
              <a href="service/vastu-shastra.html" className="as_links">
                <div className="as_service_box serv_top">
                  <span className="as_icon">
                    <img src="assets/images/svg/service1.svg"
                      alt="service-image"
                      className="lozad"
                    />
                  </span>
                  <h4 className="as_subheading">VASTU SHASTRA</h4>
                  <p>
                    The Vastu Shastra is one of these. Vastu Shastra, as its
                    nam...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="as_service_wrapper blog_padderTop80 as_padderBottom80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center summary">
            <h1 className="as_heading as_heading_center">our latest blog</h1>
            <p className="as_font14 as_padderBottom5">
              We release daily blogs covering topics such as horoscopes,
              numerology, and palm reading.
            </p>
          </div>
          <div className="row as_product_slider text-center">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a href="blogpost/astrology-and-travel.html" className="as_link">
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705050680ASTROLOGY AND TRAVEL.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Astrology and Travel</h6>
                  <span>23-11-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/astrology-and-your-pets-personality.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705051663vvvvvvvv.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Astrology And Your Pet...</h6>
                  <span>23-11-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/career-guidance-through-astrology.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705050831ASTROLOGY career.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>CAREER GUIDANCE THROUG...</h6>
                  <span>23-11-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/how-can-i-determine-which-astrological-remedy-is-suitable-for-me.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705315378october-2022-astrology-remedies-by-expert.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>How Can I Determine Wh...</h6>
                  <span>23-11-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a href="index.html?" className="as_link">
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705051021COMPATIBLE BELIEFS.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Is Astrology Compatibl...</h6>
                  <span>23-11-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/can-astrology-help-with-relationships.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705051417RElationship.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Can Astrology Help Wit...</h6>
                  <span>11-10-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/can-tarot-cards-predict-love.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1700822321predict-love.jpg"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Can Tarot Cards Predic...</h6>
                  <span>27-09-2023</span>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <a
                href="blogpost/marriage-compatibility-for-our-zodiac-sign.html"
                className="as_link"
              >
                <div className="as_service_box serv_blog text-center">
                  <img src="upload_images/blog/1705051365Marriage Compatibility.png"
                    alt="zodiac-post"
                    className="zodiac-post lozad"
                  />
                  {/*<img src="assets/images/about1.jpg" alt="service-image"class="lozad"> */}
                  <h6>Marriage Compatibility...</h6>
                  <span>25-09-2023</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="as_team_wrapper as_padderTop80 as_padderBottom50">
      <div className="container">
        <div className="row">
          <h1 className="as_heading as_heading_center text-center">
            Our Celebrities Horoscope
          </h1>
          <p className="as_font14 as_margin0 as_padderBottom20 text-center">
            Exceptional Customer Service provided by MYASTROWALK They were
            always very quick to answer tomy questions and gave support that was
            really helpful.
          </p>
          <div className="row as_product_slider">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <a
                href="celebrity-horoscope/ajay-devgan.html"
                className="as_link"
              >
                <div className="as_team_box text-center">
                  <div className="as_team_img">
                    <img src="upload_images/celebrity/1706857524ajay.jpg"
                      alt="zodiac-post"
                      className="zodiac-post lozad"
                    />
                    {/*<img src="assets/images/mamata.jpg" alt="" class="img-responsive">*/}
                  </div>
                  <h3 className="as_subheading">Ajay Devgan</h3>
                  <p>Actor</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <a
                href="celebrity-horoscope/ranbir-kapoor.html"
                className="as_link"
              >
                <div className="as_team_box text-center">
                  <div className="as_team_img">
                    <img src="upload_images/celebrity/170685829822a7c12ca93898cd1f037180507b0239.jpg"
                      alt="zodiac-post"
                      className="zodiac-post lozad"
                    />
                    {/*<img src="assets/images/mamata.jpg" alt="" class="img-responsive">*/}
                  </div>
                  <h3 className="as_subheading">Ranbir Kapoor</h3>
                  <p>Actor</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <a
                href="celebrity-horoscope/priyanka-sharma.html"
                className="as_link"
              >
                <div className="as_team_box text-center">
                  <div className="as_team_img">
                    <img src="upload_images/celebrity/1706857441priyanka.jpg"
                      alt="zodiac-post"
                      className="zodiac-post lozad"
                    />
                    {/*<img src="assets/images/mamata.jpg" alt="" class="img-responsive">*/}
                  </div>
                  <h3 className="as_subheading">Priyanka Chopra</h3>
                  <p>Actor</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="celebrity-horoscope/m-s-dhoni.html" className="as_link">
                <div className="as_team_box text-center">
                  <div className="as_team_img">
                    <img src="upload_images/celebrity/1706857400dhoni.jpg"
                      alt="zodiac-post"
                      className="zodiac-post lozad"
                    />
                    {/*<img src="assets/images/mamata.jpg" alt="" class="img-responsive">*/}
                  </div>
                  <h3 className="as_subheading">M.S Dhoni</h3>
                  <p>Cricketer</p>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <a
                href="celebrity-horoscope/kapil-sharma.html"
                className="as_link"
              >
                <div className="as_team_box text-center">
                  <div className="as_team_img">
                    <img src="upload_images/celebrity/1706857350kapil.jpg"
                      alt="zodiac-post"
                      className="zodiac-post lozad"
                    />
                    {/*<img src="assets/images/mamata.jpg" alt="" class="img-responsive">*/}
                  </div>
                  <h3 className="as_subheading">Kapil Sharma</h3>
                  <p>Comedian</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="as_service_wrapper astro_padderTop80 as_padderBottom80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center summary">
            <h1 className="as_heading as_heading_center">our astrologers</h1>
            <p className="as_font14 as_padderBottom5">
              MyAstroWalk is personalised horoscope readings, we also provide
              astrological consultations,
              <br /> birth chart analysis, and spiritual direction based on your
              unique astrological profile.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="javascript:void(0)" className="as_links">
              <div className="as_service_box our_astro text-center">
                <span className="as_icon">
                  <img src="assets/images/poonam.jpg"
                    alt="service-image"
                    className="lozad"
                  />
                </span>
                <h4>Poonam</h4>
                <p>Vedic Astrology</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="javascript:void(0)" className="as_links">
              <div className="as_service_box our_astro text-center">
                <span className="as_icon">
                  <img src="assets/images/mamata.jpg"
                    alt="service-image"
                    className="lozad"
                  />
                </span>
                <h4>Mamta</h4>
                <p>Vedic Astrology</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="javascript:void(0)" className="as_links">
              <div className="as_service_box our_astro text-center">
                <span className="as_icon">
                  <img src="assets/images/amit.jpeg"
                    alt="service-image"
                    className="lozad"
                  />
                </span>
                <h4>Rahul Sharma</h4>
                <p>Vedic Astrology</p>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <a href="javascript:void(0)" className="as_links">
              <div className="as_service_box our_astro text-center">
                <span className="as_icon">
                  <img src="assets/images/twinkal.jpeg"
                    alt="service-image"
                    className="lozad"
                  />
                </span>
                <h4>Bramhjot Kaur</h4>
                <p>Vedic Astrology</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="as_overview_wrapper quest_padderBottom80 quest_padderTop80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="as_overview">
              <div className="as_overview_inner">
                <h1 className="as_heading as_heading_center  text-center">
                  Why Astrology
                </h1>
                <p className="as_font14" />
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  Every major world religion has a unique perspective on
                  astrology and its appropriate applications. Some consider it
                  risk-free and entertaining, whereas others believe it violates
                  their religious beliefs.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  To determine if they align with what you are seeking, you
                  could begin by examining the scriptures and teachings of your
                  faith. A few religious texts have astrological references in
                  certain passages, and people's interpretations of these lines
                  vary widely. Consider your beliefs regarding fate and free
                  will in the universe. Astrology typically predicts future
                  events based on the positions of the constellations in the
                  sky, which may or may not align with your beliefs regarding
                  free will and determinism.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  In certain circumstances, your culture and past may also be
                  significant factors. Some religious sects practice astrology,
                  while others have no belief in it.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  If you are unsure whether astrology is compatible with your
                  beliefs as a member of a particular faith, you should seek the
                  counsel of prominent religious leaders or scholars associated
                  with that faith. They can guide you in accordance with the
                  precepts and doctrine of your faith.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  What ultimately matters most are your own opinions of
                  yourself. You are free to utilize astrology in your life so
                  long as it does not conflict with your religious practices,
                  convictions, or objectives. If it violates your religious
                  principles, you may also choose to avoid it. Remember that
                  everyone has their own unique perspective, so it's acceptable
                  if you have your own ideas about how astrology relates to your
                  particular religion.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  The meanings of the ninth and twelfth houses, along with the
                  symbols of Jupiter, Saturn, and Neptune, demonstrate the
                  significance of religion and faith in astrology. The ninth and
                  twelfth houses represent locations in your life where you may
                  seek religious or spiritual guidance, experience, or
                  ordination. Jupiter can mean a powerful religious or spiritual
                  leader, Saturn can mean a strict vision of God, and Neptune
                  can mean religious joy and mystical experiences.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  A reliable and impartial psychic can help a client develop in
                  their faith. Through examining their charts, I have assisted
                  some individuals in rediscovering and reusing their religious
                  origins. I have demonstrated how they can discover strength by
                  pursuing a religious path.&nbsp; &nbsp;Religion is essential
                  to the mental health and well-being of some individuals.
                </p>
                <p
                  style={{
                    boxSizing: "border-box",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 16
                  }}
                >
                  Astrology, unlike many organized religions, does not contain
                  detrimental concepts or practices that are sexist, racist,
                  homophobic, or otherwise offensive. The traditional separation
                  of male and female planets and energies in astrology has been
                  rethought in terms of genderless passive and active energies.
                  Every planet and star has its own location in the sky,
                  regardless of size. The same holds true for humans.
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="as_overview_wrapper as_padderBottom80 quest_padderTop80">
      <div className="container">
        <div className="row">
          <h1 className="as_heading as_heading_center  text-center">
            {" "}
            ASTROLOGY FAQ'S
          </h1>
          <div className="col-lg-12">
            <div className="as_overview">
              <div className="as_overview_faq">
                <h6 className="as_heading_center">
                  <strong>
                    CAN I PERFORM ASTROLOGICAL REMEDIES ON MY OWN, OR DO I NEED
                    A PROFESSIONAL'S GUIDANCE?
                  </strong>
                </h6>
                <p className="as_font14">
                  Those who have a fundamental understanding of astrology are
                  capable of performing astrological cures on their own. There
                  are readily available, uncomplicated remedies, such as
                  meditation and the donning of specific gemstones. To ensure
                  the efficacy and precision of more omplex or individualised
                  treatments, however, it is recommended by MYASTROWALK to
                  consult a trained professional astrologer.
                </p>
              </div>
            </div>
            <div className="as_overview">
              <div className="as_overview_faq">
                <h6 className="as_heading_center">
                  <strong>
                    HOW LONG DOES IT TAKE TO SEE RESULTS FROM ASTROLOGICAL
                    REMEDIES?
                  </strong>
                </h6>
                <p className="as_font14">
                  The effectiveness of astrological remedies might vary widely.
                  Wearing specific gemstones or saying specific prayers may
                  bring about minor improvements between a few weeks to a few
                  months. It may take a while to make progress on more involved
                  issues, such as establishing new habits or examining
                  long-standing issues in your natal chart. How effectively the
                  remedies work can also be affected by the ndividual level of
                  faith in them, their level of commitment, and the state of
                  their horoscopes.
                </p>
              </div>
            </div>
            <div className="as_overview">
              <div className="as_overview_faq">
                <h6 className="as_heading_center">
                  <strong>CAN ASTROLOGICAL REMEDIES CHANGE MY DESTINY?</strong>
                </h6>
                <p className="as_font14">
                  The purpose of astrological treatments is not to alter a
                  person's fate, but rather to discover methods to work with the
                  celestial forces that influence their lives. A person's
                  destiny is determined by a combination of factors, including
                  the astrological configurations at the time of their birth and
                  their own free will, according to astrology. Gemstones,
                  rituals, and affirmations are a few of the astrological
                  therapies used to assist individuals in better aligning
                  themselves with the planets, thereby diminishing the negative
                  effects and amplifying the positive ones.
                </p>
              </div>
            </div>
            <div className="as_overview">
              <div className="as_overview_faq">
                <h6 className="as_heading_center">
                  <strong>
                    HOW ACCURATE ARE THE PREDICTIONS AND READINGS PROVIDED BY
                    ASTROLOGERS CAN ASTROLOGICAL REMEDIES CHANGE MY DESTINY?
                  </strong>
                </h6>
                <p className="as_font14">
                  Astrologers can give very different levels of truth in their
                  readings and predictions. Astrology is based on figuring out
                  what the positions of the stars mean. How accurate the
                  predictions are depends on how skilled the astrologer is and
                  how much data is available. Some people find that astrology is
                  fairly accurate at predicting their personality traits and
                  life trends. However, the level of accuracy may vary from
                  practitioner to practitioner.
                </p>
              </div>
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
  {/* Modal */}
  <div id="myModal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
          <h4 className="modal-title" style={{ textAlign: "center" }}>
            Download on app store
          </h4>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="../s12.postimg.org/fmzk1vsi5/phylo.png"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-2">
              <img
                src="../s17.postimg.org/jjwynz1en/ios.png"
                className="img-responsive"
              />
            </div>
            <div className="col-xs-4">
              <img
                src="../s22.postimg.org/mj975ck6p/android.png"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
        {/*<div class="modal-footer">
  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>*/}
      </div>
    </div>
  </div>
</>






  );
}
