"use client";
import React, { useState } from "react";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-[#f5f6f8]/86 backdrop-blur-md border-b border-[#e3e5ea]">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display font-bold text-[1.05rem] no-underline flex items-center gap-2 tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-[#0fa982]" />
          shakib.dev
        </a>
        <button
          className="md:hidden inline-flex flex-col gap-1 items-center justify-center w-[38px] h-[38px] rounded-8 border border-[#e3e5ea] bg-white cursor-pointer"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
        >
          <span className="w-4 h-[2px] bg-[#14171c]" />
          <span className="w-4 h-[2px] bg-[#14171c]" />
        </button>
        <nav
          className={`flex md:flex-row items-center gap-7 fixed md:static top-[56px] left-0 right-0 md:p-0 p-6 md:bg-transparent bg-white border-b border-[#e3e5ea] md:border-0 flex-col transition-all duration-150 ease-in-out ${
            isNavOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "md:opacity-100 md:translate-y-0 max-md:opacity-0 max-md:-translate-y-2 max-md:pointer-events-none"
          }`}
        >
          {["Work", "Experience", "Skills", "Writing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsNavOpen(false)}
              className="no-underline text-[#5b6270] hover:text-[#14171c] text-[0.93rem] font-medium py-1.5 px-0.5 border-b-2 border-transparent hover:border-[#2e5eff] transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsNavOpen(false)}
            className="font-mono text-[0.82rem] text-[#2e5eff] border border-[#eaefff] bg-[#eaefff] rounded-lg py-1.5 px-3 hover:border-[#2e5eff] hover:bg-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
