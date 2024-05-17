"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      className={`fixed w-full text-black justify-between transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent mt-6"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo_boutique.png"
          alt="Logo"
          width={isScrolled ? 100 : 300} // Ajustar el tamaño del logo en función del desplazamiento
          height={isScrolled ? 100 : 300}
          className="transition-all duration-300"
        />
        <ul className="flex list-none m-0 p-0 w-[50%] justify-around text-primary font-semibold">
          <li className="mr-6">
            <Link legacyBehavior href="/#inicio" className="hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li className="mr-6">
            <Link legacyBehavior href="/#nosotros" className="hover:text-secondary">
              Nosotros
            </Link> 
          </li>
          <li className="mr-6">
            <Link legacyBehavior href="/#services" className="hover:text-secondary">
              Servicios
            </Link>
          </li>
          <li className="mr-6">
            <Link legacyBehavior href="/#contact" className="hover:text-secondary">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
