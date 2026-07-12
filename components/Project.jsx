import React from "react";

const Project = ({ proj, idx }) => {
  return (
    <article
      key={idx}
      className="
        bg-white 
        border border-[#e3e5ea] 
        rounded-2xl 
        overflow-hidden
        hover:border-[#cbd1db]
        hover:shadow-[0_18px_40px_-20px_rgba(20,23,28,0.25)]
        transition-all
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#e3e5ea] bg-[#fafafb]">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#9aa1ac]">
            Project
          </p>

          <h3 className="font-bold text-lg text-[#14171c] mt-1">
            {proj.title}
          </h3>
        </div>

        {proj.link ? (
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              shrink-0
              font-medium
              text-sm
              text-[#2e5eff]
              bg-[#eaefff]
              border border-[#dbe3ff]
              rounded-lg
              px-4 py-2
              hover:bg-white
              hover:border-[#2e5eff]
              transition-all
            "
          >
            Visit site ↗
          </a>
        ) : (
          <span
            className="
              shrink-0
              text-xs
              font-semibold
              text-[#d68a00]
              bg-[#fbf0dc]
              rounded-full
              px-3 py-1
            "
          >
            {proj.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#5b6270] text-[0.95rem] leading-7 mb-5">
          {proj.problem}
        </p>

        <ul className="pl-5 text-[#5b6270] text-[0.93rem] list-disc space-y-2 mb-6">
          {proj.points.map((pt, pIdx) => (
            <li key={pIdx}>{pt}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#9aa1ac] mb-3">
            Built with
          </p>

          <div className="flex flex-wrap gap-2">
            {proj.stack.map((tech) => (
              <span
                key={tech}
                className="
                  inline-flex
                  items-center
                  rounded-lg
                  border
                  border-[#dbe3ff]
                  bg-[#f5f8ff]
                  px-3
                  py-1.5
                  text-sm
                  font-semibold
                  text-[#2e5eff]
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
