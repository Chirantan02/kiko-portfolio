"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaBehance, FaDribbble } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend or a form service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through the form or connect with me directly through the following channels.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a
                    href="mailto:khushi@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    khushi@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mumbai, India
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Behance"
                    >
                      <FaBehance size={24} />
                    </a>
                    <a
                      href="https://dribbble.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      aria-label="Dribbble"
                    >
                      <FaDribbble size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Me a Message</h2>
              {submitSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-500">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="text-red-600 dark:text-red-400">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 