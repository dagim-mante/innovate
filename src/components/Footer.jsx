import React from "react";
import footerLogo from "../assets/footer-logo.webp"
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <div className="!px-0 !py-0">
      <div className="">
        <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <a href="/" className="flex items-center space-x-2 w-fit">
                <span className="sr-only">Your Company</span>
                <img src={footerLogo} className="w-20 h-20" alt='footer logo' />
              </a>
              <p className="text-sm">
                Innovate ET is a professional training centre, specializing in the field of Information and communication technologies (ICT) and Enterprise Solutions to business .
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Linkedin</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Trainings</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Schedule</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href="#" className="hover:text-white transition-colors">+251 91 183 3018</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="#" className="hover:text-white transition-colors">info@innovateet.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 sm:w-12 sm:h-12" />
                    <a href="#" className="hover:text-white transition-colors">P.O. Box 62604, Web Get Building, Addis Ababa, Ethiopia</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} INOVAET, Inc. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
