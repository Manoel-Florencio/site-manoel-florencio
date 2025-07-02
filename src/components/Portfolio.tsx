import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      client: 'TechStore Brasil',
      description: 'Plataforma completa de e-commerce com painel administrativo, integração de pagamentos e sistema de estoque.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-commerce',
      link: '#',
      github: '#'
    },
    {
      title: 'Sistema de Gestão',
      client: 'Consultoria Alpha',
      description: 'Sistema web para gestão de clientes, projetos e relatórios financeiros com dashboard interativo.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express', 'MySQL', 'Chart.js'],
      category: 'Sistema Web',
      link: '#',
      github: '#'
    },
    {
      title: 'Landing Page Conversão',
      client: 'Marketing Pro',
      description: 'Landing page de alta conversão para curso online com integração de pagamentos e automações.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'N8N'],
      category: 'Landing Page',
      link: '#',
      github: '#'
    },
    {
      title: 'App de Delivery',
      client: 'RestaurantePlus',
      description: 'Aplicação web para delivery com painel do restaurante, tracking de pedidos e integração com WhatsApp.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'WhatsApp API'],
      category: 'Web App',
      link: '#',
      github: '#'
    },
    {
      title: 'Portal Corporativo',
      client: 'Empresa Global',
      description: 'Portal institucional responsivo com área restrita, blog integrado e sistema de newsletter.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Strapi', 'PostgreSQL'],
      category: 'Site Institucional',
      link: '#',
      github: '#'
    },
    {
      title: 'Automação de Processos',
      client: 'LogisticaTech',
      description: 'Sistema de automação para integração entre CRM, planilhas e notificações automáticas.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['N8N', 'Google Sheets', 'Webhooks', 'Slack API'],
      category: 'Automação',
      link: '#',
      github: '#'
    }
  ];

  const categories = ['Todos', 'E-commerce', 'Sistema Web', 'Landing Page', 'Web App', 'Site Institucional', 'Automação'];
  const [activeCategory, setActiveCategory] = React.useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meu Portfólio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Projetos que demonstram minha experiência e qualidade técnica
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors duration-200"
                    >
                      <Eye className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 text-sm font-semibold">{project.category}</span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.client}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;