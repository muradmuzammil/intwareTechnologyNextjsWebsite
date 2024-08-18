import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroupTwo from "@/components/ServiceAreaGroupTwo";
import { GrLinkNext } from "react-icons/gr";

export const metadata = {
  title: "Service || Intware Technology - IT Solutions",
  description:
    "Intware Technology provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  const offeredServices = [
    {
      title: "Custom Web Application Development",
      description:
        "We create bespoke web applications tailored to your specific business requirements, ensuring functionality, scalability, and a user-friendly interface to meet your unique needs.",
    },
    {
      title: "Enterprise Web Application Development",
      description:
        "Our enterprise web applications are designed to streamline and enhance your business processes, providing robust, scalable solutions that support your organizational goals.",
    },
    {
      title: "Customer Relationship Management",
      description:
        "We develop custom CRM systems to help you manage and analyze customer interactions and data, improving customer satisfaction and driving business growth.",
    },
    {
      title: "ERP Development Management",
      description:
        "Our ERP solutions integrate all facets of your business operations, from inventory management to human resources, ensuring efficient and cohesive management of your enterprise.",
    },
    {
      title: "Web Portal Development",
      description:
        "We build comprehensive web portals that serve as a central hub for your business, offering seamless access to information and services for users and employees alike.",
    },
    {
      title: "eCommerce App Development",
      description:
        "Our eCommerce applications are designed to provide a seamless shopping experience, with secure payment systems, product catalogs, and user-friendly interfaces to drive sales and customer satisfaction..",
    },
    {
      title: "QA and Software Testing",
      description:
        "Our comprehensive QA and software testing services ensure that your custom software is reliable, secure, and performs optimally, providing a smooth and error-free user experience.",
    },

    {
      title: "On-demand Web App Development",
      description:
        "Our on-demand Web app development services create apps for instant services, such as ride-sharing or food delivery. We build solutions with real-time interactions, location-based services, and efficient payment integrations to meet user needs swiftly.",
    },
    {
      title: "Hire Expert Software Developers",
      description:
        "Engage our expert software developers to transform your ideas into cutting-edge solutions. With deep technical expertise and a focus on quality, our team delivers robust and scalable software tailored to your specific needs.",
    },
  ];
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"App Development"} textHeading={"Web"} />
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 col-sm-12">
            <h2>
              Elevating Your Vision
              <span className="text-primary ms-1">
                with Custom Software Excellence
              </span>
            </h2>
            <p>
              Intware Technology stands as a prominent force in the realm of
              custom software development services, delivering exceptional IT
              solutions to businesses worldwide.
            </p>
            <p>
              Our adept team of software developers epitomizes intuition,
              transparency, expertise, and skill. Your vision, meticulously
              coded and brought to life — that's the Intware promise.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="position-relative">
              <div className="position-absolute service-page-animation top_image_bounce">
                <img src="assets/img/banner/2.png" />
              </div>

              <img
                src="assets/img/excellence.svg"
                alt="img"
                height={"92%"}
                width={"75%"}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <div className="position-relative">
                <div className="position-absolute service-page-animation-2 top_image_bounce">
                  <img src="assets/img/banner/2.png" />
                </div>

                <img
                  src="assets/img/softwareDev.svg"
                  alt="img"
                  height={"92%"}
                  width={"75%"}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2>
                Innovative and Adaptable Custom
                <span className="text-primary ms-1">
                  Software Development
                </span>{" "}
                Solutions
              </h2>
              <p>
                Our developers are not merely coders; they are innovators who
                understand the ever-evolving trends in the technology sphere.
                With a keen sense of adaptability, they integrate these trends
                seamlessly with the unique requirements of your business.
              </p>
              <p>
                This fusion of contemporary insights and personalized needs
                ensures that the custom software solutions we deliver are not
                only technologically advanced but also precisely aligned with
                your organizational goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url("./assets/img/bg/7.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row p-5">
            <div className="col-lg-6 col-sm-12">
              <div className="h2">
                <span className="text-primary">Services</span> We Offer
              </div>
              <div
                style={{
                  borderTop: "2px solid #0d6efd",
                  width: "75px",
                  marginTop: "18px",
                }}
              ></div>
              <h2 className="mt-3">
                Tailored Software{" "}
                <span className="text-primary ms-1 me-1">
                  Development Solutions
                </span>
                to Power Your Business
              </h2>
              <p>
                Our expert team crafts tailored software designed to optimize
                your operations and drive growth, ensuring your business stays
                ahead in the competitive landscape.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex align-items-center">
              <div className="overFlow-box">
                {offeredServices.map((item, index) => (
                  <>
                    <div className="d-flex mt-3">
                      <GrLinkNext
                        className="me-3 text-primary"
                        style={{ height: "40px", width: "30px" }}
                      />
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <p className="ms-5 mt-2">{item.description}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area One */}
      {/* <ServiceAreaGroupTwo /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
