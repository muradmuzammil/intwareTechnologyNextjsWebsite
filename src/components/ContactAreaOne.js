// import Link from "next/link";
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const ContactAreaOne = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_csmtlnm", //YOUR_SERVICE_ID
        "template_2oqk4cy", //YOUR_TEMPLATE_ID
        form.current,
        "TETjJiShRN3ITpc8G" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
            form.current[4].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ========================= contact Area One start =========================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area">
        <div className="container">
          <div className="contact-inner-1">
            <img
              className="top_image_bounce animate-img-1"
              src="assets/img/banner/2.png"
              alt="img"
            />
            <img
              className="top_image_bounce animate-img-2"
              src="assets/img/about/6.png"
              alt="img"
            />
            <div className="row">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img
                  className="w-100"
                  src="assets/img/getinTouchNew.png"
                  alt="img"
                />
              </div>
              <div
                className="col-lg-4 wow animated fadeInRight"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="section-title mb-0">
                  <h6 className="sub-title">GET IN TOUCH</h6>
                  <h2 className="title">
                    Bringing Your <span>Vision</span> To Life
                  </h2>
                  {/* <p className="content">
                    For your car we will do everything advice design in us
                    repairs and maintenance. We are the some preferred.
                  </p> */}
                  <form className="mt-4" ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            id="email"
                            name="user_email"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Your Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea
                            name="message"
                            id="massage"
                            cols="1"
                            rows="5"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-base border-radius-5 w-100"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= contact-inner One end =========================*/}
    </>
  );
};

export default ContactAreaOne;
