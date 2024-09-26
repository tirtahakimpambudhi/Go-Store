import Carousel from "../Carousel.jsx";

/**
 * For Content Section for Landing Page
 * @returns {JSX.Element} return content component
 * @constructor
 */
export default function Content() {
  return (
    <div className="bg-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-base-content mb-4">
            Collections
          </h2>
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
}
