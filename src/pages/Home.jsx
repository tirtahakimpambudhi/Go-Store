import Brand from "../components/Brand.jsx";
import About from "../components/sections/About.jsx";
import Contact from "../components/sections/Contact.jsx";
import Content from "../components/sections/Content.jsx";
import Feature from "../components/sections/Feature.jsx";
import Footer from "../components/sections/Footer.jsx";
import Hero from "../components/sections/Hero.jsx";
import { links, stats } from "../constant/abouts.js";
import { companyInfo } from "../constant/contacts.jsx";
import { features } from "../constant/features.jsx";
import { companies, services, socialMedias } from "../constant/footers.jsx";
import { navigations, sideNavigations } from "../constant/navbar.jsx";

export default function Home() {
  const navProps = {
    Brand: <Brand imgSrc={"/images/go-store-logo.png"} />,
    navigations: navigations,
    sideNavigations: sideNavigations,
  };
  return (
    <div className="container-fluid">
      <Hero imageSrc={"/images/hero-1.jpg"} navProps={navProps}></Hero>
      <Feature features={features}></Feature>
      <About stats={stats} links={links}></About>
      <Content></Content>
      <Contact companyInfo={companyInfo}></Contact>
      <Footer
        services={services}
        companies={companies}
        socialMedias={socialMedias}
      ></Footer>
    </div>
  );
}
