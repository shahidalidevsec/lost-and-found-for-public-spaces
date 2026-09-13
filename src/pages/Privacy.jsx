
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <p className="text-gray-400 font-semibold uppercase tracking-wider text-sm mb-3">
              Your Privacy Matters
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Privacy Policy
            </h1>

            <p className="text-gray-300 text-lg leading-8">
              This Privacy Policy explains how our Lost & Found platform
              collects, uses, stores, protects, and handles information
              when you use our website and services.
            </p>

            <p className="mt-6 text-sm text-gray-400">
              Last Updated: September 13, 2026
            </p>

          </div>

        </div>
      </section>


      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-1">

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:sticky lg:top-6">

              <h2 className="font-bold text-lg mb-5">
                Privacy Policy
              </h2>

              <nav className="space-y-3 text-sm">

                <a href="#introduction" className="block text-gray-600 hover:text-red-600">
                  1. Introduction
                </a>

                <a href="#information" className="block text-gray-600 hover:text-red-600">
                  2. Information We Collect
                </a>

                <a href="#account" className="block text-gray-600 hover:text-red-600">
                  3. Account Information
                </a>

                <a href="#items" className="block text-gray-600 hover:text-red-600">
                  4. Lost & Found Information
                </a>

                <a href="#usage" className="block text-gray-600 hover:text-red-600">
                  5. How We Use Information
                </a>

                <a href="#cookies" className="block text-gray-600 hover:text-red-600">
                  6. Cookies & Technologies
                </a>

                <a href="#sharing" className="block text-gray-600 hover:text-red-600">
                  7. Information Sharing
                </a>

                <a href="#security" className="block text-gray-600 hover:text-red-600">
                  8. Data Security
                </a>

                <a href="#retention" className="block text-gray-600 hover:text-red-600">
                  9. Data Retention
                </a>

                <a href="#rights" className="block text-gray-600 hover:text-red-600">
                  10. Your Privacy Choices
                </a>

                <a href="#children" className="block text-gray-600 hover:text-red-600">
                  11. Children's Privacy
                </a>

                <a href="#thirdparty" className="block text-gray-600 hover:text-red-600">
                  12. Third-Party Services
                </a>

                <a href="#changes" className="block text-gray-600 hover:text-red-600">
                  13. Policy Changes
                </a>

                <a href="#contact" className="block text-gray-600 hover:text-red-600">
                  14. Contact Us
                </a>

              </nav>

            </div>

          </aside>


          {/* Content */}
          <main className="lg:col-span-3">

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 md:p-10">


              {/* 1 */}
              <section id="introduction" className="mb-12">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Introduction
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  Welcome to our Lost & Found platform. We understand
                  that privacy is important when using an online service.
                  This Privacy Policy explains what information may be
                  collected when you use our website and how that
                  information may be used.
                </p>

                <p className="text-gray-600 leading-8">
                  By using our website, you acknowledge that information
                  may be processed as described in this Privacy Policy.
                  If you do not agree with this policy, please discontinue
                  use of the platform.
                </p>

              </section>


              {/* 2 */}
              <section id="information" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  2. Information We Collect
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  Depending on how you use the platform, we may collect
                  different types of information.
                </p>


                <div className="grid md:grid-cols-2 gap-5">

                  <div className="border border-gray-200 rounded-xl p-6">

                  
                    <h3 className="font-bold text-lg mb-2">
                      Personal Information
                    </h3>

                    <p className="text-gray-600 text-sm leading-7">
                      This may include your name, email address, phone
                      number, and other contact details that you choose
                      to provide.
                    </p>

                  </div>


                  <div className="border border-gray-200 rounded-xl p-6">


                    <h3 className="font-bold text-lg mb-2">
                      Item Information
                    </h3>

                    <p className="text-gray-600 text-sm leading-7">
                      We may collect information about lost and found
                      items such as item names, descriptions, locations,
                      dates, and photographs.
                    </p>

                  </div>


                  <div className="border border-gray-200 rounded-xl p-6">

                   

                    <h3 className="font-bold text-lg mb-2">
                      Technical Information
                    </h3>

                    <p className="text-gray-600 text-sm leading-7">
                      Technical information such as browser type,
                      device information, IP address, and basic usage
                      information may be collected where appropriate.
                    </p>

                  </div>


                  <div className="border border-gray-200 rounded-xl p-6">

                    <div className="text-2xl mb-3">
                      
                    </div>

                    <h3 className="font-bold text-lg mb-2">
                      Communication Information
                    </h3>

                    <p className="text-gray-600 text-sm leading-7">
                      Information you provide when contacting support
                      or communicating regarding an item may be
                      processed to provide the requested service.
                    </p>

                  </div>

                </div>

              </section>


              {/* 3 */}
              <section id="account" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  3. Account Information
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  When you create an account, we may collect information
                  necessary to create and maintain your account.
                </p>

                <ul className="space-y-3 text-gray-600 leading-7">

                  <li>
                    • Name and email address
                  </li>

                  <li>
                    • Password information stored using appropriate
                    security practices
                  </li>

                  <li>
                    • Account verification information
                  </li>

                  <li>
                    • Login and authentication information
                  </li>

                  <li>
                    • Information you voluntarily add to your profile
                  </li>

                </ul>

              </section>


              {/* 4 */}
              <section id="items" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  4. Lost & Found Information
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  The primary purpose of this platform is to help people
                  reconnect with belongings. When you submit an item
                  report, the information you provide may be displayed
                  to other users depending on the platform's features.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">

                  <h3 className="font-bold mb-3">
                     Please be careful about what you publish
                  </h3>

                  <p className="text-gray-700 leading-7">
                    Do not include passwords, financial information,
                    government identification numbers, authentication
                    codes, or other highly sensitive information in an
                    item description or photograph.
                  </p>

                </div>

              </section>


              {/* 5 */}
              <section id="usage" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  5. How We Use Your Information
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  Information collected through the platform may be used
                  for legitimate purposes including:
                </p>

                <div className="space-y-4">

                  <div className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      1
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Account Management
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        Creating, maintaining, and securing your account.
                      </p>
                    </div>

                  </div>


                  <div className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      2
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Item Matching
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        Helping users discover potentially matching lost
                        and found reports.
                      </p>
                    </div>

                  </div>


                  <div className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      3
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Communication
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        Supporting communication related to item recovery
                        and platform assistance.
                      </p>
                    </div>

                  </div>


                  <div className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      4
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Security
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        Detecting abuse, unauthorized access, spam, and
                        potentially harmful activity.
                      </p>
                    </div>

                  </div>


                  <div className="flex gap-4">

                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                      5
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Service Improvement
                      </h3>

                      <p className="text-gray-600 text-sm mt-1">
                        Understanding how the platform is used so that
                        features and reliability can be improved.
                      </p>
                    </div>

                  </div>

                </div>

              </section>


              {/* 6 */}
              <section id="cookies" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  6. Cookies & Similar Technologies
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  The platform may use cookies, local storage, or similar
                  technologies to provide essential functionality and
                  remember certain preferences.
                </p>

                <p className="text-gray-600 leading-8">
                  Some technologies may also be used for security,
                  performance measurement, or understanding general
                  website usage.
                </p>

              </section>


              {/* 7 */}
              <section id="sharing" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  7. When Information May Be Shared
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  We do not intend to sell personal information simply
                  because you use the Lost & Found platform. Information
                  may be shared when necessary to provide the service,
                  protect users, or comply with legal obligations.
                </p>

                <div className="bg-gray-50 rounded-xl p-6">

                  <ul className="space-y-4 text-gray-600">

                    <li>
                      <strong className="text-gray-900">
                        Service Providers:
                      </strong>{" "}
                      Technical providers may process information to
                      support hosting, email delivery, storage, or other
                      platform functionality.
                    </li>

                    <li>
                      <strong className="text-gray-900">
                        Legal Requirements:
                      </strong>{" "}
                      Information may be disclosed where required by
                      applicable law or valid legal process.
                    </li>

                    <li>
                      <strong className="text-gray-900">
                        Safety:
                      </strong>{" "}
                      Information may be processed or disclosed where
                      reasonably necessary to investigate abuse, fraud,
                      security incidents, or threats.
                    </li>

                  </ul>

                </div>

              </section>


              {/* 8 */}
              <section id="security" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  8. Data Security
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  We take reasonable technical and organizational
                  measures to protect information from unauthorized
                  access, alteration, disclosure, or destruction.
                </p>

                <div className="grid md:grid-cols-3 gap-4">

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-semibold mb-2">
                       Authentication
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      Account authentication mechanisms help protect
                      user accounts.
                    </p>
                  </div>


                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-semibold mb-2">
                       Access Control
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      Access to information should be limited according
                      to legitimate platform requirements.
                    </p>
                  </div>


                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="font-semibold mb-2">
                       Monitoring
                    </h3>

                    <p className="text-gray-600 text-sm leading-6">
                      Security events and suspicious activity may be
                      monitored to protect the service.
                    </p>
                  </div>

                </div>

              </section>


              {/* 9 */}
              <section id="retention" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  9. Data Retention
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  We may retain information for as long as reasonably
                  necessary to provide our services, maintain account
                  functionality, resolve disputes, prevent abuse, meet
                  legal requirements, or maintain appropriate business
                  records.
                </p>

                <p className="text-gray-600 leading-8">
                  Retention periods may vary depending on the type of
                  information and the reason it was collected.
                </p>

              </section>


              {/* 10 */}
              <section id="rights" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  10. Your Privacy Choices
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  Depending on applicable law, you may have rights
                  relating to the personal information associated with
                  your account.
                </p>

                <ul className="space-y-3 text-gray-600 leading-7">

                  <li>
                    • Request information about personal data associated
                    with your account.
                  </li>

                  <li>
                    • Request correction of inaccurate information.
                  </li>

                  <li>
                    • Request deletion of certain information where
                    applicable.
                  </li>

                  <li>
                    • Update information through available account
                    settings.
                  </li>

                  <li>
                    • Stop using the platform at any time.
                  </li>

                </ul>

              </section>


              {/* 11 */}
              <section id="children" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  11. Children's Privacy
                </h2>

                <p className="text-gray-600 leading-8">
                  Our platform is not intentionally designed to collect
                  personal information from children in violation of
                  applicable laws. If you believe that a child has
                  provided personal information improperly, please
                  contact us so that the situation can be reviewed.
                </p>

              </section>


              {/* 12 */}
              <section id="thirdparty" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  12. Third-Party Services
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  Our platform may use third-party services for
                  infrastructure, hosting, email delivery, authentication,
                  analytics, storage, or other technical requirements.
                </p>

                <p className="text-gray-600 leading-8">
                  These providers may have their own privacy policies and
                  terms. We recommend reviewing the applicable policies
                  of third-party services when relevant.
                </p>

              </section>


              {/* 13 */}
              <section id="changes" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  13. Changes to This Privacy Policy
                </h2>

                <p className="text-gray-600 leading-8">
                  We may update this Privacy Policy when our services,
                  technology, security practices, or legal requirements
                  change. When updates are made, the "Last Updated" date
                  at the top of this page may be revised.
                </p>

              </section>


              {/* 14 */}
              <section id="contact">

                <h2 className="text-2xl font-bold mb-4">
                  14. Contact Us
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  If you have questions about this Privacy Policy or
                  believe your personal information has been handled
                  incorrectly, please contact our support team.
                </p>

                <div className="bg-gray-900 text-white rounded-xl p-7">

                  <h3 className="text-xl font-bold mb-3">
                    Privacy Support
                  </h3>

                  <p className="text-gray-300 mb-2">
                    For privacy-related questions, please contact:
                  </p>

                  <p className="text-gray-300">
                    Email: privacy@lostandfound.com
                  </p>

                </div>

              </section>


              {/* Privacy Promise */}
              <div className="mt-12 pt-8 border-t border-gray-200">

                <div className="bg-red-50 rounded-xl p-7">

                  <h3 className="text-xl font-bold mb-3">
                     Our Privacy Commitment
                  </h3>

                  <p className="text-gray-600 leading-7">
                    We believe that a Lost & Found platform should be
                    useful without asking users to unnecessarily expose
                    sensitive information. Please share only the
                    information needed to help identify and recover
                    belongings.
                  </p>

                </div>

              </div>

            </div>


            {/* Bottom Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                ← Back to Home
              </Link>

              <Link
                to="/terms"
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Terms & Policies
              </Link>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

export default Privacy;