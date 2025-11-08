import Link from "next/link";
import React from "react";

function MenuModal() {
  return (
    <menu>
      <div className="w-full h-full fixed top-0 left-0 z-19 bg-[#FBFBFB] py-14">
        <div>
          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/pricing"}>Pricing</Link>
          </div>

          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="w-full p-5 text-6xl text-[#002BBA] text-center font-serif font-semibold tracking-tight border-b border-[#002DDA]">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </menu>
  );
}

export default MenuModal;
