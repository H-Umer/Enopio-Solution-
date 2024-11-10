// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Description Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Connect with Us</h2>
          <p className="text-gray-300 text-lg text-justify">
            Stay connected with us on social media to stay updated on our latest projects, updates, and offerings.
            Our team is committed to creating value and building solutions for our clients. Join us on our journey and
            be part of an innovative community.
          </p>
        </div>

        {/* Social Links Section */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition duration-300">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
