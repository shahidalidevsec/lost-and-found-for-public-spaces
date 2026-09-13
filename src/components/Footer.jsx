
import { Link } from "react-router-dom";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#36363d] text-gray-300 mt-16">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-9">

        {/* Main Menu */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-5">
            MAIN MENU
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3">

            {/* Column 1 */}
            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About us
              </Link>

              <Link
                to="/business"
                className="hover:text-white transition"
              >
                Business
              </Link>

            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">

              <Link
                to="/jobs"
                className="hover:text-white transition"
              >
                Jobs
              </Link>

              <Link
                to="/help"
                className="hover:text-white transition"
              >
                Lost & Found Help
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact us
              </Link>

            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">

              <Link
                to="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy  
              </Link>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-7"></div>


        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Head Office */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              HEAD OFFICE
            </h3>

            <div className="leading-6 text-gray-400">

              <p>Lost & Found India</p>
              <p>Mumbai</p>
              <p>Maharashtra</p>
              <p>India</p>

            </div>

          </div>


          {/* Other Offices */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              OTHER LOCATIONS
            </h3>

            <div className="leading-6 text-gray-400">

              <p>Lost & Found Mumbai</p>
              <p>Lost & Found Maharashtra</p>

            </div>

          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-gray-600">

        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Lost & Found. All rights reserved.

        </div>

      </div>


      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          fixed
          right-5
          bottom-5
          w-12
          h-12
          rounded-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          flex
          items-center
          justify-center
          text-xl
          shadow-lg
          transition
          duration-200
        "
      >
        ▲
      </button>

    </footer>
  );
}

export default Footer;