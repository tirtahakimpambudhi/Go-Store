import { faker } from "@faker-js/faker";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import Brand from "../../src/components/Brand.jsx";

describe("Unit Testing Component Brand", () => {
  afterEach(cleanup);

  const renderBrand = (imgSrc) => {
    render(<Brand imgSrc={imgSrc}></Brand>);
  };

  const assertImg = (imgSrc) => {
    const brand = document.body.querySelector(`img[src="${imgSrc}"]`);
    expect(brand).toBeInTheDocument();
    expect(imgSrc).toEqual(brand.getAttribute("src"));
    expect("Go Store Logo").toEqual(brand.getAttribute("alt"));
  };

  it("should contains src and alt", () => {
    const imageSrc = faker.image.url();
    renderBrand(imageSrc);
    assertImg(imageSrc);
  });

  it("should contains empty src", () => {
    renderBrand("");
    assertImg("");
  });
});
