import Products from "../../constant/products.js";
import Carousel from "../Carousel.jsx";

/**
 * For Content Section for Landing Page
 * @returns {JSX.Element} return content component
 * @constructor
 */
export default function Content() {
  const products = new Products().recommendations().map((product) => {
    return {
      name: product.name,
      description: product.description,
      href: `${window.location}product/${product.id}`,
      img: product.img,
      categories: product.categories,
    };
  });
  return (
    <div className="bg-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="mb-4 text-2xl font-bold text-base-content">
            Products and Service
          </h2>
          <Carousel products={products}></Carousel>
        </div>
      </div>
    </div>
  );
}
