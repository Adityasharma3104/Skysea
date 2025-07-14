import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleLinkClick = (linkName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Current Openings', href: '#openings' },
    { name: 'Client Portal', href: '#portal' },
    { name: 'Career Guidance', href: '#guidance' }
  ];

  const services = [
    { name: 'BPO Recruitment', href: '#bpo' },
    { name: 'Healthcare Staffing', href: '#healthcare' },
    { name: 'Voice Process Hiring', href: '#voice' },
    { name: 'Non-Voice Recruitment', href: '#nonvoice' },
    { name: 'Executive Search', href: '#executive' }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', href: '#linkedin' },
    { icon: Twitter, name: 'Twitter', href: '#twitter' },
    { icon: Facebook, name: 'Facebook', href: '#facebook' },
    { icon: Instagram, name: 'Instagram', href: '#instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <span className="text-xl font-bold">SkySeaConsulting</span>
                  <p className="text-sm text-gray-400">Gurgaon</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted recruitment partner in Gurgaon, specializing in BPO and healthcare hiring. 
                Connecting exceptional talent with leading companies since 2019.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>info@skyseaconsulting.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span>Sector 44, Gurgaon, Haryana</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold mb-6 block">Quick Links</span>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.name)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold mb-6 block">Our Services</span>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(service.name)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold mb-6 block">Stay Connected</span>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest job opportunities and industry insights.
              </p>
              
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                  />
                  <button
                    onClick={() => handleLinkClick('Newsletter')}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium mb-3 block">Follow Us</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(social.name)}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                    >
                      <social.icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 SkySeaConsulting. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleLinkClick('Privacy Policy')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('Terms of Service')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('Cookie Policy')}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;