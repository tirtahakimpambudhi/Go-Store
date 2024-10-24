import { faker } from "@faker-js/faker";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import Carousel from "../../src/components/Carousel.jsx";
import Products from "../../src/constant/products.js";

describe("Unit Testing Carousel Component", () => {
  const products = new Products();
  const categories = [];

  beforeEach(() => {
    for (let i = 0; i < faker.number.int({ min: 1, max: 4 }); i++) {
      categories.push(faker.food.ethnicCategory());
    }
    for (let i = 0; i < faker.number.int({ min: 5, max: 50 }); i++) {
      const product = {
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        img: faker.image.url({ width: 300, height: 300 }),
        purchased: faker.number.int({ min: 0, max: 100 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        categories,
      };
      products.addProduct(product);
    }
  });
  afterEach(() => {
    products.datas = [];
    categories.length = 0;
    cleanup();
  });

  const renderCarousel = () => {
    const value = products.recommendations().map((product) => {
      return {
        name: product.name,
        description: product.description,
        href: `${window.location.origin}/product/${product.id}`,
        img: product.img,
        categories: product.categories,
      };
    });
    render(<Carousel products={value} />);
  };

  const assertCarouselItem = (expectedCount) => {
    const items = screen.queryAllByText((content, element) =>
      element.classList.contains("carousel-item")
    );
    expect(expectedCount).toEqual(items.length);
  };

  it("should contains all recommendations products", () => {
    renderCarousel();
    assertCarouselItem(products.recommendations().length);
  });

  it("should not contains categories in carousel item", () => {
    products.datas.forEach((data) => {
      data.categories.length = 0;
    });
    renderCarousel();
    assertCarouselItem(products.recommendations().length);
    const badges = screen.queryAllByText((content, element) =>
      element.classList.contains("badge")
    );
    expect(badges.length).toEqual(0);
  });

  it("should not contains carousel item", () => {
    products.datas.length = [];
    renderCarousel();
    assertCarouselItem(0);
  });
});
