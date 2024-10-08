import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* <div className="bg-black pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img
                    src="assets/img/intware-next-logo.png"
                    alt="img"
                    style={{
                      height: "60px",
                      borderTopLeftRadius: "15px",
                      borderBottomRightRadius: "15px",
                    }}
                  />
                  <span className="ms-2" style={{ color: "#427638" }}>
                    Intware Technology
                  </span>
                </div>
                <div className="details">
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> (+888) 123 456 765
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Ui Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Digital marketing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Pc Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© Intware Technology 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Trams &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        {/* <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ background: "#427638" }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="mb-lg-0 mb-3 text-white">
                    Subscribe To Our Newsletter
                  </h3>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" href="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_about">
                <div
                  // className="bg-white"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <img
                    src="assets/img/intwareNameLogowithBG.svg"
                    alt="img"
                    style={{
                      height: "71px",
                    }}
                  />
                </div>
                <div className="details">
                  <p>
                    {/* Melbourne is simply is dumiomy is text Lorem Ipsum is simply */}
                  </p>
                  {/* <p className="mt-3">
                    <FaPhoneAlt /> (+91) 9403680184
                  </p> */}

                  <ul className="social-media">
                    <li className="ms-3">
                      <Link
                        href="https://www.linkedin.com/company/intware-technology/"
                        target="_blank"
                        className="me-2"
                      >
                        <FaLinkedin />
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  {/* <li>
                    <Link href="/service">
                      <FaArrowRight /> Ui Design
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/service">
                      <FaArrowRight /> Web design
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/service">
                      <FaArrowRight /> Digital marketing{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-2">
                      <FaArrowRight /> Web App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-3">
                      <FaArrowRight /> Software App Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <ul>
                  <li>
                    <div className="media">
                      {/* <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div> */}
                      <div className="text-white">
                        <FaPhoneAlt className="text-primary me-3" /> (+91)
                        9403680184
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="text-white">
                      <MdEmail className="text-primary me-3" />{" "}
                      sales@intwaretechnology.com
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© Intware Technology 2020 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                {/* <Link href="#">Trams &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link> */}
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
