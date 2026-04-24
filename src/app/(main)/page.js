import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-cols-4 gap-4">
      <div className="font-bold text-5xl bg-amber-400">
        All category
      </div>
      <div className="font-bold text-5xl bg-red-500 col-span-2">
        All news
      </div>
      <div className="font-bold text-5xl bg-purple-300">
        All social
      </div>
    </div>
  );
}
