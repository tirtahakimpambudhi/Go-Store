import PropTypes from "prop-types";

import { companyInfo as defaultCompanyInfo } from "../../constant/contacts.jsx";
import { getArrayOrDefault } from "../../utils/array.js";

/**
 * For Contact Component in Landing Page
 * @param companyInfo {Array.<{title : String,icon : String}>} use for setting company info in contact us component
 * @returns {JSX.Element} return contact component
 * @constructor
 */
export default function Contact({ companyInfo }) {
  try {
    companyInfo = getArrayOrDefault(companyInfo, defaultCompanyInfo);
  } catch (error) {
    console.error(error.toString());
    companyInfo = [];
  }
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-2">
          <div className="mb-10 flex items-center lg:mb-0">
            <div className="">
              <h4 className="mb-4 text-center text-base font-medium leading-6 text-indigo-600 lg:text-left">
                Contact Us
              </h4>
              <h2 className="font-manrope mb-9 text-center text-4xl font-semibold leading-10 text-gray-900 lg:text-left">
                Reach Out To Us
              </h2>
              <form action="" className="flex flex-col space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-lg input-bordered w-full max-w-xs"
                />
              </form>
            </div>
          </div>
          <div className="flex h-[600px] w-full items-center justify-center bg-[url('https://pagedone.io/asset/uploads/1696245837.png')] bg-cover bg-no-repeat lg:max-w-xl">
            <div className="">
              <div className="h-auto w-auto rounded-lg bg-base-200 p-4 shadow-2xl lg:w-96 lg:p-6">
                {companyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="company-info mb-6 flex items-center"
                  >
                    {info.icon}
                    <h5 className="ml-5 text-base font-normal leading-6 text-base-content">
                      {info.title}
                    </h5>
                  </div>
                ))}
                <div className="grid grid-flow-col items-center justify-center gap-4 border-t border-gray-100 pt-6">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  companyInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};
