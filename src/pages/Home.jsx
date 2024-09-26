import Hero from "../components/sections/Hero.jsx";
import Feature from "../components/sections/Feature.jsx";
import About from "../components/sections/About.jsx";
import Content from "../components/sections/Content.jsx";
import Footer from "../components/sections/Footer.jsx";
import Contact from "../components/sections/Contact.jsx";
import { companyInfo } from "../constant/contacts.jsx";
import { features } from "../constant/features.jsx";
import { links, stats } from "../constant/abouts.js";
import { services, companies, socialMedias } from "../constant/footers.jsx";

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero imageSrc={"/images/hero.jpg"}></Hero>
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
