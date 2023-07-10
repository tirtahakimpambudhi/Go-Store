import PropTypes from "prop-types";

import Card from "./Card.jsx";

/**
 * For Carousel Component
 * @param products list products
 * @returns {JSX.Element} return carousel component
 * @constructor
 */
export default function Carousel({ products }) {
  return (
    <div className="carousel carousel-center box-border w-full space-x-4 rounded-box bg-base-100 p-4">
      {products?.map((data, index) => (
        <div key={index} className="carousel-item h-96 w-96 bg-transparent">
          <Card
            className="h-full w-full"
            name={data.name}
            description={data.description}
            href={data.href}
            imageSrc={data.img}
            imageAlt={data.name}
            categories={data.categories ?? []}
          />
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired
  ).isRequired,
};
