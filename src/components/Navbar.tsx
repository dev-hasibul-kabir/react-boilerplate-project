export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            MyBrand
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  ?.classList.toggle("hidden")
              }
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden hidden px-2 pt-2 pb-3 space-y-1"
        id="mobile-menu"
      >
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        >
          About
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        >
          Services
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
