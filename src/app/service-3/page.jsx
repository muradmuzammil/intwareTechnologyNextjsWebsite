import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroupThree from "@/components/ServiceAreaGroupThree";
import { GrLinkNext } from "react-icons/gr";

export const metadata = {
  title: "Software-App-Dev | Intware Technology - IT Solutions",
  description:
    "Intware Technology provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  const offeredServices = [
    {
      title: "Information Architecture",
      description:
        "We organize and structure your content to improve navigation and usability. Our approach ensures that users can easily find information easily and understand the layout.",
    },
    {
      title: "User Research and Analysis",
      description:
        "We perform user research to understand your audience’s needs and behaviors, guiding design decisions to enhance satisfaction and meet user expectations.",
    },
    {
      title: "Wireframing and Prototyping",
      description:
        "We create wireframes and interactive prototypes to visualize and test designs early, allowing for feedback and adjustments to ensure usability and functionality.",
    },
    {
      title: "UI Design",
      description:
        "Our UI design focuses on creating visually appealing and easy-to-navigate interfaces, combining aesthetics with functionality to improve user interaction.",
    },
    {
      title: "UX Design",
      description:
        "We design user experiences that are seamless and engaging, streamlining workflows and interactions to enhance user satisfaction and reduce friction.",
    },
    {
      title: "Responsive Design",
      description:
        "We ensure your product looks and works great on any device or screen size, providing a consistent experience across desktops, tablets, and smartphones.",
    },
    {
      title: "Visual Design",
      description:
        "We create compelling visual designs that reflect your brand identity, using color, typography, and imagery to engage users and create a cohesive look.",
    },

    {
      title: "Design System Development",
      description:
        "We develop design systems that maintain consistency across your product, including guidelines and components that streamline the design process.",
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
      <Breadcrumb title={"App Development"} textHeading={"Software"} />
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 col-sm-12">
            <h2>
              Crafting Intuitive
              <span className="text-primary ms-1 me-1">Designs</span>
              that <span className="text-primary ms-1 me-1">Designs</span>
              Technology
            </h2>
            <p>
              At Intware Technology, we understand that great design is more
              than just aesthetics; it's about creating a meaningful connection
              between users and technology. At the heart of our design
              philosophy is a deep understanding of the end-user.
            </p>
            <p>
              Our adept team of software developers epitomizes intuition,
              transparency, expertise, and skill. Your vision, meticulously
              coded and brought to life — that's the Intware promise. We immerse
              ourselves in your audience's needs, behaviors, and preferences to
              create interfaces that are not only beautiful but also highly
              intuitive.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="position-relative">
              <div className="position-absolute service-page-animation top_image_bounce">
                <img src="assets/img/banner/2.png" />
              </div>
              <img
                src="assets/img/connect.svg"
                alt="img"
                height={"92%"}
                width={"75%"}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12 ">
              <div className="position-relative">
                <div className="position-absolute service-page-animation-2 top_image_bounce">
                  <img src="assets/img/banner/2.png" />
                </div>
                <img
                  src="assets/img/orientedDesign.svg"
                  alt="img"
                  height={"92%"}
                  width={"75%"}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2>
                Transforming
                <span className="text-primary ms-1">
                  Digital Presence with Goal-
                </span>{" "}
                Oriented Design
              </h2>
              <p>
                Whether you're a startup looking to enter a market or an
                established brand aiming to revitalize your digital presence, we
                are here to collaborate, innovate, and transform.
              </p>
              <p>
                Our designs are not just visually pleasing; they are crafted to
                achieve specific business objectives. We measure success through
                tangible results, be it increased user engagement, higher
                conversions, or improved brand perception.
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
                Innovative
                <span className="text-primary ms-1 me-1">
                  Software Applications and Design
                </span>
                For exceptional User Experience
              </h2>
              <p>
                Our expert team crafts tailored software designed to optimize
                your operations and drive growth, ensuring your business stays
                ahead in the competitive landscape. We create visually striking
                and user-friendly interfaces that enhance navigation and
                engagement, delivering captivating designs that elevate your
                brand’s user experience.
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
      {/* ServiceAreaGroupThree */}
      {/* <ServiceAreaGroupThree /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
