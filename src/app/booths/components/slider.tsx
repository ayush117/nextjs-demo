"use client";

import { useState } from "react";
import Card from "./card";
import data from "@/utils/booths";

const Slider = () => {
  const [curr, setCurr] = useState(0);

  const previous = () => {
    setCurr(curr - 1);
  };

  const next = () => {
    setCurr(curr + 1);
  };

  return (
    <div
      id="default-carousel"
      className="relative mx-auto mt-10 flex w-full max-w-4xl justify-center gap-10 md:px-20 lg:gap-10"
      data-carousel="slide"
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className={`duration-700 ease-in-out ${curr === item.id - 1 ? "block" : "hidden"}`}
              data-carousel-item
            >
              <Card item={item} />
            </div>
          ))}
      </div>
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
        onClick={previous}
        disabled={curr === 0}
      >
        <span
          className={`inline-flex size-10 items-center justify-center rounded-full ${curr === 0 ? "bg-gray-800/30" : "bg-blue-950"} `}
        >
          <svg
            className="size-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
        onClick={next}
        disabled={curr === data.length - 1}
      >
        <span
          className={`inline-flex size-10 items-center justify-center rounded-full ${curr === data.length - 1 ? "bg-gray-800/30" : "bg-blue-950"} `}
        >
          <svg
            className="size-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Slider;
