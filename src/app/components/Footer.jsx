const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:support@onestream.com" className="underline">
              onedevshahan@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+123456789" className="underline">
              +91 8445470641
            </a>
          </p>
          <p>Address: Hi-Tech City, Hyderabad</p>
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
              <a href="#" className="hover:underline">
                Most Watched
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Top 10 Movies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Suggested for You
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} OneStream. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
