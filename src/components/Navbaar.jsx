import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="border-t-4 border-gray-600   border-b  shadow-sm">
      <div className="max-w-6xl mx-auto h-[60px] px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">

          <div className="w-13 h-13 rounded-full hover:scale-110 transition flex items-center justify-center">
            {/* <span className="text-white text-2xl font-light">
              M
            </span>

            <span className="text-red-500 text-2xl font-semibold -ml-1">
              X
            </span> */}
            <img className="border py-1  rounded-full object-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAbFBMVEX///8rKigqKioAAACvr68dHR1LS0uAgIAgIB7t7e0bGhdtbWzV1dVdXV309PT49/ZzcnElJSQ/Pj7i4uIVExCZmZmfn5+9vb3Nzc3b29vFxcW1tbUSEhILCAUwMDBlZWWPj49VVVU3Nzenp6YjrBJmAAALt0lEQVR4nO1ciZaquhKFhJCATGEewvz///hSQW0HtPWIDd7nPuu4EKGtTSU1paKmbQqRyRDSdZ1L6DpCiItybZmegk9tJbdoTHMgkoOuM2StLdUzKAeQmqOgcpysU290nKwt1RPwuliNoMSDd36JFB+ytlhPoFAiC+rv32dYvkXYWVWoZ+B3IDEP8+OZgUkG9ecMo4iBCmz6cyaVlNDpiY2jw9KQ8uZHBZoBDEiwnkjPwROgArY7OdXVH6WDBIMzwycq0MCeIpGuJtKTaLhkYJsnZ6LPskUjkc4YnamgwCquWE2k52CZwICYZydNwQg2VpLoWeQuEQjV2dnJYmf2nebP37E5WEZLcH8ZxhXRKsL8C2QoZGXtp4yYGXjdTpocy1tbjn9H2cSkLdaW4gV4NNb58Dlj/hpOw3XRrS3Fr/DKW3bRT7DO4+2nk1FDy/mpGkkV1B8QwFWxPfRdNo12PzoZ9VIFCG9fBRolOmeMEd4MQ8PFSdgv42rxASrQeqZP4Aro6L6kCnT7AyJQy+T6CRDp90L7chbE9AOcWR6eMZCpy24a+qOtc/QJpTkD6RcQAZhXq5cqCD5gHmudfclAt1s5dnKCOapWFCyqjIeiAT+4ZqCTEOI5itvVVGDlLZZ4ZAxER1N0Np3tVN5rrRXTFUaPY5meI0x/z6MuJ/LEAHFsGivJ7+dJjw8Do/7dmlczBBQYlo662GvR+rPh5Gc0FHgvFGMPBDVpfIOBvD/W+5Z2ErT9K9c89o3ALFU+iuDQJPg3h2TR2wyABCFEBhxE4L8YUlbChKjNTHpZxhl2c61CuPvlpsidmchnM2ICMd/tnD2H1jUPae45OxyzkBZelhQt4ce57GU0GItLOXJ+ax4cOah/uv2AVXhF/nIX17qODStzMWbtWESViVGesvgQpxXKvtq0PJ+TajXjEXCWvJGCn9qxqvEHUn4eZFHemZjpcRKFpJ++N2qxOxp0kE7i1NP5Sf0gg+Mq1FtQDvvBbGO9c6wqGGI4wcOIimYqt1UYQk7PSQdsu91xWno78SgDxNn7oqRuEoPjerSssdft/djGVYSJsoOWi0d1qW8ZCIsh2DsKLzna3gcokPBNoSrUROQ4jcNKGkc7/jEuLPRdob41x/gnSCt7IbC5F8YaB8EeJcHqNxWPYE0lDEqvCHB9JgwuHRzDw9/FMT0ZAg74vfAwIbJ2IOwqxp7XA3ko2Hoa2cCHIsqkGb34QtvUTFiDLDDS4+708RWdK/CQOtPkLKkZz4SoM+DNWwJur7Uba8QzMmAng8yd1rCQZHanlaHICCQHmk2P1En7ufuvCPD0PTZ15HaaDzOjOd5pEOnbHOmcNnUYVCcW0copxqgdJw5R1V7p8ArkXXmzFdp9NBfhIAJDJxEq73JlsKGb48l9XtQJTMJk4uDlO3w/xiDh2+xpIpCRoSslICQq4MdhUkfKefHY7k7F8MahrutgP0es9h4F/sbyl1eLILr+dsRD+WEqCdiuRY9ZQ02dU1Eqt8HYncKNuXznSOCtTUW0bvLxmgH4MTnPJYMxOhFOPvTsNIuWtkhgWPPO7rhoOdfeSECLsOiiqwfIiZx4WcN1ZhbpGT8h2vQ0gXNCVWVvyW0G765+tfUQdZdzGdID5bFZZ7kXxtK2TfqzSpyHtRxFs/bswLl980pIifEYXYbKOIKny3U+5Nl1IsBI0x5GNsUtvN52CSzM7339ArDcevDbcwlqmZXAKobOWj+Ys/UylQsNGBuOqciaNy0R5+8vflUxzoozJXAoPEcwMOzyZi7GMEsiL1UquJP113/QBxL1daidDXYbgjDoBWKm393MZBDHDe1xCX/h5iDCf9JMlNjYKTHk5kowKZrMMP2QIMg+76XDiAvhSrLVTZax+yf1otwUrgetrRMDRNwI8mCEOPfSX9JhYYDfuDWIVBn1LxAIUhj4wIATaOWD1hRpU3/JYaS7kPP4VrbGWPbrdy+DbCA0Mtm0mMSVVDmRR8Sqan4XAsi25Man7O+6uXzfk/8PACvpeXCkef4vgLutu59+8Z9FQecBqWAW3PjwJSwcG/kdJjOICUw9a/azF7F0m0jBOJoB61UYDI2iS0MZuAVB69mvIVO1N2pm+b0GsWi/eBTPuiA+TObPTx6uiT4O1i85E+h8HHPsBL0TLP874vGuTE/Bmo91WHO8onuHEszlgrwbCdVJM24evkEJyzX7FvrsLFCGCBpajdskXwJnSyX8dPb5IqiyW1Dk3RVTjrw48EKBnmPOCkfAVpTwsoOlj7cogS8T6iXzlR0CpqJVDBqphOjhZbIngBcxR8W8pVTm2sGQnQVqLfmGxX0JfBFzlNaziy4qL3PriUEPSsDosdWZpygsMBOKZl4F8HRyrDLkII6BDhXN4gyWcMzJvDdTQWnL9gxYCEogbzBH5GUlWPOZO2+kCsp9lSKIld3zbleK/h22+6oSbqgAJPYDcmTAhl+quf8M8qJj9jBhM7BjX+3EPTKYlEDx3MWvob7a1/Ic0sGcQzjCZmgZzR0ZqC1XeT979WsY3racozYPHxn83l+0OXjKg/0w4GzjLa++dYFSVXh/GCDSeZfXvISlGRR0d46pefTIAFLO3ZJYfCnNCWv7DJOnPmGgc3tBxMPiDObju1MGi4KHXwZfBl8Gn8VgLh5ckwGPf21/Ol3u5HXMZm5YkQEPx9y4X7ewB/eYjzKz9DVvvFrCXZEBkznz/bqF3ebFQWDIlCzHu15gXpOB6WjFSXHArsX0m0rySA4YGUDhSMvrQ+vwTqZ2ONGsy+RoMwxivutoD8vHLHa7jpqYI9PSitY86AMaShLN2yoDe+d4vmcZDeNNafmaH6V4cGSk6yWHK+QoKi2tukxmN8LAhj1/kRSl0uNU87IxkpkdV6l7un/mNXS6aEa9pZn8w4APOTSSQ4U4wAXsE8FZ2nN5mB/sZ6z2oRWCNRfWaCMMel9LCYIScYUz6JTteiLUTN6XluQ00KLc14ywTM/ry9tgwHpN6wji8oyDp32wXuVyYHAwRY5UktSUlmne7syJbIMBlwwSjsBDlAQPVG2cqxqlg/21llZiVcbXsvOS5coMHDwhlLLyGrq2Ok7Tth7MYuqzy6fecR5a8lqBYf0hwVsaRb4DKDoog+W7xNMik8iXHbiCDHQQJa26GDrWymBqKK/OVoFWZrDHiIdKLcJEO5u0k0RFa6tlDWiuhaBiWri3DO9iqWjVyC6p9ghsxmiW56MpL7B7I58OeVPleTcNe1tP5dnKxW3mbmUm61zsZwH058tQ246nRn2Ga4KnwzquD7dwjONanrXjzfiDhfBl8GXw4QzYWV3yMdiXi11rMmj61lVoH17a5E3rhpuxRawvownWw01HMj663F+1JoOfxcf+zkaV879iyrjoPNdfmYETqhUw9VbOiikZIJNfgzfyhbP9RIGfAxKbY5Cr9k0Opa2ejukONjWHlMrApwlor7OAmiEdkx6uaII0bYHBpkZRXssHC2I005a63GVMZmM05qavjbyWZyD8swLGuWp2N7amA8uQcV3Wc9b5mjNWMu4MyZ6Bp6UMfhgiT0b4DTtYAVWHG9PBhMAOZbrmCp5A14hiwIABlwyKvsYOZDuWVpg11AI2pgOpgazsIU/eZ/pZfc4gQ7zO4I/C5jAk3K3poMS1BGcu/GaRyvRz2AEl84UDg4rrisGgdr+w7c1kcaxVpGyqthx04J8zqH1JDsEQ2xCD/siAy3kQtQKlMA9goGCYuKcMelxoUY9FqflbYlBIa7o/pr5WGKWn5QOMn8gwrIMO9D0DKv+0kWnbYiB98p7BwR+UkMSrZi2jAH/ga5lkUEqLxGzVzdhtaRTpg9u6xwUOHtK0cxFkzHqbSC/c70ydt7se6mGt28gr3KTrWduam4lNIRQ6XSYj8eGHOZgQDHH4cLqCT9exWCb5bEv5wW3AvojHrtwqg2fwZfBl8GXwHgazG7YmBmT5vVxocQZWZcwik19Uzn/0GqrvPtkvvvjiiy/+z/A/vP4J6DqnUQsAAAAASUVORK5CYII=" alt="" />
          </div>

          <span className="text-[13px] ">
            <p className="text-[18px] font-semibold">FindBack.com</p><span className="text-gray-500  font-semibold">Community Lost & Found</span>
          </span>

        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-lg hover:border-b-2 font-semibold hover:text-red-500 text-gray-800  transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-lg font-semibold hover:border-b-2 hover:text-red-500 text-gray-800  transition"
          >
            About
          </Link>

          <Link
            to="/business"
            className="text-lg hover:border-b-2 font-semibold hover:text-red-500 text-gray-800  transition"
          >
            Business
          </Link>

          <Link
            to="/login"
            className="text-lg hover:border-b-2 font-semibold hover:text-red-500 text-gray-8000  transition"
          >
            Login
          </Link>

          <Link
                 to="/Register"
                        className="text-lg hover:border-b-2 font-semibold hover:text-red-500 text-gray-8000  transition"
          >
       Register
          </Link>

          {/* Language */}
          <button
            type="button"
            className=" hover:scale-110 transition"
          >
            <img className="h-13 w-15 rounded-full object-cover" src="data:image/jpeg;base64,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" alt="" />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;