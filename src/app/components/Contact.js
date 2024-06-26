"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: 'Deseo información sobre el e-Commerce de moda de Mi Boutique Online.',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://be-mi-boutique.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '', 
          message: '',
        });
        router.push(`/alert?messageId=alert_2`)
      } else {
        throw new Error('Failed to send message');
      }
    } catch  {
      router.push(`/alert?messageId=alert_3`)
    }
  };

  return (
    <section id="contact" className="py-12 ">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-semibold text-center text-[#517A93] mb-8">Contáctanos</h2>
        <p className="text-lg text-text leading-relaxed mb-8 text-center">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través del siguiente formulario.
        </p>


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
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
            />
          </div>
          <button type="submit" className="w-full bg-[#517A93] text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-[#405a6b]">Enviar</button>
        </form>
      </div>
    </section>
  );
}
