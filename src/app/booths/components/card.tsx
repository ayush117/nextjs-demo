"use clients";

import Image from "next/image";

interface Item {
  id: number;
  category: string;
  size: string;
  dimensions: string;
  price: string;
  image: string;
  description: string;
  inclusions: string;
  remaining: string;
  header: string;
}

const Card = ({ item }: { item: Item }) => {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-3xl border border-gray-200">
      <div
        className={`bg-gradient-to-r px-4 py-2 text-center font-extrabold uppercase ${item.category === "Gold" ? "from-amber-300 via-amber-100 to-amber-300" : "from-gray-300 via-gray-100 to-gray-300"}`}
      >
        {item.header}
      </div>
      <div className="mb-4 grid justify-center gap-5 border-b py-4 text-center">
        <h2 className="px-4 text-4xl font-extrabold">{item.category}</h2>
        <h3 className="text-base font-medium">Package</h3>
        <div className="w-full rounded-full bg-yellow-300 px-4 py-1 text-sm font-semibold">
          Only {item.remaining} Remaining
        </div>
      </div>
      <div className="grid gap-4 p-5">
        <div className="relative flex w-full items-center gap-3 whitespace-nowrap text-sm font-bold  uppercase">
          {item.category} {item.size}
        </div>
        <div className="flex justify-center">
          <Image src="/img.jpg" width={500} height={500} alt="Picture of the author" />
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="w-48 rounded-xl bg-yellow-300 px-4 py-3.5 text-center text-lg font-bold shadow-xl shadow-yellow-100 active:scale-95">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
