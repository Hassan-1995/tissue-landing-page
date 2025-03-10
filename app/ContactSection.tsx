import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { JSX } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface ContactItemProps {
  icon: JSX.Element;
  title: string;
  details: string[];
}

const ContactSection = () => {
  return (
    // <section id="contact" className="w-full py-16 bg-gray-900 relative">
    <section
      id="contact"
      className="w-full py-24 md:py-32 bg-gray-900 relative min-h-[500px] md:min-h-[600px]"
    >
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/wave-pattern.svg')" }}
      ></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8 md:space-y-0 md:flex md:justify-between md:text-left">
          {/* Email, Phone, Address in one row */}
          <div className="space-y-9 md:space-y-0 md:flex md:space-x-10 md:justify-between w-full">
            <ContactItem
              icon={<Mail className="w-6 h-6 text-[#d4a76a]" />}
              title="Email Us"
              details={["info@sunny.com.pk", "support@sunny.com.pk"]}
            />
            <ContactItem
              icon={<FaWhatsapp className="w-6 h-6 text-[#d4a76a]" />}
              title="WhatsApp Us"
              details={["+92-324-2886139", "Mon-Fri, 9am-5pm PST"]}
            />
            <ContactItem
              icon={<MapPin className="w-6 h-6 text-[#d4a76a]" />}
              title="Visit Us"
              details={["C8, Dr Israr Ahmed Road", "Karachi, Sindh, Pakistan"]}
            />
          </div>
        </div>

        {/* Social Media Section - Always on the next line */}
        <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold text-[#d4a76a] mb-2">
            Follow Us
          </h4>
          <div className="flex justify-center space-x-4">
            <SocialIcon href="https://facebook.com" Icon={Facebook} />
            <SocialIcon href="https://instagram.com" Icon={Instagram} />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4 text-gray-400">
          &copy; {new Date().getFullYear()} Sunny Enterprises. All rights
          reserved.
          <span className="block mt-1 text-gray-400">
            Unauthorized reproduction or distribution is strictly prohibited.
          </span>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Item Component
const ContactItem: React.FC<ContactItemProps> = ({ icon, title, details }) => (
  <div className="flex items-start space-x-4">
    <div className="w-10 h-10 bg-[#8e2a3c]/20 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-[#d4a76a]">{title}</h4>
      {details.map((line, i) => (
        <p key={i} className="text-gray-300">
          {line}
        </p>
      ))}
    </div>
  </div>
);

// Social Icon Component
interface SocialIconProps {
  href: string;
  Icon: React.ElementType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8e2a3c] transition"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default ContactSection;
