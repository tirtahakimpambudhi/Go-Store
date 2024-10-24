import PropTypes from "prop-types";

/**
 * Brand Or Logo Component
 * @param imgSrc {String}
 * @returns {JSX.Element}
 * @constructor
 */
export default function Brand({ imgSrc }) {
  return (
    <img
      src={imgSrc}
      alt="Go Store Logo"
      className="h-14 w-14 rounded-full border-2 border-solid border-gray-600 bg-gray-300 shadow-2xl lg:h-[72px] lg:w-[72px] dark:border-gray-300 dark:bg-gray-400"
    />
  );
}

Brand.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
