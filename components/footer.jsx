"use client";
import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Requires 'react-icons' package

const footerSections = {
  Information: [
    'About Us',
    'Our Story',
    'Press',
    'Careers',
    'Blog',
    'Contact Us',
  ],
  Talrn: [
    'View iOS Profiles',
    'Discover',
  ],
  Vendor: [
    'Apply As Vendor',
    'Vendor Login',
    'Get Verified',
    'Remote Jobs',
    'Resources',
  ],
};

export default function Footer(){
  return (
    <footer className="bg-black text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-gray-700">
          
          {/* Loop through link sections */}
          {Object.entries(footerSections).map(([sectionTitle, links]) => (
            <div key={sectionTitle}>
              <h4 className="text-lg font-semibold mb-4">{sectionTitle}</h4>
              <ul className="space-y-2">
                {links.map((linkName) => (
                  <li key={linkName}>
                    {/* Replaced Link component with a styled div */}
                    <div className="text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer">
                        {linkName}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Section - Custom layout */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              {/* Replaced <a> tags with styled div for icons */}
              <div aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 cursor-pointer">
                <FaLinkedinIn size={20} />
              </div>
              <div aria-label="Facebook" className="text-gray-400 hover:text-blue-600 cursor-pointer">
                <FaFacebookF size={20} />
              </div>
              <div aria-label="Twitter" className="text-gray-400 hover:text-blue-300 cursor-pointer">
                <FaTwitter size={20} />
              </div>
              <div aria-label="Instagram" className="text-gray-400 hover:text-pink-500 cursor-pointer">
                <FaInstagram size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 text-sm text-gray-400">
          {/* Left side */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-3 md:mb-0">
            <span>© 2022 - 2025 <strong className="text-white">Talrn</strong></span>
            <span>| Labor Omnia Vincit</span>
            <span className="flex items-center space-x-1">
              <span>| by</span>
              {/* Replaced <a> tag with styled span */}
              <span className="text-white font-semibold cursor-pointer hover:underline">CG Advantage</span>
            </span>
          </div>

          {/* Right side */}
          <div className="flex space-x-4">
            {/* Replaced Link component with a styled div */}
            <div className="hover:text-white cursor-pointer">
              Terms of Use
            </div>
            {/* Replaced Link component with a styled div */}
            <div className="hover:text-white cursor-pointer">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

