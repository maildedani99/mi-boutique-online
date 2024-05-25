import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/logo_white.svg'
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 mt-8">
      <div className="flex flex-col lg:container mx-auto lg:px-6">
        <div className="flex  mb-6 md:mb-0 text-center mx-auto">
          <h2 className="text-2xl font-semibold my-auto">Mi Boutique Online</h2>
        </div>
        <div className="flex flex-col md:flex-row mx-auto md:mx-0 justify-between py-6 ">
          <div className="flex flex-col w-full md:w-4/12  ">
            <h3 className="text-xl font-semibold mx-auto">Información legal</h3>
            <div className="flex flex-col mx-auto text-gray-400 text-md text-left mt-4">
              <Link className="mx-auto " href="/conditions">
                - Términos y condiciones
              </Link>
              <Link className="mx-auto mt-2" href="/privacity">
                - Aviso Legal y Privacidad
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col w-4/12">
            <div className="flex mx-auto  w-full items-center justify-around space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/#aboutUs" className="text-gray-400 hover:text-white">
                Nosotros
              </Link>
              <Link
                href="/#services"
                className="text-gray-400 hover:text-white"
              >
                Servicios
              </Link>
              <Link href="/#contact" className="text-gray-400 hover:text-white">
                Contacto
              </Link>
              <Link href="/#contact" className="text-gray-400 hover:text-white">
                Demo
              </Link>
            </div>
            <div className="fle flex-1"></div>
            <Image
              src={Logo}
              alt="Logo de la empresa"
              width={150} // Asigna un ancho fijo
              height={150} // Asigna una altura fija
              className="mx-auto " // Asegura que la imagen se ajuste correctamente dentro del contenedor
            />
          </div>

          <div className="flex flex-col mt-6 md:mt-0 w-full md:w-4/12 items-center space-x-4 ">
            <h3 className="text-xl  font-semibold">Puedes encontrarnos aqui</h3>
            <div className="text-left mt-4 space-y-2 text-gray-400">
              <div className="flex">
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white"
                >
                  <FaPhone className="w-6 h-6 my-auto" />
                </a>
                <span className="my-auto px-2">602419086</span>
              </div>
              <div className="flex">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaWhatsapp className="w-6 h-6 my-auto" />
                </a>
                <span className="my-auto px-2">602419086</span>
              </div>
              <div className="flex">
                <a
                  href="mailto:info@miboutiqueonline.es"
                  className="text-gray-400 hover:text-white"
                >
                  <FaEnvelope className="w-6 h-6 my-auto" />
                </a>
                <span className="my-auto px-2">info@miboutiqueonline.es</span>
              </div>
              <div className="flex">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaInstagram className="w-6 h-6 my-auto" />
                </a>
                <span className="my-auto px-2">@miboutiqueonline</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-6 md:mb-0 text-center mx-auto">
          <Image
            src={Logo}
            alt="Logo de la empresa"
            width={150} // Asigna un ancho fijo
            height={150} // Asigna una altura fija
            className="mx-auto my-auto flex md:hidden" // Asegura que la imagen se ajuste correctamente dentro del contenedor
          />
          <div className="flex flex-col md:flex-row py-6">
            <h2 className="text-lg font-normal my-auto">Mi Boutique Online</h2>
            <p className="text-gray-400 my-auto ml-4">
              © 2024 Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
