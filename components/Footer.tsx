import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gold">KLINGEMAN CPAs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premier tax advisory for enterprise clients and high-net-worth individuals
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-gray-300">Contact</h4>
            <div className="space-y-3">
              <a href="tel:9189221019" className="flex items-center text-gray-400 hover:text-gold transition-colors group">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">(918) 922-1019</span>
              </a>
              <a href="mailto:Matt.Klingeman@klingemancpas.com" className="flex items-center text-gray-400 hover:text-gold transition-colors group">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm break-all">Matt.Klingeman@klingemancpas.com</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-gray-300">Office</h4>
            <div className="flex items-start text-gray-400">
              <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
              <div className="text-sm leading-relaxed">
                6539 E 31st St<br />
                Tulsa, OK 74145<br />
                <span className="text-gold font-semibold mt-2 block">By Appointment Only</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-4 text-gray-300">Connect</h4>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-gold transition-colors group"
            >
              <Linkedin className="w-4 h-4 mr-3" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Klingeman CPAs & Advisors. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
