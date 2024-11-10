// src/components/Contact.jsx
//import React from 'react';

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h2 className="text-4xl font-bold text-orange-400 mb-8">Contact Us</h2>

      <form className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Mobile Number Input */}
        <div>
          <label htmlFor="mobile" className="block text-lg mb-2">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-lg mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 rounded text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
