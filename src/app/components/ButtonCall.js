import Link from "next/link";

export default function ButtonCall({ text, link = "" }) {
  return (
    <Link
      href={link}
      className="flex w-full bg-[#517A93] px-2 py-3 rounded-full text-white cursor-pointer hover:bg-secondary border-2 border-secondary "
    >
      <span className="mx-auto font-semibold text-xl">{text}</span>
    </Link>
  );
}
