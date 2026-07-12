import React from "react";
import Section from "./Section";

const Writing = () => {
  return (
    <Section
      id="writing"
      label="// ELSEWHERE"
      title="Writing & problem solving"
      description="Where I think out loud and keep the fundamentals sharp."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://medium.com/@shakibuddinbhuiyan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#e3e5ea] rounded-[14px] p-4.5 px-5 no-underline text-[#14171c] flex items-center justify-between gap-3 hover:border-[#2e5eff] hover:-translate-y-0.5 transition-all"
        >
          <div>
            <p className="font-bold mb-1 font-display">Medium</p>
            <p className="text-[#5b6270] text-[0.87rem] m-0">
              Articles on frontend engineering
            </p>
          </div>
          <span className="text-[#2e5eff] text-[1.2rem]">→</span>
        </a>
        <a
          href="https://www.hackerrank.com/profile/Shakib__Uddin"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#e3e5ea] rounded-[14px] p-4.5 px-5 no-underline text-[#14171c] flex items-center justify-between gap-3 hover:border-[#2e5eff] hover:-translate-y-0.5 transition-all"
        >
          <div>
            <p className="font-bold mb-1 font-display">HackerRank</p>
            <p className="text-[#5b6270] text-[0.87rem] m-0">
              Data structures & algorithms practice
            </p>
          </div>
          <span className="text-[#2e5eff] text-[1.2rem]">→</span>
        </a>
      </div>
    </Section>
  );
};

export default Writing;
