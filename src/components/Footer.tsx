import React from 'react';
import { Code2, Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Manoel Florencio</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Desenvolvedor Fullstack especializado em criar soluções digitais completas 
              que transformam ideias em realidade. Foco em qualidade, performance e resultados.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors duration-300 group"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Portfólio', id: 'portfolio' },
                { name: 'Contato', id: 'contato' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sites Responsivos</li>
              <li>E-commerce</li>
              <li>Landing Pages</li>
              <li>Sistemas Web</li>
              <li>Automações</li>
              <li>Integrações API</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2025 Todos os direitos reservados. Criado por Manoel Florencio com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>e código.</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors duration-300 group"
            >
              <ArrowUp className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="py-4 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Desenvolvedor Fullstack | React • Node.js • MongoDB • Automações | 
              Transformando ideias em soluções digitais de alto impacto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;