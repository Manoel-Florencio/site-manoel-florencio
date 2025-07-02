import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO da TechStart',
      project: 'E-commerce Completo',
      rating: 5,
      comment: 'Manoel entregou um e-commerce excepcional que superou todas as nossas expectativas. A qualidade técnica e o atendimento foram impecáveis. Nossas vendas aumentaram 300% após o lançamento.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ana Rodrigues',
      position: 'Diretora de Marketing',
      project: 'Landing Page de Conversão',
      rating: 5,
      comment: 'A landing page desenvolvida pelo Manoel teve uma taxa de conversão de 15%, muito acima da média do mercado. O projeto foi entregue no prazo e com qualidade excepcional.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Roberto Santos',
      position: 'Fundador da LogisTech',
      project: 'Sistema de Gestão',
      rating: 5,
      comment: 'O sistema desenvolvido revolucionou nossa operação. A automação de processos nos economiza 20 horas semanais. Manoel é um profissional extremamente competente e dedicado.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Mariana Costa',
      position: 'Proprietária do RestaurantePlus',
      project: 'App de Delivery',
      rating: 5,
      comment: 'O app de delivery transformou nosso negócio. Interface intuitiva, funcionalidades completas e integração perfeita com WhatsApp. Recomendo o trabalho do Manoel sem hesitação.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Pedro Oliveira',
      position: 'CTO da InnovaCorp',
      project: 'Portal Corporativo',
      rating: 5,
      comment: 'Profissional excepcional! Entregou um portal corporativo moderno e funcional. A comunicação foi clara durante todo o projeto e o resultado final superou nossas expectativas.',
      avatar: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Juliana Ferreira',
      position: 'Gerente de Operações',
      project: 'Automação de Processos',
      rating: 5,
      comment: 'As automações implementadas pelo Manoel otimizaram completamente nossos processos internos. Reduzimos erros em 90% e aumentamos a produtividade significativamente.',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Clientes Satisfeitos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o que meus clientes falam sobre os projetos desenvolvidos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-500/50 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-cyan-400/20" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                "{testimonial.comment}"
              </p>

              <div className="border-t border-slate-600 pt-4">
                <span className="text-cyan-400 text-sm font-semibold">
                  Projeto: {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Resultados que Falam por Si</h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { number: '98%', label: 'Taxa de Satisfação' },
                { number: '100%', label: 'Projetos Entregues no Prazo' },
                { number: '50+', label: 'Projetos Concluídos' },
                { number: '30+', label: 'Clientes Felizes' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;