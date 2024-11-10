// src/components/ContactBar.jsx
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

function ContactBar() {
  return (
    <div className="w-full bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      {/* Email Section on the Left */}
      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-orange-400" />
        <span className="text-sm md:text-base">contact@example.com</span>
      </div>

      {/* Phone Section in the Center */}
      <div className="flex items-center space-x-2">
        <FaPhone className="text-orange-400" />
        <span className="text-sm md:text-base">+123 456 7890</span>
      </div>

      {/* WhatsApp Section on the Right */}
      <div className="flex items-center space-x-2">
        <FaWhatsapp className="text-green-500" />
        <span className="text-sm md:text-base">+987 654 3210</span>
      </div>
    </div>
  );
}

export default ContactBar;
