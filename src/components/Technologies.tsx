import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React.js', level: 88 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'API REST', level: 92 }
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 88 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      title: 'Automação & Integração',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'N8N', level: 85 },
        { name: 'Google Sheets API', level: 90 },
        { name: 'Webhooks', level: 88 },
        { name: 'Zapier', level: 80 },
        { name: 'API Integration', level: 92 }
      ]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tecnologias que Utilizo</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolho as melhores tecnologias para oferecer desempenho, segurança e escalabilidade aos meus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Sempre Aprendendo</h3>
            <p className="text-gray-300 text-lg">
              O mundo da tecnologia evolui rapidamente, e eu me mantenho sempre atualizado com as 
              últimas tendências e melhores práticas do mercado para entregar soluções de ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;