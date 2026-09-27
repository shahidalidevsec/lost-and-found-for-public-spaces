import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= COMMUNITY CTA ================= */}
      <section className="bg-red-700 text-white py-3">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Together, we can help things find
            <span className="block">
              their way home.
            </span>
          </h2>

          <p className="mt-4 text-lg text-red-100">
            Your small effort could help a neighbour recover
            something important.
          </p>

          {/* 
            IMPORTANT:
            Change "/report-item" only if your actual report page
            route is different.
          */}
          <Link
            to="/report-item"
            className="
              inline-flex
              items-center
              hover:text-green-600
              justify-center
              mt-4
              px-8
              py-4
              bg-white
              text-red-700
              font-bold
              
              rounded-xl
              hover:bg-gray-100
              transition
              duration-200
            "
          >
            Report an Item
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#050914] mt-1 text-gray-300">

        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-6 py-4">

          {/* Main Menu */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-4">
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
          <div className="border-t border-gray-700 mt-5 pt-3"></div>


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


            {/* Other Locations */}
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
        <div className="border-t border-gray-700">

          <div className="max-w-6xl mx-auto px-6 py-2 text-center text-sm text-gray-500">

            © {new Date().getFullYear()} Lost & Found.
            All rights reserved.

          </div>

        </div>


        {/* Scroll To Top */}
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
            cursor-pointer
          "
        >
          ▲
        </button>

      </footer>
    </>
  );
}

export default Footer;