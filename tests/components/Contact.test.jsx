import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../../src/components/sections/Contact.jsx";
import { companyInfo as companyInfos } from "../../src/constant/contacts.jsx";

describe("Testing Component Contact", () => {
  /**
   * For render contact component
   * @param companyInfo {Array.<{title : String,icon : String}>} use for setting value company info in contact
   */
  const renderContact = (companyInfo) => {
    render(<Contact companyInfo={companyInfo} />);
  };

  /**
   * For assert contact form and title
   */
  const assertContact = () => {
    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
  };

  /**
   *
   * @param expectedCount {Number} use for expect value count from company info
   */
  const assertCompanyInfo = (expectedCount) => {
    const actualCompanyInfo = screen.queryAllByText((content, element) =>
      element.classList.contains("company-info")
    );
    expect(expectedCount).toEqual(actualCompanyInfo.length);
  };

  it("should contains all company info with argument array not default", () => {
    renderContact(companyInfos);
    assertContact();
    assertCompanyInfo(companyInfos.length);
  });

  it("should contains all company info with argument with default", () => {
    renderContact([]);
    assertContact();
    assertCompanyInfo(companyInfos.length);
  });

  it("should contains zero company info because error argument", () => {
    renderContact("invalid-argument");
    assertContact();
    assertCompanyInfo(0);
  });
});
