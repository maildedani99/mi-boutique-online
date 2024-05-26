import ClientImage from "./ClientImage";

export default function Services () {
  return (
    <section id="services" className="py-12 ">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-semibold text-center text-[#517A93] mb-8">Nuestros Servicios</h2>
        <p className="text-lg text-text leading-relaxed mb-8 text-center">
          En Mi Boutique Online, ofrecemos una variedad de servicios diseñados para ayudarte a lanzar y gestionar tu tienda de moda online de manera efectiva. Nuestro objetivo es proporcionarte todas las herramientas que necesitas para tener éxito en el mundo del ecommerce.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="service-item">
            <ClientImage 
              src="/mi-boutique-online/demo_1_tn3nok" 
              alt="foto demo eCommerce" 
              width={500} 
              height={300} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
            <h3 className="text-2xl font-semibold text-[#517A93] mt-4 mb-2">Diseño Adaptado</h3>
            <p className="text-text">
              Te ofrecemos diseños adaptados que reflejan la identidad de tu marca y atraen a tus clientes.
            </p>
          </div>
          
          <div className="service-item">
          <ClientImage 
              src="/mi-boutique-online/pagos_gvw8i7" 
              alt="foto demo eCommerce" 
              width={500} 
              height={300} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
            <h3 className="text-2xl font-semibold text-[#517A93] mt-4 mb-2">Integración de Pagos</h3>
            <p className="text-text">
              Implementamos soluciones de pago seguras y fáciles de usar, facilitando transacciones sin problemas para tus clientes.
            </p>
          </div>
          
          <div className="service-item">
          <ClientImage 
              src="/mi-boutique-online/sotck_jlhu7l" 
              alt="foto demo eCommerce" 
              width={500} 
              height={300} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
            <h3 className="text-2xl font-semibold text-[#517A93] mt-4 mb-2">Gestión de Inventario</h3>
            <p className="text-text">
              Simplificamos la gestión de tu inventario con herramientas que te permiten controlar tus productos y stock en tiempo real.
            </p>
          </div>
          
          <div className="service-item">
          <ClientImage 
              src="/mi-boutique-online/estadisticas_cftbvg" 
              alt="foto demo dashboard" 
              width={500} 
              height={300} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
            <h3 className="text-2xl font-semibold text-[#517A93] mt-4 mb-2">Análisis y Reportes</h3>
            <p className="text-text">
              Obtén informes detallados sobre el rendimiento de tu tienda, ayudándote a tomar decisiones informadas para mejorar tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
