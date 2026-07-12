import React from "react";

const Intro = () => {
  return (
    <div>
      <span className="font-mono text-[0.8rem] text-[#0fa982] flex items-center gap-2 mb-4 font-semibold tracking-wider">
        <span className="w-[7px] h-[7px] rounded-full bg-[#0fa982] animate-ping" />
        OPEN TO NEW OPPORTUNITIES · DHAKA, BD
      </span>
      <h1 className="font-display font-bold tracking-tight text-[clamp(2.1rem,4.6vw,3.2rem)] line-height-[1.08] mb-4.5">
        Frontend engineer who ships{" "}
        <span className="text-[#2e5eff]">production-ready</span> interfaces, not
        prototypes.
      </h1>
      <p className="text-[1.08rem] text-[#5b6270] max-w-[46ch] mb-7">
        <strong className="text-[#14171c] font-semibold">
          Shakib Uddin Bhuiyan
        </strong>{" "}
        — 4+ years building responsive, accessible web apps with React, Next.js
        and TypeScript...
      </p>
      <div className="flex gap-3 flex-wrap mb-7">
        <a
          href="#work"
          className="font-semibold text-[0.95rem] rounded-xl px-5 py-3 bg-[#14171c] text-white hover:bg-[#2e5eff] hover:shadow-[0_6px_16px_-6px_rgba(46,94,255,0.55)] transition-all"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-semibold text-[0.95rem] rounded-xl px-5 py-3 bg-white text-[#14171c] border border-[#e3e5ea] hover:border-[#14171c] transition-all"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Intro;
