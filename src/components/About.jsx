
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-red-600 font-semibold uppercase tracking-wider mb-3">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Helping People Find What They Lost
          </h1>

          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-8">
            Our Lost & Found platform makes it easier for people to report
            lost items, publish found items and connect with the rightful
            owners in their community.
          </p>

          <div className="w-12 h-1 bg-purple-600 mx-auto mt-8"></div>

        </div>
      </section>


      {/* About Content */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>

              <p className="text-red-600 font-semibold mb-3">
                WHO WE ARE
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A simple way to reconnect lost items with their owners
              </h2>

              <p className="text-gray-500 leading-8 mb-5">
                Losing an important item can be stressful. At the same time,
                finding something that belongs to someone else can leave you
                wondering how to return it.
              </p>

              <p className="text-gray-500 leading-8 mb-5">
                Our platform provides a central place where people can report
                lost belongings and publish items they have found. Users can
                search listings, browse categories and contact people about
                relevant items.
              </p>

              <p className="text-gray-500 leading-8">
                The goal is simple — make the lost and found process faster,
                easier and more accessible for everyone.
              </p>

            </div>


            {/* Right */}
            <div className="bg-gray-50 rounded-xl p-10">

              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What you can do
              </h3>

              <div className="space-y-7">

                <div className="flex gap-5">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Search Items
                    </h4>

                    <p className="text-gray-500 text-sm leading-6">
                      Search through lost and found listings to find an item
                      that matches what you are looking for.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Report Lost Items
                    </h4>

                    <p className="text-gray-500 text-sm leading-6">
                      Publish details about something you have lost so other
                      people can help you find it.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Report Found Items
                    </h4>

                    <p className="text-gray-500 text-sm leading-6">
                      Found something? Publish it on the platform and help
                      return it to its rightful owner.
                    </p>
                  </div>

                </div>


                <div className="flex gap-5">

                  <div className="w-12 h-12 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                    
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Browse by Location
                    </h4>

                    <p className="text-gray-500 text-sm leading-6">
                      Find relevant lost and found reports based on different
                      locations.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-red-600 font-semibold mb-3">
            HOW IT WORKS
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Find or return an item in a few simple steps
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                1
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Create a Report
              </h3>

              <p className="text-gray-500 leading-7">
                Report an item as lost or found by providing important details
                about it.
              </p>

            </div>


            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                2
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Search & Match
              </h3>

              <p className="text-gray-500 leading-7">
                Browse listings and search for items using names, categories
                and locations.
              </p>

            </div>


            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">

              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                3
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reconnect
              </h3>

              <p className="text-gray-500 leading-7">
                Connect with the relevant person and work towards returning
                the item to its rightful owner.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Mission */}
      <section className="py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-red-600 font-semibold mb-3">
            OUR MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Building a helpful lost & found community
          </h2>

          <p className="text-gray-500 text-lg leading-8">
            We want to create a trusted community where people can help one
            another recover lost belongings. Whether it is a phone, wallet,
            document, bag, pet or any other valuable item, every report can
            make a difference.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gray-900 py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Lost something or found something?
          </h2>

          <p className="text-gray-400 mb-8">
            Help someone find what they are looking for.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/lost-items"
              className="px-7 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition"
            >
              Browse Lost Items
            </Link>

            <Link
              to="/found-items"
              className="px-7 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-md font-semibold transition"
            >
              Browse Found Items
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;