import Navigation from "../Navigation.jsx";
import PropTypes from "prop-types";

/**
 * For Hero Component
 * @param imageSrc {String} for image source can be used hero
 * @returns {JSX.Element} return hero component
 * @constructor
 */
export default function Hero({ imageSrc }) {
  return (
    <>
      <Navigation></Navigation>
      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 dark:text-gray-300 dark:[text-shadow:_0_4px_8px_rgb(55_65_81_/_0.8)] text-neutral-950 [text-shadow:_0_4px_8px_rgb(229_231_235_/_0.8)]  text-5xl font-bold">
              Hello there
            </h1>
            <p className="mb-5 dark:text-gray-300 dark:[text-shadow:_0_4px_8px_rgb(55_65_81_/_0.8)] text-neutral-950 [text-shadow:_0_4px_8px_rgb(229_231_235_/_0.8)]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
};
