import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-white transition-colors duration-300 bg-black dark:bg-white dark:text-black">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Solutions Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Solutions</h3>
          <p className="mb-4">
          Your partner in rental spaces, manpower, and education consultancy.          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook fa-lg hover:text-gray-300 dark:hover:text-gray-600"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram fa-lg hover:text-gray-300 dark:hover:text-gray-600"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i className="fab fa-tiktok fa-lg hover:text-gray-300 dark:hover:text-gray-600"></i>
            </a>
            <a href="#" aria-label="X">
              <i className="fab fa-twitter fa-lg hover:text-gray-300 dark:hover:text-gray-600"></i>
            </a>
          </div>
        </div>

        {/* Consultancy Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Zeko Consultancy</h3>
          <ul>
            <li className="mb-2">+995 599 029152</li>
            <li className="mb-2">+995 591 940215</li>

            <li>zekoconsultancy.ge@gmail.com</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Services</h3>
          <form>
            <input
              type="email"
              placeholder="Your email for inquiries"
              className="w-full p-2 mb-4 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-black"
            />
            <button
              type="submit"
              className="w-[80%] px-4 py-2 text-black bg-white rounded-lg dark:text-white font-poppins font-medium dark:bg-black hover:bg-primary dark:hover:bg-primary"
            >
              Submit your inquiry now
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
