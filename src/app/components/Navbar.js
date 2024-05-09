import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full bg-transparent text-black justify-between mt-10  ">
      <Image 
            src="/logo_boutique.png"
            alt="Picture of the author"
            width={300}
            height={300}
          />
      <ul className="flex list-none m-0 p-0 w-[50%] justify-between">
        <li className="mr-6">
          <Link href="/" className=" hover:text-gray-300">
            Inicio
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about" className=" hover:text-gray-300">
            Nosotros
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/services" className=" hover:text-gray-300">
            Servicios
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/blog" className=" hover:text-gray-300">
            Blog
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/contact" className=" hover:text-gray-300">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}
