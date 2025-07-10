// components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
            Gainova
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering the next-gen with future-ready innovations and creative technology.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-all duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-200">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-200">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <p className="text-sm">Email: <a href="mailto:support@gainova.com" className="hover:text-white">support@gainova.com</a></p>
          <p className="text-sm mt-1">Jobs: <a href="mailto:careers@gainova.com" className="hover:text-white">careers@gainova.com</a></p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Gainova. All rights reserved.
      </div>
    </footer>
  );
}
