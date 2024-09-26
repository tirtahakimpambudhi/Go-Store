import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const socialMedias = [
  {
    href: "#",
    icon: (
      <div className="text-center text-2xl">
        <FaWhatsapp></FaWhatsapp>
      </div>
    ),
  },
  {
    href: "#",
    icon: (
      <div className="text-center text-2xl">
        <FaFacebook></FaFacebook>
      </div>
    ),
  },
  {
    href: "#",
    icon: (
      <div className="text-center text-2xl">
        <FaLinkedin></FaLinkedin>
      </div>
    ),
  },
  {
    href: "#",
    icon: (
      <div className="text-center text-2xl">
        <FaGithub></FaGithub>
      </div>
    ),
  },
];

const services = ["Branding", "Design", "Marketing", "Advertisement"];
const companies = [
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Jobs",
    href: "#",
  },
];

export { services, socialMedias, companies };
