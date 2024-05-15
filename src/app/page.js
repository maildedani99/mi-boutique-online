import Image from "next/image";
import Navbar from "./components/Navbar";
import ButtonCall from "./components/ButtonCall";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col bg-gradient-to-r from-white to-[#E2E3DE] h-screen">
      <div
        className="relative w-full bg-[url('/moda.png')] bg-cover bg-center"
        style={{ paddingTop: "56.25%" }}
      >
        <div className="flex w-full mx-auto absolute top-0">
          <Navbar />
        </div>
        <div className="flex w-full mx-auto absolute  justify-center -bottom-24">
        </div>
      </div>
      <div className="flex w-full justify-center align-middle -mt-48 z-10">
        <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h1 className="font-semibold text-black text-4xl text-center">
            El ecommerce para tu negocio de moda
          </h1>
        </div>
      </div>
        <div className="flex  w-full   justify-center z-10 mt-28">
        <ButtonCall text="Solicitar información"  />
        <div className="w-8"></div>
        <ButtonCall text="Ver Demo"  />
        </div>
    </div>
  );
}
