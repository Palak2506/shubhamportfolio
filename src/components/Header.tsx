import { useState } from 'react';
import { Menu, X, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Shubham Alone
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Education
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:shubham.alone7799@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+353892301595" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shubham-alone-4297b11b8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Education
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-left">
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-3">
                <a href="mailto:shubham.alone7799@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/shubham-alone-4297b11b8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;