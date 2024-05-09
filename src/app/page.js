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
        <div className="flex  w-full   justify-center">
        <ButtonCall text="Solicitar información"  />
        <ButtonCall text="Ver Demo"  />
        </div>
    </div>
  );
}
