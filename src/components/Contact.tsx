import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para gerar a URL do WhatsApp com as informações do formulário
  const generateWhatsAppURL = (data: typeof formData) => {
    const phoneNumber = '5592986289724'; // Seu número do WhatsApp (substitua pelo seu)
    
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${data.name}
*Email:* ${data.email}
*WhatsApp:* ${data.whatsapp}
*Tipo de Projeto:* ${data.projectType}

*Descrição do Projeto:*
${data.message}

Aguardo seu retorno!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Função para abrir WhatsApp diretamente (botão de contato rápido)
  const openWhatsAppDirect = () => {
    const phoneNumber = '5592986289724'; // Seu número do WhatsApp (substitua pelo seu)
    const message = 'Olá! Gostaria de conversar sobre um projeto.';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se todos os campos obrigatórios estão preenchidos
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.projectType || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Gerar URL do WhatsApp com as informações do formulário
    const whatsappURL = generateWhatsAppURL(formData);
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappURL, '_blank');
    
    // Mostrar feedback de sucesso
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      // Limpar formulário após envio
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Pronto para Transformar seu Projeto Digital?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha abaixo e receba uma proposta exclusiva para seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Vamos Conversar</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">dev.florencio98@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">WhatsApp</h4>
                  <p className="text-gray-300">+55 (92) 98628-9724</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-gray-300">Brasil (Atendimento Remoto)</p>
                </div>
              </div>
            </div>

            {/* Botão de WhatsApp Direto */}
            <div className="mb-8">
              <button
                onClick={openWhatsAppDirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                Falar Direto no WhatsApp
              </button>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Resposta Rápida</h4>
              <p className="text-gray-300 mb-4">
                Respondo todas as mensagens em até 24 horas. Para projetos urgentes, 
                entre em contato diretamente pelo WhatsApp.
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Orçamento gratuito e sem compromisso</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Solicitar Orçamento via WhatsApp</h3>
              <p className="text-gray-300 text-sm">
                Preencha o formulário abaixo e suas informações serão enviadas diretamente para o meu WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-white font-semibold mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-white font-semibold mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Sistema Web">Sistema Web</option>
                    <option value="Automação">Automação</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Descrição do Projeto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Descreva seu projeto, objetivos e qualquer informação relevante..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Redirecionando para WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5" />
                    Enviar via WhatsApp
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-gray-300 text-sm text-center">
                🔒 Seus dados estão seguros e serão enviados diretamente para o WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

