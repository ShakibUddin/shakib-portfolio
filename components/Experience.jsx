import React from "react";
import Section from "./Section";

const Experience = ({ exp, idx }) => {
  return (
    <div className="rounded-2xl border border-[#e3e5ea] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#2e5eff]/30">
      <div className="flex justify-between items-start gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#14171c]">{exp.org}</h3>

          <p className="mt-1 text-[#5b6270] text-[15px]">{exp.role}</p>
        </div>

        <div className="text-right shrink-0">
          <p className="font-mono text-sm text-[#8c93a3]">{exp.period}</p>

          {exp.isCurrent && (
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Current
            </span>
          )}
        </div>
      </div>

      <ul className="mt-5 list-disc pl-5 text-[#5b6270] space-y-2">
        {exp.points.map((pt, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{
              __html: pt.replace(
                /<strong>(.*?)<\/strong>/g,
                '<strong class="text-[#14171c] font-semibold">$1</strong>'
              ),
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Experience;
