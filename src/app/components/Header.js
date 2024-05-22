import Image from "next/image";
import ButtonCall from "./ButtonCall";
import Navbar from "./Navbar";
import { logo } from '../../../public/logo_black.svg'


export default function Header() {
    return (
        <section id="inicio" className="relative w-full bg-[url('/moda.webp')] bg-cover bg-center"
        style={{ paddingTop: "56.25%" }}>
            <div className="flex w-full mx-auto absolute top-0">
                <Navbar />
            </div>
            <div className="flex w-full mx-auto absolute  justify-center -bottom-24"></div>
            <div className="flex mx-auto w-11/12 md:w-8/12 justify-center md:absolute md:top-2/3 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-2/3 z-10">
                <div className="flex flex-col w-full bg-gray-100 bg-opacity-80 lg:p-6 lg:py-10 p-3 py-6 rounded-2xl border-2 border-white">
                    <h1 className="font-semibold text-secondary text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mx-auto">
                        El eCommerce para tu negocio de moda
                    </h1>
                    <div className="flex lg:flex-row  flex-col w-8/12 space-y-2 lg:space-y-0 md:w-10/12 mx-auto  lg:text-lg xl:text-xl justify-center z-10 mt-10">
                        <ButtonCall
                            text="Solicitar información"
                            link="#contact"
                            class="w-3/6"
                        />
                        <div className="w-20"></div>
                        <ButtonCall text="Ver Demo" />
                    </div>
                </div>
            </div>
            <Image
                src={logo}
                alt="Logo de la empresa"
                width={150} // Asigna un ancho fijo
                height={200} // Asigna una altura fija
                className="mx-auto mt-4 sm:hidden block" // Asegura que la imagen se ajuste correctamente dentro del contenedor
            />
        </section>
    )
}