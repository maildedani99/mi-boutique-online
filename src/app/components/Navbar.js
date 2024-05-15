import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full bg-transparent text-black justify-between mt-6   ">
      <Image 
            src="/logo_boutique.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
      <ul className="flex list-none m-0 p-0 w-[50%] justify-around text-primary font-semibold">
        <li className="mr-6">
          <Link href="/" className=" hover:text-secondary">
            Inicio
          </Link>
        </li>
        <li className="mr-6">
          <a href="#nosotros" className=" hover:text-secondary">
            Nosotros
          </a>
        </li>
        <li className="mr-6">
          <Link href="/services" className=" hover:text-secondary">
            Servicios
          </Link>
        </li>
       
        <li className="mr-6">
          <Link href="/contact" className=" hover:text-secondary">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}
