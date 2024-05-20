"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Añadido campo de teléfono
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '', // Resetear campo de teléfono
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setError('Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section id="contact" className="py-12 ">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-semibold text-center text-[#517A93] mb-8">Contáctanos</h2>
        <p className="text-lg text-text leading-relaxed mb-8 text-center">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través del siguiente formulario.
        </p>

        {submitted ? (
          <p className="text-center text-green-500">¡Tu mensaje ha sido enviado con éxito!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-text font-semibold mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-text font-semibold mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-text font-semibold mb-2">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-text font-semibold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                defaultValue="Deseo información sobre el e-Commerce de moda de Mi Boutique Online"
                placeholder="Deseo información sobre el e-Commerce de moda de Mi Boutique Online"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <button type="submit" className="w-full bg-[#517A93] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#405a6b]">Enviar</button>
          </form>
        )}

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
}
