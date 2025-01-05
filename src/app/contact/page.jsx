"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(null); // Error state for validation
  const [success, setSuccess] = useState(null); // Success state for submission feedback
  const [loading, setLoading] = useState(false); // Loading state for form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return false;
    }
    setError(null); // Clear error if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Prevent submission if validation fails

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      // Simulate API submission (you can replace this with actual API logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(
        `Thank you for your message, ${formData.name}! We'll get back to you soon.`
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg mb-6 text-center">
          Have questions, feedback, or suggestions? We'd love to hear from you.
          Fill out the form below, and we'll get back to you as soon as
          possible.
        </p>

        {/* Error/Success Message */}
        {error && (
          <div
            className="mb-4 text-red-500 text-center"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}
        {success && (
          <div
            className="mb-4 text-green-500 text-center"
            role="alert"
            aria-live="assertive"
          >
            {success}
          </div>
        )}

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
            className={`w-full px-4 py-2 rounded transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
