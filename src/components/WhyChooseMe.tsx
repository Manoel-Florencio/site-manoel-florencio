import React from 'react';
import { CheckCircle, Clock, Users, Zap, Shield, Heart } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Desenvolvimento Completo e Personalizado',
      description: 'Soluções sob medida que atendem exatamente às necessidades do seu negócio, desde o planejamento até a entrega final.'
    },
    {
      icon: Users,
      title: 'Suporte Humanizado e Comunicação Clara',
      description: 'Comunicação transparente durante todo o projeto, com updates regulares e suporte dedicado mesmo após a entrega.'
    },
    {
      icon: Zap,
      title: 'Foco em Resultados Reais',
      description: 'Não entrego apenas código bonito, mas soluções que geram impacto real no seu negócio e aumentam sua produtividade.'
    },
    {
      icon: Clock,
      title: 'Entrega no Prazo com Alta Qualidade',
      description: 'Compromisso com prazos estabelecidos sem comprometer a qualidade técnica e funcional do projeto.'
    },
    {
      icon: Shield,
      title: 'Integrações Inteligentes com Automações',
      description: 'Especialista em conectar sistemas e automatizar processos, economizando tempo e reduzindo erros operacionais.'
    },
    {
      icon: Heart,
      title: 'Paixão pelo que Faço',
      description: 'Cada projeto é tratado com dedicação e atenção aos detalhes, garantindo que você receba o melhor resultado possível.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Por que Trabalhar Comigo?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra os diferenciais que fazem a diferença na escolha do seu desenvolvedor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-500/50 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Meu Compromisso com Você</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Quando você escolhe trabalhar comigo, está escolhendo um parceiro comprometido 
                  com o sucesso do seu projeto. Meu objetivo é não apenas entregar código, 
                  mas criar soluções que realmente impactem positivamente seu negócio.
                </p>
                <ul className="space-y-3">
                  {[
                    'Análise detalhada das suas necessidades',
                    'Proposta transparente com escopo claro',
                    'Desenvolvimento com as melhores práticas',
                    'Testes rigorosos antes da entrega',
                    'Suporte pós-entrega incluído',
                    'Documentação completa do projeto'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="bg-slate-800 rounded-xl p-8">
                  <h4 className="text-xl font-bold text-white mb-4">Garantia de Qualidade</h4>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">30 dias</div>
                  <p className="text-gray-300 mb-4">
                    de suporte gratuito após a entrega do projeto
                  </p>
                  <div className="text-2xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-300">
                    de satisfação garantida ou seu dinheiro de volta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;