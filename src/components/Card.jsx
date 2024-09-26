import PropTypes from "prop-types";

function Card({ name, imageSrc, imageAlt, href, description, categories }) {
  return (
    <div className="group relative w-full h-full flex flex-col">
      <div className="relative h-3/4 w-full overflow-hidden rounded-lg bg-base-content group-hover:opacity-75">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-base-content">
          <a href={href}>
            <span className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="text-base font-semibold text-base-neutral">
          {description}
        </p>
      </div>
      {categories.length > 0 && (
        <div className="flex space-x-2 ml-auto p-2">
          {categories.map((category, index) => (
            <div key={index} className="badge badge-outline">
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
