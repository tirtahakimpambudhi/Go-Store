import { faker } from "@faker-js/faker";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../../src/components/Card.jsx";

describe("Testing Component Card", () => {
  let card, categories;

  beforeEach(() => {
    categories = [
      faker.food.ethnicCategory(),
      faker.food.ethnicCategory(),
      faker.food.ethnicCategory(),
    ];
    card = {
      name: faker.commerce.productName(),
      imageSrc: faker.image.url(),
      imageAlt: faker.commerce.productName(),
      href: faker.internet.url(),
      description: faker.commerce.productDescription(),
      categories,
    };
  });

  /**
   * For render card component
   * @param categories {Array.<String>} to set value badge category
   */
  const renderCard = (categories) => {
    render(
      <Card
        name={card.name}
        imageSrc={card.imageSrc}
        imageAlt={card.imageAlt}
        href={card.href}
        categories={categories}
        description={card.description}
      />
    );
  };

  /**
   * For assert card content (image,link,description) in DOM
   */
  const assertCardContent = () => {
    const image = screen.getByAltText(card.imageAlt);
    const link = screen.getByText(card.name);
    const description = screen.getByText(card.description);

    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(link).toHaveAttribute("href", card.href);
  };

  /**
   * For assert total badges in DOM
   * @param expectedCount {Number} expected total badge in DOM
   */
  const assertBadgesCount = (expectedCount) => {
    const badges = screen.queryAllByText((content, element) =>
      element.classList.contains("badge")
    );
    expect(badges.length).toEqual(expectedCount);
  };

  it("should contain all component card", () => {
    renderCard(categories);
    assertCardContent();
    assertBadgesCount(categories.length);
  });

  it("should not contain badges when no categories are present", () => {
    categories = [];
    renderCard(categories);
    assertCardContent();
    assertBadgesCount(categories.length);
  });
});
