import React from "react";
import Marquee from "react-fast-marquee";
import { FaApple, FaAws } from "react-icons/fa";
import { FaDocker, FaS } from "react-icons/fa6";
import {
  IoLogoAndroid,
  IoLogoAngular,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAzuredevops,
  SiMicrosoftsharepoint,
  SiMongodb,
  SiMysql,
  SiPowerautomate,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { DiFirebase } from "react-icons/di";

const FaqAreaOne = () => {
  return (
    <>
      <div className="container">
        <div
          className="card p-4"
          style={{
            boxShadow: "0px 4px 20px rgba(19, 16, 34, 0.06)",
            border: "none",
            borderRadius: "24px",
          }}
        >
          <div className="text-center h2">
            Our <span className="text-primary">Tech</span> Stack
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <Marquee direction="right" pauseOnHover={true}>
                <div className="me-3">
                  {/* <IoLogoJavascript style={{ height: "70px", width: "70px" }} />
                   */}
                  <img
                    src="assets/img/skill-icons--javascript.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/react-svg.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                  {/* <IoLogoReact style={{ height: "70px", width: "70px" }} /> */}
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--nextjs-dark.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--angular-dark.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--vuejs-dark.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--typescript.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <IoLogoAndroid
                    className="text-success"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--apple-dark.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--nodejs-dark.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/skill-icons--mongodb.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <SiAzuredevops
                    className="text-primary"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--mysql.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--aws.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>

                <div className="me-3">
                  <FaDocker
                    className="text-primary"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--firebase.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <SiPowerautomate style={{ height: "70px", width: "70px" }} />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--material-ui.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--tailwindcss-icon.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--bootstrap.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--jenkins.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--html-5.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--css-3.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--figma.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <img
                    src="assets/img/logos--adobe-xd.svg"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
                <div className="me-3">
                  <SiMicrosoftsharepoint
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row pt-5 position-relative">
          <div className="position-absolute position-top-right-second-img">
            <img
              class="banner-animate-img banner-animate-img-1 top_image_bounce"
              src="assets/img/banner/2.png"
              alt="img"
              width={"40"}
            />
          </div>
          <div className="col-lg-6 col-sm-12 ">
            <div
              className="h3"
              style={{
                width: "55px",
                borderBottom: "2px solid #0d6efd",
                paddingBottom: "15px",
              }}
            >
              Benefits
            </div>
            <div className="h1 mt-3 text-dark">
              What Sets Us <span className="text-primary">Apart</span>;
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            With expertise in Web App development, Mobile App, we are an expert
            offshore software development partner. Our team of highly
            collaborative technicians are dedicated to transforming business
            ideas into impactful technological realities.
          </div>
        </div>
        <div className="row mt-4 position-relative">
          <div className="position-absolute ">
            <img
              className="position-bottom-left-second top_image_bounce"
              src="assets/img/icon/4.png"
              alt="img"
            />
          </div>
          <div className="position-absolute" style={{ zIndex: "-1" }}>
            <img
              className="position-bottom-right-second-img top_image_bounce animate-img-2"
              src="assets/img/about/6.png"
              alt="img"
              width={"70px"}
            />
          </div>
          {/* <img
            className="position-bottom-left top_image_bounce"
            src="assets/img/icon/4.png"
            alt="img"
          /> */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="hover-cards">
              <div className="h4 text-dark">
                Advanced Technological Expertise
              </div>
              <div className="details mt-3">
                <p
                  style={{
                    height: "250px",
                    overflowY: "auto",
                    scrollbar: "none",
                  }}
                >
                  Our team of experts stays abreast of the latest developments,
                  ensuring that your projects benefit from innovative,
                  efficient, and scalable solutions. This technological prowess
                  enables us to create sophisticated software tailored to the
                  evolving demands of your business.
                </p>
              </div>
              <div>
                <ul>
                  <li>Innovation</li>
                  <li>Scalability</li>
                  <li>Performance</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="hover-cards">
              <div className="h4 text-dark">Agile Project Management</div>
              <div className="details mt-3">
                <p
                  style={{
                    height: "250px",
                    overflowY: "auto",
                    scrollbar: "none",
                  }}
                >
                  Through iterative development, continuous feedback, and
                  adaptive planning, we maintain flexibility and responsiveness
                  to changing requirements. This approach maximizes efficiency
                  and fosters close collaboration, resulting in high-quality
                  deliverables.
                </p>
              </div>
              <div>
                <ul>
                  <li>Flexibility</li>
                  <li>Quality</li>
                  <li>Responsive</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="hover-cards">
              <div className="h4 text-dark">
                Customized, Collaborative Approach
              </div>
              <div className="details mt-3">
                <p
                  style={{
                    height: "250px",
                    overflowY: "auto",
                    scrollbar: "none",
                  }}
                >
                  Our highly skilled technicians work closely with clients to
                  understand their unique needs and objectives. This
                  partnership-driven methodology allows us to deliver bespoke
                  solutions that align perfectly with your business goals,
                  ensuring optimal outcomes and long-term success.
                </p>
              </div>
              <div>
                <ul>
                  <li>Transparency</li>
                  <li>Strategic</li>
                  <li>Partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner pt-lg-3">
                <img
                  className="main-img"
                  src="assets/img/connectPic.png"
                  alt="img"
                />
                {/* <img
                  className="animate-img-bottom-right top_image_bounce"
                  src="assets/img/about/5.png"
                  alt="img"
                /> */}
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">SOME FAQ'S</h6>
                <h2 className="title">
                  Creating <span>Digital</span> Masterpieces
                </h2>
                {/* <p className="content">
                  It is a long established fact that a reader will be distr
                  acted bioiiy the end gail designa readable content of a page
                  when looking.
                </p> */}
              </div>
              <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Why choose Intware Technology Pvt. Ltd. for your next
                      digital product development?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We offer web and mobile app development, AI/ML Development
                      solutions, digital marketing, and e-commerce solutions,
                      using the latest technologies and agile methods. Our
                      rigorous quality assurance ensures secure,
                      high-performance software.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What technologies does Intware Technology use for software
                      and web development?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We offer a variety of web and software development
                      services that are inclusive of a range of technologies,
                      diversified frameworks and programming languages. However,
                      the selection of technology stack is completely dependent
                      on the client for their project as to what brings the best
                      of business performance for them. Although, we suggest and
                      assist businesses by analyzing their business
                      requirements, budget, future demands and available
                      technology stack.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you provide maintenance of custom software solutions?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We are a full-service software development company
                      providing design, development, deployment &amp;
                      maintenance services. Sustaining a software application is
                      equally important as developing as it keeps the
                      application healthy and relevant. Our maintenance services
                      include feature enhancements, optimization, bug fixing,
                      and preventive maintenance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What services does Intware Technology Pvt. Ltd. provide?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Intware Technology offers Custom software development, web
                      development, mobile app development, digital marketing,
                      Blockchain services, Advanced automation and any kind of
                      new digital services that can benefit your business.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How can I get in touch with Intware Technology for a
                      project?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      You can contact us via the website’s contact form, email,
                      or phone. Specific contact details are available on our
                      Contact Us page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
