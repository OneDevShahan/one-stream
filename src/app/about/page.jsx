"use client";

const About = () => {
  return (
    <div className="dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl mb-4 md:mb-6 text-center">
          About Us
        </h1>
        <div className="text-lg md:text-xl space-y-4 text-justify md:text-center">
          <p>
            Welcome to <strong>OneStream</strong>! Our platform is dedicated to
            bringing you a curated collection of the best movies and shows from
            around the world. Whether you're looking for the latest hits,
            classics, or hidden gems, we have something for everyone.
          </p>
          <p>
            Our mission is to create an easy-to-use platform that caters to the
            diverse tastes of movie enthusiasts. We prioritize user experience,
            design, and accessibility, ensuring you have the best streaming
            experience.
          </p>
          <p>
            Thank you for choosing <strong>OneStream</strong>. Happy watching!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
