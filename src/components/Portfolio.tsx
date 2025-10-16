import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pedreiroImg from '../assets/img-pedreiro.png';
import ecommerceImg from '../assets/img-e-commerce.png'; 
import landingImg from '../assets/img-landing.png';
import portalImg from '../assets/img-portal.png';
import financeiroImg from '../assets/img-financeiro.png';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'WebSite profissional',
    description: 'Desenvolvemos websites modernos e responsivos que representam a identidade e o propósito de empresas e empreendedores. Cada projeto é pensado para fortalecer a presença digital e transmitir credibilidade ao público.',
    image: pedreiroImg,
    technologies: ['JavaScript', 'React.js', 'CSS3', 'HTML5'],
    demoUrl: 'https://website-pedreiro.vercel.app/'
  },
  {
    id: 2,
    name: 'App de Delivery Inteligente',
    description: 'Aplicativo de delivery com IA para otimização de rotas, previsão de demanda, sistema de avaliações e chatbot integrado para atendimento.',
    image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Express.js', 'MongoDB', 'Firebase', 'Google Maps'],
    demoUrl: '#'
  },
  {
    id: 3,
    name: 'Landing Page de Alta Conversão',
    description: 'Landing pages criadas com foco em resultados, design estratégico e usabilidade. Perfeitas para campanhas de marketing, captação de leads e lançamentos de produtos, com estrutura otimizada para SEO e conversão.',
    image: landingImg,
    technologies: ['JavaScript', 'React.js', 'CSS3', 'HTML5'],
    demoUrl: '#'
  },
  {
    id: 4,
    name: 'E-commerce Inteligente',
    description: 'Loja online com recomendações por IA, analytics avançado e checkout otimizado para conversão.',
    image: ecommerceImg,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AI/ML'],
    demoUrl: 'https://e-commerce-tech-67fw.vercel.app/'
  },
  {
    id: 5,
    name: 'i9Vet - Petshop Online',
    description: 'Plataforma veterinária com agendamento online, prontuário digital e e-commerce para produtos pet.',
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'PayPal'],
    demoUrl: '#'
  },
  {
    id: 6,
    name: 'Sistema Corporativo Empresarial',
    description: 'Gestão empresarial completa com relatorios eletrônico, automação de processos e integração com todos os fucionarios.',
    image: portalImg,
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Automação'],
    demoUrl: 'https://sistema-colaborativo-rosy.vercel.app/'
  },
  {
    id: 7,
    name: 'Sistema Financeiro Empresarial',
    description: 'Controle financeiro completo com fluxo de caixa, conciliação bancária e relatórios gerenciais.',
    image: financeiroImg,
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Docker'],
    demoUrl: 'https://sistema-financeiro-two-zeta.vercel.app/'
  }
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e que estão transformando negócios com inovação infinita.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 mb-6 text-sm leading-relaxed min-h-[4rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demoUrl}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 w-full text-center shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
                  >
                    Ver Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="Projetos anteriores"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-10 h-2.5 bg-cyan-500'
                      : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-slate-800/80 border border-slate-700 hover:border-cyan-500 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="Próximos projetos"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-400 font-semibold text-lg">
              <span className="text-cyan-400">{currentIndex + 1}</span> / {totalPages} projetos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
