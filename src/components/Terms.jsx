
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <p className="text-red-100 font-semibold uppercase tracking-wider text-sm mb-3">
              Legal & Policies
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Terms & Policies
            </h1>

            <p className="text-red-100 text-lg leading-8">
              Please read these terms and policies carefully before using
              the Lost & Found platform. By creating an account or using
              our services, you agree to follow these rules.
            </p>

            <p className="mt-6 text-sm text-red-100">
              Last Updated: September 13, 2026
            </p>

          </div>

        </div>
      </section>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Table of Contents */}
          <aside className="lg:col-span-1">

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:sticky lg:top-6">

              <h2 className="font-bold text-lg mb-5">
                On this page
              </h2>

              <nav className="space-y-3 text-sm">

                <a href="#acceptance" className="block text-gray-600 hover:text-red-600">
                  1. Acceptance of Terms
                </a>

                <a href="#eligibility" className="block text-gray-600 hover:text-red-600">
                  2. User Eligibility
                </a>

                <a href="#account" className="block text-gray-600 hover:text-red-600">
                  3. Account Registration
                </a>

                <a href="#lost" className="block text-gray-600 hover:text-red-600">
                  4. Lost Item Reports
                </a>

                <a href="#found" className="block text-gray-600 hover:text-red-600">
                  5. Found Item Reports
                </a>

                <a href="#ownership" className="block text-gray-600 hover:text-red-600">
                  6. Ownership & Verification
                </a>

                <a href="#prohibited" className="block text-gray-600 hover:text-red-600">
                  7. Prohibited Activities
                </a>

                <a href="#communication" className="block text-gray-600 hover:text-red-600">
                  8. User Communication
                </a>

                <a href="#privacy" className="block text-gray-600 hover:text-red-600">
                  9. Privacy & Data
                </a>

                <a href="#content" className="block text-gray-600 hover:text-red-600">
                  10. User Content
                </a>

                <a href="#liability" className="block text-gray-600 hover:text-red-600">
                  11. Limitation of Liability
                </a>

                <a href="#suspension" className="block text-gray-600 hover:text-red-600">
                  12. Account Suspension
                </a>

                <a href="#changes" className="block text-gray-600 hover:text-red-600">
                  13. Changes to Terms
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


              {/* Introduction */}
              <section id="acceptance" className="mb-12">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  Welcome to our Lost & Found platform. This website is
                  designed to help users report lost belongings, report
                  found belongings, search for items, and communicate with
                  other users regarding potentially matching items.
                </p>

                <p className="text-gray-600 leading-8">
                  By accessing, registering with, or using this platform,
                  you acknowledge that you have read, understood, and
                  agreed to these Terms & Policies. If you do not agree
                  with any part of these terms, please do not use the
                  platform.
                </p>

              </section>


              {/* Eligibility */}
              <section id="eligibility" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  2. User Eligibility
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  You are responsible for ensuring that you are legally
                  permitted to use this platform. Users must provide
                  accurate information when creating an account and when
                  submitting lost or found item reports.
                </p>

                <div className="bg-gray-50 border-l-4 border-red-500 p-5 rounded-r-lg">

                  <p className="font-semibold mb-2">
                    Important
                  </p>

                  <p className="text-gray-600 leading-7">
                    You must not create an account using another person's
                    identity or intentionally provide misleading
                    information.
                  </p>

                </div>

              </section>


              {/* Account */}
              <section id="account" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  3. Account Registration & Security
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  Some features of the platform require an account.
                  When registering, you agree to provide information that
                  is accurate and reasonably current.
                </p>

                <ul className="space-y-3 text-gray-600">

                  <li>
                    • Keep your login credentials confidential.
                  </li>

                  <li>
                    • Do not share your password with other people.
                  </li>

                  <li>
                    • Do not create accounts for fraudulent purposes.
                  </li>

                  <li>
                    • Notify us if you believe your account has been
                    accessed without authorization.
                  </li>

                  <li>
                    • You are responsible for activity performed through
                    your account.
                  </li>

                </ul>

              </section>


              {/* Lost Items */}
              <section id="lost" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  4. Reporting Lost Items
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  When reporting a lost item, users should provide as much
                  accurate information as possible. This may include the
                  item name, description, location, date, photograph, and
                  contact information.
                </p>

                <div className="grid md:grid-cols-2 gap-4">

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold mb-2">
                      Provide accurate details
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Avoid intentionally incorrect descriptions or
                      locations.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold mb-2">
                      Keep reports updated
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Update or remove your report when the item has been
                      successfully recovered.
                    </p>
                  </div>

                </div>

              </section>


              {/* Found Items */}
              <section id="found" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  5. Reporting Found Items
                </h2>

                <p className="text-gray-600 leading-8">
                  If you find an item and choose to report it on the
                  platform, you should provide an honest description and
                  approximate location where the item was found. Do not
                  intentionally claim ownership of an item belonging to
                  another person.
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  Users should exercise reasonable caution when arranging
                  the return of an item. Where appropriate, ownership
                  should be verified before handing over valuable
                  belongings.
                </p>

              </section>


              {/* Ownership */}
              <section id="ownership" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  6. Ownership & Item Verification
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  The platform does not automatically determine ownership
                  of an item. Users are responsible for reasonably
                  verifying that a person claiming an item is its
                  legitimate owner.
                </p>

                <p className="text-gray-600 leading-8">
                  For valuable belongings, users may consider requesting
                  identifying details that were not publicly disclosed in
                  the listing before returning the item.
                </p>

              </section>


              {/* Prohibited */}
              <section id="prohibited" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  7. Prohibited Activities
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  To maintain a safe and trustworthy community, users must
                  not use the platform for unlawful, fraudulent, abusive,
                  or harmful activities.
                </p>

                <div className="bg-red-50 border border-red-100 rounded-lg p-6">

                  <ul className="space-y-3 text-gray-700">

                    <li>• Posting deliberately false reports.</li>

                    <li>• Claiming an item that does not belong to you.</li>

                    <li>• Impersonating another person.</li>

                    <li>• Harassing or threatening another user.</li>

                    <li>• Posting malicious or harmful content.</li>

                    <li>• Using the platform for scams or fraudulent
                      transactions.</li>

                    <li>• Attempting to gain unauthorized access to the
                      platform.</li>

                    <li>• Uploading illegal or inappropriate material.</li>

                  </ul>

                </div>

              </section>


              {/* Communication */}
              <section id="communication" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  8. Communication Between Users
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  Users may communicate with other users regarding lost
                  and found items. Communication should remain respectful
                  and related to the purpose of the platform.
                </p>

                <p className="text-gray-600 leading-8">
                  Never share passwords, authentication codes, financial
                  account credentials, or other highly sensitive
                  information with another user.
                </p>

              </section>


              {/* Privacy */}
              <section id="privacy" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  9. Privacy & Personal Data
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  When using the platform, you may provide personal
                  information such as your name, email address, contact
                  details, and information about lost or found items.
                </p>

                <p className="text-gray-600 leading-8 mb-4">
                  We aim to use personal information only for legitimate
                  platform-related purposes, including account
                  authentication, communication, item reporting, and
                  improving the service.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">

                  <h3 className="font-bold mb-2">
                    Privacy Reminder
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Please avoid publishing sensitive information in a
                    public item description. Only provide information
                    necessary for identifying or recovering your item.
                  </p>

                </div>

              </section>


              {/* Content */}
              <section id="content" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  10. Photos, Descriptions & User Content
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  Users may upload photographs and descriptions of lost
                  and found belongings. You are responsible for ensuring
                  that content you submit is accurate and does not violate
                  another person's rights.
                </p>

                <p className="text-gray-600 leading-8">
                  Do not upload photographs containing unnecessary
                  sensitive information, passwords, financial details,
                  identification numbers, or private documents.
                </p>

              </section>


              {/* Third Party */}
              <section className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  11. Third-Party Services
                </h2>

                <p className="text-gray-600 leading-8">
                  The platform may rely on third-party services for
                  infrastructure, email delivery, authentication,
                  hosting, analytics, or other technical functionality.
                  Availability of such services may depend on external
                  providers.
                </p>

              </section>


              {/* Liability */}
              <section id="liability" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  12. Limitation of Liability
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  The Lost & Found platform provides tools intended to
                  help users connect regarding lost and found belongings.
                  We do not guarantee that an item will be recovered,
                  returned, or successfully matched.
                </p>

                <p className="text-gray-600 leading-8">
                  Users are responsible for their own interactions,
                  meetings, communications, and decisions relating to
                  item recovery. The platform should not be considered a
                  guarantee of ownership, recovery, authenticity, or
                  safety.
                </p>

              </section>


              {/* Safety */}
              <section className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  13. Personal Safety
                </h2>

                <p className="text-gray-600 leading-8 mb-5">
                  Your safety should always be your first priority when
                  arranging an item return.
                </p>

                <div className="grid md:grid-cols-3 gap-4">

                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Public Location
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Consider meeting in a safe and public location.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Verify Ownership
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Ask reasonable questions before returning an item.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Trust Your Judgment
                    </h3>
                    <p className="text-gray-600 text-sm leading-6">
                      Do not continue an interaction that feels unsafe.
                    </p>
                  </div>

                </div>

              </section>


              {/* Suspension */}
              <section id="suspension" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  14. Account Suspension & Termination
                </h2>

                <p className="text-gray-600 leading-8 mb-4">
                  We may restrict, suspend, or terminate an account if
                  there is reasonable evidence that the account is being
                  used in violation of these terms, for fraudulent
                  purposes, or in a manner that could harm other users or
                  the platform.
                </p>

                <p className="text-gray-600 leading-8">
                  Users may also choose to stop using the platform at any
                  time.
                </p>

              </section>


              {/* Availability */}
              <section className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  15. Platform Availability
                </h2>

                <p className="text-gray-600 leading-8">
                  We aim to keep the platform available and functional,
                  but uninterrupted availability cannot be guaranteed.
                  Maintenance, technical issues, network failures, or
                  third-party service problems may temporarily affect
                  certain features.
                </p>

              </section>


              {/* Changes */}
              <section id="changes" className="mb-12">

                <h2 className="text-2xl font-bold mb-4">
                  16. Changes to These Terms
                </h2>

                <p className="text-gray-600 leading-8">
                  These Terms & Policies may be updated from time to time
                  to reflect changes to the platform, security practices,
                  features, or applicable requirements. Updated terms will
                  be published on this page with a revised "Last Updated"
                  date.
                </p>

              </section>


              {/* Contact */}
              <section id="contact">

                <h2 className="text-2xl font-bold mb-4">
                  17. Contact Us
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  If you have questions, concerns, or feedback regarding
                  these Terms & Policies, please contact our support team.
                </p>

                <div className="bg-gray-900 text-white rounded-xl p-7">

                  <h3 className="text-xl font-bold mb-3">
                    Lost & Found Support
                  </h3>

                  <p className="text-gray-300 mb-2">
                    We are here to help with platform-related questions.
                  </p>

                  <p className="text-gray-300">
                    Email: support@lostandfound.com
                  </p>

                </div>

              </section>


              {/* Agreement */}
              <div className="mt-12 pt-8 border-t border-gray-200">

                <div className="bg-red-50 rounded-xl p-6">

                  <h3 className="font-bold text-lg mb-2">
                    By using Lost & Found
                  </h3>

                  <p className="text-gray-600 leading-7">
                    You confirm that you have read these Terms & Policies
                    and agree to use the platform responsibly, honestly,
                    and respectfully.
                  </p>

                </div>

              </div>

            </div>


            {/* Back Links */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                ← Back to Home
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

export default Terms;