// function HowToPost() {
//   return (
    
//     <div className="flex flex-3 h-100 pl-18 w-390  border-2 border-gray-500 rounded-3xl  p-10  gap-30 ml-50">
//         <img
//   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3l_YPWq_tk3DyOSTbXHs2u9NxgGRxBPIFaKOoX_udg&s=10"
//   alt="Register"
// />

// <img
//   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqhFn46WHnyh1x1Tfr8U2qWIfZhheUFh7HYA7bspsgQ&s=10"
//   alt="Verify"
// />

// <img
//   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CYTZk7YE-oTQrIAfTa4yTKbJL5kY3Thp3o2t8CGLTg&s=10"
//   alt="Report"
// />
//     </div>
//   );
// }

// export default HowToPost;



function HowToPost() {
  return (
    <section className="bg-white py-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <span className="inline-block px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
            Lost something? Found something?
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our community makes it simple to report lost or found belongings
            and help them get back to their owners.
          </p>

        </div>


        {/* Steps */}
        <div className="relative mt-14">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] border-t-2 border-dashed border-red-200"></div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

            {/* Step 1 */}
            <div className="text-center">

              <div className="relative mx-auto w-24 h-24 flex items-center justify-center bg-red-50 border-4 border-white shadow-lg rounded-full">

                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">

                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>

                </div>

              </div>

              <div className="mt-7">

                <span className="text-sm font-bold text-red-600">
                  STEP 01
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Report an Item
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Tell the community about something you have lost or found.
                  Add the important details so others can recognize it.
                </p>

              </div>

            </div>


            {/* Step 2 */}
            <div className="text-center">

              <div className="relative mx-auto w-24 h-24 flex items-center justify-center bg-red-50 border-4 border-white shadow-lg rounded-full">

                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">

                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                  </svg>

                </div>

              </div>

              <div className="mt-7">

                <span className="text-sm font-bold text-red-600">
                  STEP 02
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Search & Match
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Search through community reports using the item name,
                  location and other available details.
                </p>

              </div>

            </div>


            {/* Step 3 */}
            <div className="text-center">

              <div className="relative mx-auto w-24 h-24 flex items-center justify-center bg-red-50 border-4 border-white shadow-lg rounded-full">

                <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center">

                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

              </div>

              <div className="mt-7">

                <span className="text-sm font-bold text-red-600">
                  STEP 03
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Reconnect
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Once you find a possible match, connect safely and help
                  return the belonging to its rightful owner.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom Safety Card */}
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">

          <div className="flex flex-col md:flex-row items-center gap-5">

            <div className="w-14 h-14 shrink-0 rounded-xl bg-red-100 text-red-700 flex items-center justify-center">

              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m9.5 12 1.7 1.7 3.5-3.5"
                />
              </svg>

            </div>

            <div className="text-center md:text-left">

              <h3 className="text-lg font-bold text-gray-900">
                Keep your community safe
              </h3>

              <p className="mt-1 text-gray-600">
                Always verify ownership before handing over an item and
                avoid sharing sensitive personal information publicly.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowToPost;