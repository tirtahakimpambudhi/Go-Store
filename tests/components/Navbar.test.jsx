import { faker } from "@faker-js/faker";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import Navbar from "../../src/components/Navbar.jsx";

// Mock brand component
const Brand = () => <img src={faker.image.url()} alt="Brand Logo" />;

// Utility function to resize window
const resizeWindow = (width) => {
  act(() => {
    window.innerWidth = width;
    fireEvent(window, new Event("resize"));
  });
};

describe("Navbar Component", () => {
  const mockNavigations = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const mockSideNavigations = [
    <button key="1">Login</button>,
    <button key="2">Sign Up</button>,
  ];

  // Clean up after each test
  afterEach(cleanup);

  const setupNavbar = (
    navigations = mockNavigations,
    sideNavigations = mockSideNavigations
  ) => {
    render(
      <Navbar
        brand={<Brand />}
        navigations={navigations}
        sideNavigations={sideNavigations}
      />
    );
  };

  it("should render Navbar with brand and navigation links", () => {
    setupNavbar();

    // Check if the brand is rendered
    expect(screen.queryAllByAltText("Brand Logo").length).toEqual(2);

    // Check if navigation links are rendered
    mockNavigations.forEach((nav) => {
      const navLink = screen.queryAllByText(nav.name);
      navLink.forEach((link) => {
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", nav.href);
      });
    });

    // Check if side navigations are rendered
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("should display hamburger menu only on small screens", () => {
    resizeWindow(768); // Set screen size to below lg breakpoint
    setupNavbar();

    // Check if hamburger button is visible on small screen
    expect(screen.getByLabelText("open sidebar")).toBeInTheDocument();

    resizeWindow(1280); // Set screen size to above lg breakpoint
    setupNavbar();

    // Check if hamburger button is not visible on large screens
    expect(screen.queryByLabelText("open sidebar")).not.toBeInTheDocument();
  });

  it("should display sidebar menu on mobile when the hamburger button is clicked", () => {
    resizeWindow(768); // Set screen size to below lg breakpoint
    setupNavbar();

    // Open the sidebar menu by clicking the hamburger button
    fireEvent.click(screen.getByLabelText("open sidebar"));

    // Check if the sidebar menu is displayed
    mockNavigations.forEach((nav) => {
      const sidebarNavLink = screen.getAllByText(nav.name);
      expect(sidebarNavLink[1]).toBeInTheDocument(); // Verify sidebar link, as two links are rendered (navbar and sidebar)
    });

    // Check if the brand is displayed in the sidebar
    expect(screen.getByAltText("Brand Logo")).toBeInTheDocument();
  });

  it("should hide sidebar menu on mobile when the close button is clicked", () => {
    resizeWindow(768); // Set screen size to below lg breakpoint
    setupNavbar();

    // Open the sidebar menu
    fireEvent.click(screen.getByLabelText("open sidebar"));

    // Close the sidebar menu by clicking the drawer overlay
    fireEvent.click(screen.getByLabelText("close sidebar"));

    // Verify the sidebar is hidden
    expect(screen.queryByLabelText("close sidebar")).not.toBeVisible();
  });

  it("should render empty navigation if navigations prop is empty", () => {
    setupNavbar([]); // Pass empty navigation array

    // Check that no navigation links are present
    mockNavigations.forEach((nav) => {
      expect(screen.queryByText(nav.name)).not.toBeInTheDocument();
    });
  });

  it("should render empty side navigation if sideNavigations prop is empty", () => {
    setupNavbar(mockNavigations, []); // Pass empty side navigation array

    // Check that no side navigation buttons are present
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign Up")).not.toBeInTheDocument();
  });
});
