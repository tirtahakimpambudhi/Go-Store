import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const companyInfo = [
  {
    title: "+62 838 7629 0280",
    icon: (
      <a
        className="text-center text-2xl"
        href="https://wa.me/6283876290280"
        target="_blank"
      >
        <FaWhatsapp></FaWhatsapp>
      </a>
    ),
  },
  {
    title: "examplecompany@gmail.com",
    icon: (
      <a
        className="text-center text-2xl"
        href="mailto:examplecompany@gmail.com"
        target="_blank"
      >
        <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
      </a>
    ),
  },
  {
    title: "USA, New York",
    icon: (
      <a
        className="text-center text-2xl"
        href="https://maps.app.goo.gl/aDWg6xdTuEtEWqoj6"
        target="_blank"
      >
        <FaMapMarkerAlt></FaMapMarkerAlt>
      </a>
    ),
  },
];
