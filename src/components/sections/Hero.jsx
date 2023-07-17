import PropTypes from "prop-types";

import Navbar from "../Navbar.jsx";

/**
 * For Hero Component
 * @param imageSrc {String} for image source can be used hero
 * @param navProps {{ Brand: Element, navigations: Array.<{ name: String, href: String}>, sideNavigations: Array.<Element> }}
 * @returns {JSX.Element} return hero component
 * @constructor
 */
export default function Hero({ imageSrc, navProps }) {
  return (
    <>
      <Navbar
        brand={navProps.Brand}
        navigations={navProps.navigations}
        sideNavigations={navProps.sideNavigations}
      ></Navbar>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-gr mb-5 text-3xl font-bold [text-shadow:_0_4px_8px_rgb(55_65_81_/_0.8)] dark:text-gray-300 dark:[text-shadow:_0_4px_8px_rgb(55_65_81_/_0.8)]">
              Improve Your Business with a Professional Website
            </h1>
            <p className="mb-5 text-gray-300 [text-shadow:_0_4px_8px_rgb(75_85_99_/_0.8)] dark:text-gray-300 dark:[text-shadow:_0_4px_8px_rgb(55_65_81_/_0.8)]">
              Get solutions to your business needs with a website. From
              e-commerce to custom portfolios, we are ready to help you thrive
              in the digital era.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  navProps: PropTypes.shape({
    Brand: PropTypes.element.isRequired,
    navigations: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    sideNavigations: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  }).isRequired,
};
