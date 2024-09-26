import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import ModeButton from "../../src/components/ModeButton";

describe("Testing Component ModeButton", () => {
  beforeEach(() => {
    // Reset the body and html attributes before each test
    document.body.setAttribute("class", "");
    document.documentElement.setAttribute("data-theme", "");
  });

  /**
   * For render mode (dark,light) button
   */
  const renderButton = () => {
    render(<ModeButton />);
  };

  /**
   * For assert actual theme in DOM
   * @param theme {String} expected theme in body className and html data-theme
   */
  const assertTheme = (theme = "dark") => {
    expect(theme).toBe(document.body.className);
    expect(theme).toBe(document.documentElement.getAttribute("data-theme"));
  };

  /**
   * For assert actual icon in DOM
   * @param testId {String} value data-testid in icon for get icon
   */
  const assertIcon = (testId) => {
    const sunIcon = screen.getByTestId(testId);
    expect(sunIcon).toBeInTheDocument();
  };

  it("renders with the initial dark theme", () => {
    renderButton();
    assertTheme();
    assertIcon("sunIcon");
  });

  it("toggles to light theme on click", () => {
    renderButton();

    // Click to toggle theme
    const input = document.body.querySelector("input[type='checkbox']");
    fireEvent.click(input);

    // Verify that the theme has changed to light
    assertTheme("light");

    assertIcon("moonIcon");
  });

  it("toggles back to dark theme on subsequent click", () => {
    renderButton();

    // Click to toggle theme
    const input = document.body.querySelector("input[type='checkbox']");
    fireEvent.click(input);
    fireEvent.click(input);

    // Verify that the theme has changed to light
    assertTheme("dark");

    assertIcon("sunIcon");
  });
});
