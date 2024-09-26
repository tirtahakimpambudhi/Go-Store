import PropTypes from "prop-types";
import { getArrayOrDefault } from "../../utils/array.js";
import {
  services as defaultServices,
  companies as defaultCompanies,
  socialMedias as defaultSosMed,
} from "../../constant/footers.jsx";
/**
 * For Footer Component
 * @param services {Array.<String>} list a service provide by company
 * @param companies {Array.<{ name: String, href: String}>} list a navigation provide company
 * @param socialMedias {Array.<{ href: String, icon: Element }>} list social media company
 * @returns {JSX.Element} return footer component
 * @constructor
 */
export default function Footer({ services, companies, socialMedias }) {
  try {
    services = getArrayOrDefault(services, defaultServices);
    companies = getArrayOrDefault(companies, defaultCompanies);
    socialMedias = getArrayOrDefault(socialMedias, defaultSosMed);
  } catch (error) {
    console.error(error.toString());
    services = !(services instanceof Error) ? services : [];
    companies = !(companies instanceof Error) ? companies : [];
    socialMedias = !(socialMedias instanceof Error) ? socialMedias : [];
  }
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        {services.map((service, index) => (
          <a key={index} className="link link-hover">
            {service}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        {companies.map((company, index) => (
          <a key={index} href={company.href} className="link link-hover">
            {company.name}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {socialMedias.map((socialMedia, index) => (
            <a key={index} href={socialMedia.href}>
              {socialMedia.icon}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
}

Footer.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  socialMedias: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ),
};
