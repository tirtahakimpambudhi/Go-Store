import { cloneElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ModeButton from "../components/ModeButton.jsx";

const navigations = [
  {
    name: "Home",
    href: `/`,
  },
  {
    name: "About",
    href: `#about`,
  },
  {
    name: "Feature",
    href: `#feature`,
  },
  {
    name: "Contact",
    href: `#contact`,
  },
];

const sideNavigations = [
  // eslint-disable-next-line react/jsx-key
  <a
    className="text-center text-2xl"
    href="https://github.com/tirtahakimpambudhi"
    target="_blank"
  >
    <FaGithub></FaGithub>
  </a>,
  // eslint-disable-next-line react/jsx-key
  <a
    className="text-center text-2xl"
    href="https://id.linkedin.com/"
    target="_blank"
  >
    <FaLinkedin></FaLinkedin>
  </a>,
  // eslint-disable-next-line react/jsx-key
  <ModeButton></ModeButton>,
].map((nav, index) => cloneElement(nav, { key: index.toString() }));

export { sideNavigations, navigations };
