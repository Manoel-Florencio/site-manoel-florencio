import React from 'react';
import { Globe, Zap, Settings, TrendingUp, Smartphone, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Criação de Sites Responsivos',
      description: 'Sites modernos e responsivos que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência excepcional para seus usuários.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Performance Elevada', 'Cross-browser']
    },
    {
      icon: Zap,
      title: 'Landing Pages que Convertem',
      description: 'Páginas de alta conversão focadas em resultados, com design persuasivo e otimizadas para gerar leads e vendas.',
      features: ['Alta Conversão', 'A/B Testing', 'Analytics Integrado', 'CRO Aplicado']
    },
    {
      icon: Settings,
      title: 'Sistemas Web Personalizados',
      description: 'Desenvolvimento de sistemas sob medida para atender às necessidades específicas do seu negócio com total personalização.',
      features: ['Sob Medida', 'Escalável', 'Seguro', 'Manutenível']
    },
    {
      icon: TrendingUp,
      title: 'Integrações e Automações',
      description: 'Conecte seus sistemas e automatize processos com integrações inteligentes usando N8N, APIs e webhooks.',
      features: ['N8N Workflows', 'API Integration', 'Webhooks', 'Google Sheets']
    },
    {
      icon: Smartphone,
      title: 'Otimização Mobile',
      description: 'Garanto que seu site ou sistema funcione perfeitamente em dispositivos móveis com performance otimizada.',
      features: ['Mobile First', 'PWA Ready', 'Touch Optimized', 'Fast Loading']
    },
    {
      icon: Shield,
      title: 'Performance e SEO',
      description: 'Otimização técnica completa para garantir velocidade, segurança e melhor posicionamento nos buscadores.',
      features: ['Core Web Vitals', 'SEO Técnico', 'Security Headers', 'CDN Setup']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Serviços que Ofereço</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas de desenvolvimento web para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-500/50 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600">
                <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2">
                  Saiba mais
                  <div className="w-4 h-4 border-t-2 border-r-2 border-cyan-400 transform rotate-45 group-hover:translate-x-1 transition-transform duration-200"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Processo de Trabalho</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { step: '01', title: 'Análise', desc: 'Entendimento completo do projeto' },
                { step: '02', title: 'Planejamento', desc: 'Estratégia e arquitetura da solução' },
                { step: '03', title: 'Desenvolvimento', desc: 'Codificação com as melhores práticas' },
                { step: '04', title: 'Entrega', desc: 'Deploy e suporte pós-lançamento' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{phase.step}</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                  <p className="text-gray-400 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;