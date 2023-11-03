"use client";

import { useState } from "react";
import { JOKES_CONTENT } from "./apis/mock-data";

export default function Home() {
  const [nextJokeIndex, setNextJokeIndex] = useState(0);

  const handleNextJoke = () => {
    if (nextJokeIndex === JOKES_CONTENT.length - 1) {
      setNextJokeIndex(0);
    } else {
      setNextJokeIndex(nextJokeIndex + 1);
    }
  };

  return (
    <main className="flex flex-col mb-[100px]">
      <div className="h-[250px] bg-[#29B363] flex items-center justify-center flex-col text-white gap-6">
        <h1 className="text-3xl font-semibold">
          A joke a day keeps the doctor away
        </h1>
        <p className="text-xs">
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>

      <div className="px-[312px] flex flex-col gap-12 mt-16">
        <p className="text-[#6C6C6C] leading-6">
          {JOKES_CONTENT[nextJokeIndex]}
        </p>
        <span className="h-[1px] bg-gray-200 mx-[100px]"></span>
        <div className="flex justify-center gap-7">
          <button
            onClick={handleNextJoke}
            className="px-20 py-3 shadow-md bg-[#2C7EDB] text-white text-[15px]"
          >
            This is Funny!
          </button>
          <button
            onClick={handleNextJoke}
            className="px-20 py-3 shadow-md bg-[#29B363] text-white text-[15px]"
          >
            This is not funny.
          </button>
        </div>
      </div>
    </main>
  );
}
