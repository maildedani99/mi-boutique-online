"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full max-w-[1400px]  transition-all duration-300 z-50 ${isScrolled ? "bg-gradient-to-r from-white to-[#E2E3DE]  py-2" : "bg-transparent xl:py-2"
      }`}
    >
      <div className="w-full mx-auto flex justify-between ">
        <div className={`hidden sm:flex transition-all   duration-300 ${isScrolled ? 'w-[125px]  ' : 'w-[100px] p-3 sm:w-[150px] md:w-[250px] lg:w-[350px]  md:p-10'}`}>
          <Image
            src="/logo_billion_4.png"
            alt="Logo"
            width={200} // Asigna un ancho fijo
            height={200} // Asigna una altura fija
            className="" // Asegura que la imagen se ajuste correctamente dentro del contenedor
          />
        </div>
        <ul className="flex w-full list-none  mt-6  px-2 md:p-0 md:w-[50%] justify-around text-primary font-semibold">
          <li className="mr-6">
            <Link href="/" className="hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#nosotros" className="hover:text-secondary">
              Nosotros
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/#services" className="hover:text-secondary">
              Servicios
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/#contact" className="hover:text-secondary">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
