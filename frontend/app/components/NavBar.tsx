import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={100}
        height={100}
        className="w-16 h-16"
      />
      <div className="flex items-center gap-2 text-right">
        <div className="flex flex-col">
          <h3 className="text-sm italic text-[#A8A8A8]">Handicrafted by</h3>
          <p className="text-sm">Jim HLS</p>
        </div>
        <Image
          src={"/images/avatar.jpg"}
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-16 border rounded-full"
        />
      </div>
    </div>
  );
}
