"use client";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  return (
    <button
      className="flex   mx-auto w-4/6  md:w-2/6 bg-[#517A93] px-2 py-3 rounded-full text-white cursor-pointer hover:bg-secondary border-2 border-secondary  font-semibold"
      onClick={() => {
        router.back();
      }}
    >
      <span className="mx-auto font-semibold">Cerrar</span>
    </button>
  );
}
