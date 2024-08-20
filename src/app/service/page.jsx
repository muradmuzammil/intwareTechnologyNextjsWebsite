import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import PricingAreaOne from "@/components/PricingAreaOne";
import ServiceAreaGroup from "@/components/ServiceAreaGroup";
import { GrLinkNext } from "react-icons/gr";

export const metadata = {
  title: "Service | Intware Technology - IT Solutions",
  description:
    "Intware Technology provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const offeredServices = [
  {
    title: "Custom App Development",
    description:
      "Our custom app development services deliver tailored solutions that meet your unique business needs. From initial concept to deployment, we create bespoke applications designed to stand out and align with your specific goals, ensuring a personalized user experience.",
  },
  {
    title: "Native App Development",
    description:
      "By leveraging the latest tools and technologies, we build high-performance applications for iOS and Android that fully utilize each platform’s capabilities, delivering a seamless and optimized user experience.",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Utilizing advanced frameworks like Flutter and React Native, we create versatile apps that deliver a consistent experience across both iOS and Android platforms from a single codebase, streamlining development and maintenance.",
  },
  {
    title: "IoT App Development",
    description:
      "We create IoT apps that connect and manage various Internet of Things devices. Our solutions enable seamless device communication, data collection, and actionable insights, ensuring secure and efficient IoT integrations.",
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "Our in-house creative geniuses craft intuitive and engaging interfaces. We design visually appealing and user-friendly apps that enhance user satisfaction and provide a smooth experience across all devices.",
  },
  {
    title: "Progressive Web App (PWA)",
    description:
      "Combining the advantages of web and mobile applications, our PWAs offer fast, reliable, and engaging experiences with offline capabilities and push notifications, optimized for performance across diverse devices.",
  },
  {
    title: "Mobile App Modernization",
    description:
      "Refreshing and upgrading legacy applications, we enhance outdated apps with modern features and improved performance, ensuring they meet current standards and continue to serve your needs effectively.",
  },
  {
    title: "Mobile Game Development",
    description:
      "We build immersive mobile games with captivating graphics and smooth gameplay. Our development process focuses on creating engaging and high-quality games that capture and retain players' interest.",
  },
  {
    title: "E-Commerce App Development",
    description:
      "We design and develop e-commerce apps with features like secure payments and product catalogs. Our solutions are optimized for a seamless and enjoyable shopping experience, driving sales and enhancing user engagement.",
  },
  {
    title: "On-demand App Development",
    description:
      "Our on-demand app development services create apps for instant services, such as ride-sharing or food delivery. We build solutions with real-time interactions, location-based services, and efficient payment integrations to meet user needs swiftly.",
  },
  {
    title: "Hire Expert Mobile App Programmers",
    description:
      "Partner with our team of expert mobile app programmers to craft high-performance, user-centric mobile applications tailored to your unique requirements. With extensive technical experience, we ensure that your app is innovative, reliable, and perfectly aligned with your business goals.",
  },
];

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"App Development"} textHeading={"Mobile"} />

      {/* Service Area One */}
      {/* <ServiceAreaGroup /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 col-sm-12">
            <h2>
              Crafting Scalable Cross Platform{" "}
              <span className="text-primary">Mobile Apps</span>
            </h2>
            <p>
              Welcome to Intware Technology, where we redefine the digital
              landscape by crafting robust and scalable cross-platform mobile
              applications that set new standards in the era of mobile
              innovation. Our expert team of mobile application developers is
              dedicated to elevating the digital experience for users worldwide.
            </p>
            <p>
              As an innovative mobile app and web development company, we
              specialize in delivering natively compiled mobile applications
              that not only win the hearts of your target audience but also
              drive substantial revenue growth for your business.
            </p>
          </div>
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="position-relative">
              <div className="position-absolute service-page-animation top_image_bounce">
                <img src="assets/img/banner/2.png" />
              </div>
              <img
                src="assets/img/mobiledetails-1.svg"
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
              </div>
              <img
                src="assets/img/mobiledetails-2.svg"
                alt="img"
                height={"92%"}
                width={"75%"}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2>
                <span className="text-primary">Driving Revenue</span> In The
                Mobile-First World
              </h2>
              <p>
                Our skilled mobile app developers utilize cutting-edge
                technologies and frameworks, such as Flutter, ensuring that your
                cross-platform applications share a seamless code base without
                compromising on innovation, creativity, or user experience.
              </p>
              <p>
                The result is a comprehensive mobile app solution that goes
                beyond expectations, offering your business the competitive edge
                it deserves.
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
                Custom Mobile App Development Services To Thrive In A{" "}
                <span className="text-primary">Mobile-First World</span>
              </h2>
              <p>
                Get cutting-edge custom app development services from the
                experts of our Top Mobile App Development Company.
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
                      <p className="ms-5 mt-2">
                        Our custom app development services deliver tailored
                        solutions that meet your unique business needs. From
                        initial concept to deployment, we create bespoke
                        applications designed to stand out and align with your
                        specific goals, ensuring a personalized user experience.
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
