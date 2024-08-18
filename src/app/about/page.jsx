import AboutAreaOne from "@/components/AboutAreaOne";
import Breadcrumb from "@/components/Breadcrumb";
import ContactAreaOne from "@/components/ContactAreaOne";
import CounterAreaOne from "@/components/CounterAreaOne";
import FaqAreaOne from "@/components/FaqAreaOne";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";
import ServiceAreaOne from "@/components/ServiceAreaOne";
import TeamAreaOne from "@/components/TeamAreaOne";
import WorkProcessOne from "@/components/WorkProcessOne";

export const metadata = {
  title: "About || Intware Technology - IT Solutions",
  description:
    "Intware Technology provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const cardData = [
  {
    title: "Agility",
    description:
      "Embracing change and swiftly adapting to the dynamic demands of the market is our formula for success. With a customer-centric approach, our tech solutions are built on robust, relevant, and effective.",
    image: "assets/img/agility.svg",
  },
  {
    title: "Accountability",
    description:
      "We take full responsibility for our and their outcomes, both as individuals and as a team. This commitment to accountability sets a benchmark for reliability and excellence, ensuring dependable success.",
    image: "assets/img/account.svg",
  },
  {
    title: "Innovation",
    description:
      "At the core of Intware Technology lies a passion for groundbreaking innovation and discovery. Our team continuously challenges the status quo, striving for endless progress.",
    image: "assets/img/innovation.svg",
  },
  {
    title: "Customer First",
    description:
      "We actively engage with our clients to understand their unique needs and deliver tailor-made solutions that exceed expectations. From prioritizing customer satisfaction to fostering long-term partnerships.",
    image: "assets/img/customer.svg",
  },
  {
    title: "Transparency",
    description:
      "Our business practices are rooted in unwavering honesty, transparency, and high ethical standards. This commitment ensures that every solution we deliver is immaculate, precise, and trustworthy.",
    image: "assets/img/specs.svg",
  },
];

const advantageSection = [
  {
    title: "Cost-Effective Solutions",
    description:
      "We understand the importance of maximizing your ROI, which is why we offer cost-effective solutions that deliver maximum value for your money. Partnering with us will help you get the most bang for your buck without sacrificing quality or performance.",
  },
  {
    title: "Continuous Support",
    description:
      "Our commitment to your success doesn't end with project delivery. We offer ongoing support and maintenance services to ensure that your solutions remain secure, up-to-date, and optimized for peak performance long after they're implemented. ",
  },
  {
    title: "Accelerated Time-to-Value",
    description:
      "By reducing time to market, we help you realize value from your investment sooner. Whether you're launching a new product, entering a new market, or upgrading an existing solution, we ensure that you can meet your business objectives faster.",
  },
];

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Us"} textHeading={"About"} />

      {/* About Area One */}
      <AboutAreaOne />
      <div className="container">
        <div className="text-center h2 p-4">
          Our <span className="text-primary">Guiding</span> Principles
        </div>
        <div className="row mt-4">
          {cardData.map((item, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="hover-cards">
                    <div className="text-center">
                      <div className="">
                        <img
                          src={item.image}
                          style={{ height: "70px", width: "70px" }}
                        />
                      </div>
                      <div className="h4 text-dark mt-4">{item.title}</div>
                    </div>
                    <div className="details mt-5">
                      <p
                        style={{
                          height: "250px",
                          overflowY: "auto",
                          scrollbar: "none",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="text-center h2 p-4">
          Leverage the{" "}
          <span className="text-primary">Intware Technology Advantage</span>
        </div>
        <div className="container single-service-inner">
          {advantageSection.map((item, index) => (
            <div
              className="row p-5"
              key={index}
              style={{ borderBottom: "1px solid #95BEE4" }}
            >
              <div className="col-lg-6 col-sm-12">
                <h4>{item.title}</h4>
              </div>
              <div className="col-lg-6 col-sm-12">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ServiceAreaOne */}
      {/* <ServiceAreaOne /> */}

      {/* FAQ Area One */}
      {/* <FaqAreaOne /> */}

      {/* Team Area One */}
      {/* <TeamAreaOne /> */}

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <ContactAreaOne />

      {/* Work Process One */}
      {/* <WorkProcessOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
