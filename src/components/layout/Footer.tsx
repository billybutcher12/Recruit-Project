import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  ExternalLink,
  Heart,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  navigationLinks?: Array<{
    label: string;
    href: string;
  }>;
  copyrightYear?: number;
}

const Footer = ({
  companyName = "Recruitment Platform",
  companyAddress = "123 Recruitment Street, HR City, 12345",
  companyPhone = "+1 (555) 123-4567",
  companyEmail = "contact@recruitmentplatform.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.2,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <footer className="w-full bg-gradient-to-b from-white to-blue-50 border-t border-blue-100 pt-12 pb-6">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-bold text-blue-600 mb-4 flex items-center"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              {companyName}
            </motion.h3>
            <div className="space-y-4 text-sm text-gray-600">
              <motion.div
                className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>{companyAddress}</span>
              </motion.div>
              <motion.div
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>{companyPhone}</span>
              </motion.div>
              <motion.div
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span>{companyEmail}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-bold text-blue-600 mb-4 flex items-center"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Liên kết nhanh
            </motion.h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="border-b border-blue-50 pb-2"
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full mr-2"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-bold text-blue-600 mb-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Bản tin
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 mb-4"
              variants={itemVariants}
            >
              Đăng ký nhận thông tin về cơ hội việc làm mới nhất.
            </motion.p>
            <motion.div
              className="p-4 bg-white rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="px-4 py-3 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px]">
                  <Send className="h-4 w-4" /> Đăng ký
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="col-span-1 md:col-span-1"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-bold text-blue-600 mb-4"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Kết nối với chúng tôi
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 mb-4"
              variants={itemVariants}
            >
              Theo dõi chúng tôi trên mạng xã hội để cập nhật tin tức mới nhất.
            </motion.p>
            <motion.div
              className="flex justify-around p-4 bg-white rounded-lg shadow-md"
              variants={containerVariants}
            >
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-2 bg-blue-50 rounded-full"
                variants={socialVariants}
                whileHover="hover"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-colors p-2 bg-blue-50 rounded-full"
                variants={socialVariants}
                whileHover="hover"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors p-2 bg-blue-50 rounded-full"
                variants={socialVariants}
                whileHover="hover"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors p-2 bg-blue-50 rounded-full"
                variants={socialVariants}
                whileHover="hover"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-blue-100 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 flex items-center justify-center">
            <Heart className="h-4 w-4 text-red-500 mr-2" />© {copyrightYear}{" "}
            {companyName}. Tất cả các quyền được bảo lưu.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
