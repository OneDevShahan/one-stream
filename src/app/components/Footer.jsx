"use client"; // Mark this component as a Client Component

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <ul>
            <li>
              <span>Email: </span>
              <a
                href="mailto:onedevshahan@gmail.com"
                className="underline hover:text-blue-500"
              >
                onedevshahan@gmail.com
              </a>
            </li>
            <li>
              <span>Phone: </span>
              <a
                href="tel:+918445470641"
                className="underline hover:text-blue-500"
              >
                +91 8445470641
              </a>
            </li>
            <li>Address: Hi-Tech City, Hyderabad</li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p>
            OneStream is your one-stop destination for streaming the latest
            movies and TV shows. We aim to provide an unparalleled viewing
            experience tailored to your preferences.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Categories</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Most Watched
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Top 10 Movies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-blue-500">
                Suggested for You
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto flex justify-center gap-6 mt-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-700"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      {/* Back to Top Button */}
      <div className="text-center mt-6">
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-200"
        >
          Back to Top
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        <p>© {currentYear} OneStream. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
