import React from 'react';
import { User, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Anos de Experiência', value: '5+' },
    { icon: Award, label: 'Projetos Entregues', value: '50+' },
    { icon: MapPin, label: 'Localização', value: 'Brasil' },
    { icon: User, label: 'Clientes Satisfeitos', value: '30+' }
  ];

  return (
    <section id="sobre" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Olá! Sou Manoel Florencio
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Desenvolvedor Fullstack apaixonado por criar soluções digitais que funcionam de verdade. 
              Com experiência em desenvolvimento web completo — do front ao back — transformo ideias 
              em projetos funcionais, modernos e de alto impacto.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Especializado em tecnologias modernas como React, Node.js, e integrações inteligentes 
              com automações. Meu foco é entregar não apenas código, mas soluções que geram 
              resultados reais para meus clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Minha Missão</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformar ideias em soluções digitais que impactam positivamente os negócios dos meus clientes, 
                utilizando as melhores práticas de desenvolvimento e tecnologias de ponta.
              </p>
              
              <h4 className="text-xl font-bold text-white mb-4">Valores</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Qualidade e excelência técnica
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Comunicação clara e transparente
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Foco em resultados mensuráveis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Inovação e aprendizado contínuo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;