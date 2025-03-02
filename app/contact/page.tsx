"use client";

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Khushi - Premium UI/UX Designer',
  description: 'Get in touch with Khushi for design collaborations and opportunities.',
};

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic
    console.log('Form submitted');
  };

  return (
    <div className="fade-in">
      {/* Contact Hero Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Connect</h1>
            <p className="text-2xl text-gray-600 mb-8">
              I&apos;m always excited to discuss new projects, creative ideas, or potential collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Social Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p>khushi.designer@example.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p>Mumbai, India</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect Online</h3>
                  <div className="flex space-x-6">
                    <Link 
                      href="https://www.linkedin.com/in/yourprofile" 
                      target="_blank" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin size={30} />
                    </Link>
                    <Link 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <FaGithub size={30} />
                    </Link>
                    <Link 
                      href="mailto:khushi.designer@example.com" 
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <FaEnvelope size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 