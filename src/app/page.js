import Image from "next/image";
import Navbar from "./components/Navbar";
import ButtonCall from "./components/ButtonCall";
import AboutAs from "./components/AboutAs";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-gradient-to-r from-white to-[#E2E3DE] h-screen">
      <div
        className="relative w-full bg-[url('/moda.png')] bg-cover bg-center"
        style={{ paddingTop: "56.25%" }}
      >
        <div className="flex w-full mx-auto absolute top-0">
          <Navbar />
        </div>
        <div className="flex w-full mx-auto absolute  justify-center -bottom-24"></div>
        <div className="flex w-8/12 justify-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-10">
          <div className="flex flex-col w-full bg-gray-100 bg-opacity-80 p-6 py-10 rounded-2xl border-2 border-white  ">
            <h1 className="font-semibold text-secondary text-4xl text-center mx-auto">
              El eCommerce para tu negocio de moda
            </h1>
            <div className="flex  w-10/12 mx-auto   justify-center z-10 mt-10">
              <ButtonCall text="Solicitar información" />
              <div className="w-20"></div>
              <ButtonCall text="Ver Demo" />
            </div>
          </div>
        </div>
      </div>
      <AboutAs />
    </div>
  );
}
