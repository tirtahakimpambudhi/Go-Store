import PropTypes from "prop-types";

/**
 *  For Navigation Bar Component
 * @param brand {Element} use for brand or logo in navbar
 * @param navigations {Array.<{name: String, href: String}>} use for navigation link in navbar
 * @param sideNavigations {Array.<Element>} use for side navigation link in navbar
 * @returns {JSX.Element} return Navbar Component
 * @constructor
 */
export default function Navbar({ brand, navigations, sideNavigations }) {
  return (
    <div className="drawer sticky top-0 z-30 bg-base-100 bg-opacity-90 text-base-content shadow-sm backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-circle btn-ghost swap swap-rotate"
            >
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <div className="brand mx-2 flex-1 px-2">
            <div className="brand hidden p-4 lg:block">{brand}</div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal space-x-4">
              {/* Navbar menu content here */}
              {navigations?.map((nav, index) => (
                <li key={index}>
                  <a href={nav.href}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu menu-horizontal space-x-2">
            {sideNavigations?.map((nav) => nav)}
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <div className="brand mb-2 p-2 lg:hidden">{brand}</div>
          {navigations?.map((nav, index) => (
            <li key={index}>
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  brand: PropTypes.element.isRequired,
  navigations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  sideNavigations: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
