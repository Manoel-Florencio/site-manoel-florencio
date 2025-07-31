import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import imgManoel from '../assets/img-manoel.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Desenvolvo
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> experiências digitais </span>
              completas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Sites modernos, sistemas personalizados e soluções inteligentes para seu negócio. 
              Da ideia ao sistema final, transformo conceitos em realidade digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25"
              >
                Ver Projetos
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={imgManoel}
                alt="Manoel Florencio - Desenvolvedor Fullstack"
                className="w-full max-w-md mx-auto mt-8 mb-4 rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;