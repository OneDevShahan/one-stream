"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you for your message, ${formData.name}! We'll get back to you soon.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl mb-6 text-center">
          Have questions, feedback, or suggestions? We'd love to hear from you.
          Fill out the form below, and we'll get back to you as soon as
          possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 max-w-lg mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-base md:text-lg font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-base md:text-lg font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-base md:text-lg font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 md:p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
