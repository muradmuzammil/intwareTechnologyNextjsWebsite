import Breadcrumb from "@/components/Breadcrumb";
import ContactMain from "@/components/ContactMain";
import FooterOne from "@/components/FooterOne";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Contact || Intware Technology",
  description:
    "Intware Technology provide you to build the best agency, app, business, digital, it services, it solutions, network solution, startup, technology, technology company, technology service template.",
};

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Us"} textHeading={"Contact"} />

      {/* Contact Main */}
      <ContactMain />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default page;
